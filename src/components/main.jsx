import React from "react";
import { Dice } from "./dice";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diceArray: [],
    };
    this.state.diceArray = this.allNewDice();
  }

  allNewDice() {
    let array = [];
    for (let i = 0; i < 10; i++) {
      let value = Math.floor(Math.random() * 6 + 1);
      array.push({ id: i, diceValue: value });
    }
    return array;
  }

  render() {
    const diceData = this.state.diceArray.map((diceObject) => (
      <Dice key={diceObject.id} value={diceObject.diceValue} />
    ));
    return (
      <main className="main">
        <div className="dice-container">{diceData}</div>
        <button></button>
      </main>
    );
  }
}
