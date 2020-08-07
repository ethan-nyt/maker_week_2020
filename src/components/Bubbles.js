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
/*
    Intensive Care: 0.3333333333333333
  Maternal Transfusion: 0.3333333333333333
  Pernieal Laceration: 0.3333333333333333
  Ruptured Uterus: 0.3333333333333333
  Unplanned Hysterectomy: 0.3333333333333333
  no_complication: 4.213991769547325
 */
var conditions = [
  "Intensive Care",
  "Maternal Transfusion",
  "Perineal Laceration",
  "Ruptured Uterus",
  "Unplanned Hystorectemy",
  "No Complications",
];

var tooltipProps = [
  "mattDamon",
  "Pizza",
  "Banana",
  "Hello",
  "Yerrr",
  // {
  //   css: "value",
  //   prop: "value",
  // },
  // {
  //   css: "change",
  //   prop: "colorValue",
  //   display: "Change",
  // },
];

export default class BubbleChart extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    condition: "",
    probability: "",
  };
  experimentTooltip = (domNode, modelDat) => {
    // replace domNode children?
    console.log(modelDat);

    domNode.innerHTML = JSON.stringify(
      <div>
        <p>Condition: {modelDat.displayText}</p>
        <p>Percentage chance: {modelDat.value}</p>
      </div>
    );
  };

  updateReadMore = (dataModel) => {
    this.setState({
      condition: dataModel.displayText,
      probability: dataModel.value,
    });
  };

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
          onClick={this.updateReadMore}
          legend={true}
          legendSpacing={0}
          // fontSizeFactor={1.25}
          tooltip={false}
          // tooltipProps={tooltipProps}
          // tooltipFunc={this.experimentTooltip}
        />
        <div>
          <p>Condition: {this.state.condition}</p>
          <p>Probability: {this.state.probability}</p>
        </div>
      </div>
    );
  }
}
