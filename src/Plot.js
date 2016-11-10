/* global Plotly */
import React from 'react';

export default class Plot extends React.Component {
  componentDidMount() {
    console.log("mounted");
    this.drawPlot();
  }
  componentDidUpdate() {
    this.drawPlot();
  }
  drawPlot = () => {
    var i;
    var trace = [];
    var layout = {};
    var numTraces = this.props.y.length;
    console.log("drawing");
    console.log(this.props.barmode)
    for (i = 0; i < numTraces; i++) {
      trace[i] = {
        x: (this.props.orientation === "v") ? this.props.x : this.props.y[i],
        y: (this.props.orientation ==="v") ? this.props.y[i] : this.props.x,
        z: !(typeof this.props.z === undefined) ? this.props.z : "",
        type: this.props.type,
        name: this.props.names ? this.props.names[i] : "",
        orientation: this.props.orientation,
      }
      if (typeof this.props.hoverinfo) {
        trace[i].hoverinfo = this.props.hoverinfo;
      }
    }
    layout = {
      title: this.props.title,
      xaxis: {
        title: this.props.xtitle
      },
      yaxis: {
        title: this.props.ytitle
      },
      barmode: this.props.barmode,
      hovermode: "closest",
      displayModeBar: false
    }
    Plotly.newPlot(this.props.id, trace, layout, {displayModeBar: false});
  }
  render() {
    return (
      <div id={this.props.id}></div>
    )
  }
}

Plot.propTypes = {
  title: React.PropTypes.string,
  xtitle: React.PropTypes.string,
  x: React.PropTypes.array.isRequired,
  ytitle: React.PropTypes.string,
  y: React.PropTypes.array.isRequired,
  names: React.PropTypes.array,
  type: React.PropTypes.string.isRequired,
  mode: React.PropTypes.string,
  barmode: React.PropTypes.string,
  orientation: React.PropTypes.string,
}

Plot.defaultProps = {
  title: "Untitled",
  xtitle: "X Axis",
  ytitle: "Y Axis",
  barmode: "group",
  orientation: "v"
}
