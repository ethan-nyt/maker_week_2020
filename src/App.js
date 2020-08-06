import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js";
import axios from "axios";

export default () => {
  const canvasRef = useRef(null);
  const [apiMsg, setApiMsg] = useState("");
  let myChart;

  console.log(apiMsg);

  const getAPIMsg = () => {
    axios.get("http://localhost:5000").then(setApiMsg);
  };

  useEffect(() => {
    myChart = new Chart(canvasRef.current, {
      type: "pie",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
            id: [1, 2, 3, 4, 5, 6],
          },
        ],
      },
      options: {
        onClick: onChartClick,
        // events: ['click'],
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

    getAPIMsg();
  }, []);

  const onChartClick = (event, item) => {
    myChart.update();
    item[0]._model.outerRadius += 10;
    console.log(item[0]._model);
  };

  return (
    <div id="app">
      <canvas ref={canvasRef} id="canvas"></canvas>
    </div>
  );
};
