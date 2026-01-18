const express = require("express");
const cors = require("cors");
const XLSX = require("xlsx");
const app = express();

app.use(express.json());

// Enable CORS for React frontend (adjust port if needed)
app.use(cors({
  origin: "https://ongc-rop.netlify.app/"
}));

// Load Excel file
const EXCEL_FILE = "cleaned_wells_final copy.xlsx";
const workbook = XLSX.readFile(EXCEL_FILE);

// Convert all sheets to one data array, adding 'well' field
let allData = [];
workbook.SheetNames.forEach(sheetName => {
  const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
  sheetData.forEach(row => row.well = sheetName);
  allData.push(...sheetData);
});

// Find best 3 parameter sets by Depth ±30 and closest ROP ±10
function findBestParameters(data, depth, targetROP) {
  const depthFiltered = data.filter(row => row.Depth >= depth - 30 && row.Depth <= depth + 30);

  depthFiltered.forEach(row => {
    row.rop_diff = Math.abs(row["ROP - Average(m/hr)"] - targetROP);
  });

  const ropFiltered = depthFiltered.filter(row => row.rop_diff <= 10);

  ropFiltered.sort((a, b) => a.rop_diff - b.rop_diff);

  return ropFiltered.slice(0, 3);
}

// API endpoint
app.post("/recommend-params", (req, res) => {
  const { Depth, Target_ROP } = req.body;

  if (Depth === undefined || Target_ROP === undefined) {
    return res.status(400).json({ error: "Depth and Target_ROP are required" });
  }

  const best3 = findBestParameters(allData, Depth, Target_ROP);

  res.json({
    input_depth: Depth,
    target_rop: Target_ROP,
    best_3_parameters: best3
  });
});

// Start server
const PORT = 8000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
