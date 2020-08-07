import React from "react";
import ReactBubbleChart from "react-bubble-chart";
import "react-bubble-chart/src/style.css";
import "../App.css";

// var colorLegend = [
//   //reds from dark to light
//   {color: "#67000d", text: 'Negative', textColor: "#ffffff"}, "#a50f15", "#cb181d", "#ef3b2c", "#fb6a4a", "#fc9272", "#fcbba1", "#fee0d2",
//   //neutral grey
//   {color: "#f0f0f0", text: 'Neutral'},
//   // blues from light to dark
//   "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", {color: "#08306b", text: 'Positive', textColor: "#ffffff"}
// ];

var tooltipProps = [
  {
    css: "symbol",
    prop: "_id",
  },
  {
    css: "value",
    prop: "value",
    display: "Last Value",
  },
  {
    css: "change",
    prop: "colorValue",
    display: "Change",
  },
];

const mockData = [
  {
    value: 2000,
    sentiment: 2,
    selected: false,
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
    selected: false,
  },
  {
    value: 5,
    sentiment: 5,
    selected: false,
  },
  {
    value: 3,
    sentiment: 3,
    selected: false,
  },
  {
    value: 1,
    sentiment: 7,
    selected: false,
  },
];
// TODO: follow same order as floats from api
var conditions = [
  "Ruptured Uterus",
  "Perineal Laceration",
  "Transfusion",
  "Intensive Care",
  "Unplanned Historectemy",
];

export default class BubbleChart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var newData = this.props.results.map((float) => ({
      value: float,
      sentiment: Math.random(),
      selected: false,
    }));
    var data = newData.map((d, i) => ({
      _id: i,
      value: d.value,
      displayText: conditions[i],
      colorValue: d.sentiment,
      selected: d.selected,
      foo: "bar",
    }));

    return (
      <div>
        <ReactBubbleChart
          className="data-visualization"
          // colorLegend={colorLegend}
          data={data}
          selectedColor="#737373"
          selectedTextColor="#d9d9d9"
          fixedDomain={{ min: -1, max: 1 }}
          onClick={(e) => console.log("click", e)}
          legend={true}
          legendSpacing={0}
          // fontSizeFactor={1.25}
          tooltip={true}
          tooltipProps={tooltipProps}
          // tooltipFunc={tooltipFunc}
        />
      </div>
    );
  }
}
