import React, {Component} from 'react';

import "./css/display.css";

class Display extends Component {
  render() {
    return (
      <div className="display-row">
        <div className="display-data">{this.props.result}</div>
      </div>
    );
  }
}
export default Display;