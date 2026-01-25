const express = require("express");
const cors = require("cors");
const XLSX = require("xlsx");
const path = require("path");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Load Excel file (must be committed)
const EXCEL_FILE = path.join(__dirname, "cleaned_wells_final copy.xlsx");
const workbook = XLSX.readFile(EXCEL_FILE);

// Convert all sheets to one array
let allData = [];
workbook.SheetNames.forEach(sheetName => {
  const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
  sheetData.forEach(row => (row.well = sheetName));
  allData.push(...sheetData);
});

// Helper to round numbers to 2 decimal places
function roundNumbers(obj) {
  const newObj = {};
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = Math.round(obj[key] * 100) / 100;
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

// Logic
function findBestParametersPerWell(data, depth, targetROP) {
  // Group data by well
  const wells = {};
  data.forEach(row => {
    if (!wells[row.well]) wells[row.well] = [];
    wells[row.well].push(row);
  });

  let bestPerWell = [];

  for (const well in wells) {
    const wellData = wells[well].filter(
      row => row.Depth >= depth - 30 && row.Depth <= depth + 30
    );

    if (wellData.length === 0) continue;

    // Compute ROP difference
    wellData.forEach(row => {
      row.rop_diff = Math.abs(row["ROP - Average(m/hr)"] - targetROP);
    });

    // Get the row with the smallest ROP diff for this well
    wellData.sort((a, b) => a.rop_diff - b.rop_diff);
    bestPerWell.push(wellData[0]);
  }

  // Now get top 3 overall by ROP diff
  bestPerWell.sort((a, b) => a.rop_diff - b.rop_diff);

  // Round all numeric values to 2 decimal places
  const rounded = bestPerWell.slice(0, 3).map(row => roundNumbers(row));

  return rounded;
}

// API
app.post("/recommend-params", (req, res) => {
  const { Depth, Target_ROP } = req.body;

  if (Depth === undefined || Target_ROP === undefined) {
    return res.status(400).json({ error: "Depth and Target_ROP are required" });
  }

  const best3 = findBestParametersPerWell(allData, Depth, Target_ROP);

  res.json({ best_3_parameters: best3 });
});

// Render port
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



