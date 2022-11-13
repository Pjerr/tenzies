import React from "react";

export class Dice extends React.Component {
  render() {
    return (
      <div className="die-face">
        <h2 className="die-value">{this.props.value}</h2>
      </div>
    );
  }
}
