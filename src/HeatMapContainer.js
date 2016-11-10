import React from 'react';
import Plot from './Plot.js';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

export default class HeatMapContainer extends React.Component {
  constructor() {
    super();
    console.log("constructor being called");
    this.state = {
      z: [
        [31, 63, 6],
        [43, 53, 4],
        [80, 13, 7],
        [94, 4, 2],
        [62, 33, 5],
        [68, 26, 6],
        [61, 32, 7]
      ],
      x: [
        "Clinton", "Trump", "Other/No Answer"
      ],
      y: [
        ["White Men",
        "White Women",
        "Black Men",
        "Black Women",
        "Latino Men",
        "Latino Women",
        "Other"]
      ],
      type: "heatmap",
      names: [],
      isHeatMap: true
    };
  }
  onChangeHeatOrBar() {
    console.log("toggle heat / bar");
    var i;
    var j;
    var newX;
    var newY = [];
    var newNames;
    if (this.state.isHeatMap) {
      newX = this.state.y[0];
      for (i = 0; i < this.state.x.length; i++) {
        newY[i] = [];
        for (j = 0; j < this.state.y[0].length; j++) {
          newY[i][j] = this.state.z[j][i];
        }
      }
      newNames = this.state.x;
      console.log(newX);
      console.log(newY);
      console.log(newNames);
      this.setState({
        x: newX,
        y: newY,
        names: newNames,
        type: "bar",
        isHeatMap: false
      });
    } else {
      console.log("switch back");
      this.constructor();
    }
  }
  render() {
    return (
      <div>
        <Plot
          id="heatmapplot"
          title="Exit Poll Results by Race and Gender"
          xtitle="Candidate"
          x={this.state.x}
          ytitle="Category"
          y={this.state.y}
          z={this.state.z}
          names={this.state.names}
          type={this.state.type}
          hoverinfo="z"
        />
        <FormGroup>
          <ControlLabel>Heat Map or Bar Chart</ControlLabel>
          <FormControl
            componentClass="select"
            id="heatorbar"
            onChange={this.onChangeHeatOrBar.bind(this)}
            value={this.state.isHeatMap ? "Heat Map" : "Bar Chart"}
          >
            <option>Heat Map</option>
            <option>Bar Chart</option>
          </FormControl>
        </FormGroup>
      </div>
    )
  }
}
