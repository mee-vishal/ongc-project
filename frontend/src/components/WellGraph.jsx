import React, { useEffect, useState } from "react";
import axios from "axios";
import { Scatter } from "react-chartjs-2";

const WellGraph = () => {
  const [wells, setWells] = useState([]);
  const [selectedWell, setSelectedWell] = useState("ALL");
  const [graphData, setGraphData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch well list
  useEffect(() => {
    axios.get("http://localhost:8000/wells")
      .then(res => setWells(res.data.wells))
      .catch(err => console.error(err));
  }, []);

  // Fetch graph data when well changes
  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:8000/graph-data", {
      params: { well: selectedWell }
    })
    .then(res => setGraphData(res.data.data))
    .finally(() => setLoading(false));
  }, [selectedWell]);

  // Chart configuration
  const data = {
    datasets: [
      {
        label: "ROP vs Bit Weight",
        data: graphData
          .filter(d => d.BitWeight && d.ROP)
          .map(d => ({
            x: d.BitWeight,
            y: d.ROP
          })),
        backgroundColor: "rgba(54, 162, 235, 0.7)"
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Bit Weight (klb)"
        }
      },
      y: {
        title: {
          display: true,
          text: "ROP (m/hr)"
        }
      }
    }
  };

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <h2>Well Performance Analysis</h2>

      {/* Dropdown */}
      <select
        value={selectedWell}
        onChange={e => setSelectedWell(e.target.value)}
        style={{ padding: "8px", marginBottom: "20px" }}
      >
        {wells.map(well => (
          <option key={well} value={well}>
            {well}
          </option>
        ))}
      </select>

      {/* Graph */}
      {loading ? (
        <p>Loading graph...</p>
      ) : (
        <Scatter data={data} options={options} />
      )}
    </div>
  );
};

export default WellGraph;
