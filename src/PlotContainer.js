import React from 'react';
import Plot from './Plot.js';
import Options from './Options.js';

export default class PlotContainer extends React.Component {
  state = {
    x: ["MIT", "Stanford", "Harvard", "U.Penn", "Princeton", "Chicago", "Georgetown", "Tufts", "Yale", "Columbia", "Duke", "Dartmouth", "NYU", "Notre Dame", "Cornell", "Michigan", "Brown", "Berkeley", "Emory", "UCLA", "SoCal"],
    yWomen: [94, 96, 112, 92, 90, 78, 94, 76, 79, 86, 93, 84, 67, 73, 80, 62, 72, 71, 68, 64, 72],
    yMen: [152, 151, 165, 141, 137, 118, 131, 112, 114, 119, 124, 114, 94, 100, 107, 84, 92, 88, 82, 78, 81],
    yGap: [58, 55, 53, 49, 47, 40, 37, 36, 35, 33, 31, 30, 27, 27, 27, 22, 20, 17, 14, 14, 9],
    type: "bar",
    barmode: "group",
    orientation: "v"
  }
  handleChangeBarMode() {
    this.setState({
      barmode: (this.state.barmode === "group") ? "stack" : "group"
    });
  }
  handleChangeOrientation() {
    console.log("changing orientation");
    this.setState({
      orientation: (this.state.orientation === "h") ? "v" : "h"
    });
    console.log(this.state.orientation);
  }
  render() {
    return (
      <div>
        <Plot
          id="barplot"
          title="Earnings Ten Years After Graduation by Gender"
          xtitle="Institution"
          x={this.state.x}
          ytitle="Earnings"
          y={[this.state.yWomen, this.state.yMen, this.state.yGap]}
          names={["Women", "Men", "Gap"]}
          type={this.state.type}
          barmode={this.state.barmode}
          orientation={this.state.orientation}
        />
      <Options
        barmode={this.state.barmode}
        onChangeBarMode={this.handleChangeBarMode}
        onChangeOrientation={this.handleChangeOrientation}
        orientation={this.state.orientation}
        that={this}
      />
      </div>
    );
  }
}
