const express = require("express");
const cors = require("cors");
const XLSX = require("xlsx");
const path = require("path");

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // allow Netlify & localhost

// Load Excel file (MUST be committed to GitHub)
const EXCEL_FILE = path.join("cleaned_wells_final copy.xlsx");
const workbook = XLSX.readFile(EXCEL_FILE);

// Convert all sheets to one array
let allData = [];
workbook.SheetNames.forEach(sheetName => {
  const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
  sheetData.forEach(row => (row.well = sheetName));
  allData.push(...sheetData);
});

// Logic
function findBestParameters(data, depth, targetROP) {
  const depthFiltered = data.filter(
    row => row.Depth >= depth - 30 && row.Depth <= depth + 30
  );

  depthFiltered.forEach(row => {
    row.rop_diff = Math.abs(row["ROP - Average(m/hr)"] - targetROP);
  });

  const ropFiltered = depthFiltered
    .filter(row => row.rop_diff <= 10)
    .sort((a, b) => a.rop_diff - b.rop_diff);

  return ropFiltered.slice(0, 3);
}

// API
app.post("/recommend-params", (req, res) => {
  const { Depth, Target_ROP } = req.body;

  if (Depth === undefined || Target_ROP === undefined) {
    return res.status(400).json({ error: "Depth and Target_ROP are required" });
  }

  const best3 = findBestParameters(allData, Depth, Target_ROP);

  res.json({ best_3_parameters: best3 });
});

// IMPORTANT: Render port
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
