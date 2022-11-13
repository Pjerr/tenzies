import React from "react";

export class Dice extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDie = this.toggleDie.bind(this);
  }

  toggleDie() {
    this.props.toggleDie(this.props.diceObject.id);
  }
  render() {
    return (
      <div
        className={
          this.props.diceObject.frozen ? "die-face frozen" : "die-face"
        }
      >
        <h2 className="die-value" onClick={this.toggleDie}>
          {this.props.diceObject.diceValue}
        </h2>
      </div>
    );
  }
}
