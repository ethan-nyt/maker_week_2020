// import React, { useRef, useEffect, useState } from "react";
// import Chart from "chart.js";
// import { Button } from "semantic-ui-react";
//
// import axios from "axios";
//
// export default () => {
//   const canvasRef = useRef(null);
//   const [apiMsg, setApiMsg] = useState("");
//   let myChart;
//
//   console.log(apiMsg);
//
//   const getAPIMsg = () => {
//     axios.get("http://localhost:5000").then(setApiMsg);
//   };
//
//   const bubbleData = ['red', 'blue', 'green'].map((color, i) => ({
//     x: i,
//     y: i,
//     r: 200
//   }))
//
//   useEffect(() => {
//     myChart = new Chart(canvasRef.current, {
//       type: "bubble",
//       data: bubbleData,
//     });
//
//     getAPIMsg();
//   }, []);
//
//   const onChartClick = (event, item) => {
//     myChart.update();
//     item[0]._model.outerRadius += 10;
//     console.log(item[0]._model);
//   };
//
//   return (
//     <div id="app">
//       <Button />
//       <canvas ref={canvasRef} id="canvas"></canvas>
//     </div>
//   );
// };

import React            from 'react';
import ReactBubbleChart from 'react-bubble-chart';
import 'react-bubble-chart/src/style.css';
import './App.css';

// var colorLegend = [
//   //reds from dark to light
//   {color: "#67000d", text: 'Negative', textColor: "#ffffff"}, "#a50f15", "#cb181d", "#ef3b2c", "#fb6a4a", "#fc9272", "#fcbba1", "#fee0d2",
//   //neutral grey
//   {color: "#f0f0f0", text: 'Neutral'},
//   // blues from light to dark
//   "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", {color: "#08306b", text: 'Positive', textColor: "#ffffff"}
// ];

var tooltipProps = [{
  css: 'symbol',
  prop: '_id'
}, {
  css: 'value',
  prop: 'value',
  display: 'Last Value'
}, {
  css: 'change',
  prop: 'colorValue',
  display: 'Change'
}];

const mockData = [
  {
    value: 2,
    sentiment: 2,
    selected: false
  },
  {
    value: 15,
    sentiment: 2,
    selected: false,
  },
  {
    value: 1,
    sentiment: 1,
    selected: false,
  },
  {
    value: 4,
    sentiment: 4,
    selected: true,
  },
  {
    value: 5,
    sentiment: 5,
    selected: false,
  },
  {
    value: 3,
    sentiment: 3,
    selected: false
  },
  {
    value: 1,
    sentiment: 7,
    selected: false,
  }
]

export default class BubbleChart extends React.Component {
  render () {
    var data = mockData.map((d, i) => ({
      _id: i,
      value: d.value,
      colorValue: d.sentiment,
      selected: d.selected,
      foo: 'bar'
    }));
    
    return (
      <div className="app">
        <ReactBubbleChart
          className="app"
          // colorLegend={colorLegend}
          data={data}
          selectedColor="#737373"
          selectedTextColor="#d9d9d9"
          fixedDomain={{min: -1, max: 1}}
          onClick={(e) => console.log('click', e)}
          legend={true}
          legendSpacing={0}
          tooltip={true}
          tooltipProps={tooltipProps}
          // tooltipFunc={tooltipFunc}
        />
    </div>
    )
  }
}