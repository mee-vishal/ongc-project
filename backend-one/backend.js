const express = require("express");
const cors = require("cors");
const XLSX = require("xlsx");
const path = require("path");

const app = express();

app.use(express.json());

// ✅ Allow all origins (safe for now, restrict later)
app.use(cors());

// ✅ Health check (Render uses this)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Load Excel file safely
const EXCEL_FILE = path.join(
  __dirname,
  "cleaned_wells_final copy.xlsx"
);

const workbook = XLSX.readFile(EXCEL_FILE);

// Convert all sheets to one data array, adding 'well' field
let allData = [];

workbook.SheetNames.forEach((sheetName) => {
  const sheetData = XLSX.utils.sheet_to_json(
    workbook.Sheets[sheetName]
  );
  sheetData.forEach((row) => (row.well = sheetName));
  allData.push(...sheetData);
});

/**
 * Find best drilling parameters:
 * 1. Filter by depth ±30
 * 2. Filter by ROP ±10
 * 3. Pick best per well
 * 4. Return top 3 wells
 */
function findBestParameters(data, depth, targetROP) {
  const depthFiltered = data.filter(
    (row) =>
      row.Depth >= depth - 30 &&
      row.Depth <= depth + 30
  );

  depthFiltered.forEach((row) => {
    row.rop_diff = Math.abs(
      row["ROP - Average(m/hr)"] - targetROP
    );
  });

  const ropFiltered = depthFiltered.filter(
    (row) => row.rop_diff <= 10
  );

  const bestPerWell = {};

  ropFiltered.forEach((row) => {
    const well = row.well;

    if (
      !bestPerWell[well] ||
      row.rop_diff < bestPerWell[well].rop_diff
    ) {
      bestPerWell[well] = row;
    }
  });

  return Object.values(bestPerWell)
    .sort((a, b) => a.rop_diff - b.rop_diff)
    .slice(0, 3);
}

// API endpoint
app.post("/recommend-params", (req, res) => {
  const { Depth, Target_ROP } = req.body;

  if (Depth == null || Target_ROP == null) {
    return res
      .status(400)
      .json({ error: "Depth and Target_ROP are required" });
  }

  const best3 = findBestParameters(
    allData,
    Number(Depth),
    Number(Target_ROP)
  );

  res.json({
    input_depth: Depth,
    target_rop: Target_ROP,
    best_3_parameters: best3,
  });
});

// ✅ REQUIRED for Render
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
