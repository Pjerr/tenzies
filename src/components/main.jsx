import React from "react";
import { Dice } from "./dice";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diceArray: [],
      gameOver: false,
    };
    this.state.diceArray = this.allNewDice();

    this.rollNewDice = this.rollNewDice.bind(this);
    this.freezeDice = this.freezeDice.bind(this);
    this.isGameOver = this.isGameOver.bind(this);
  }

  allNewDice() {
    let array = [];
    for (let i = 0; i < 4; i++) {
      let value = Math.floor(Math.random() * 6 + 1);
      array.push({ id: i, diceValue: value, frozen: false });
    }
    return array;
  }

  rollNewDice() {
    let newDiceArray = this.allNewDice();
    const oldDiceArray = this.state.diceArray.splice();

    if (!this.state.gameOver) {
      oldDiceArray.map((diceObject) => {
        if (diceObject.frozen) {
          newDiceArray[diceObject.id] = { ...diceObject };
        }
      });
    }
    this.setState({ diceArray: newDiceArray });

    if (this.isGameOver()) {
      this.setState({ gameOver: true });
    }
  }

  freezeDice(index) {
    const diceArray = this.state.diceArray.slice();
    const oldDie = this.state.diceArray[index];
    const newDie = { ...oldDie, frozen: !oldDie.frozen };
    diceArray.splice(index, 1, newDie);
    this.setState({ diceArray });
  }

  isGameOver() {
    const diceArray = this.state.diceArray;
    const result = diceArray.every((diceElement) => {
      if (diceElement.diceValue === diceArray[0].diceValue) return true;
    });
    return result;
  }

  render() {
    const diceData = this.state.diceArray.map((diceObject) => (
      <Dice
        key={diceObject.id}
        diceObject={diceObject}
        toggleDie={this.freezeDice}
      />
    ));
    return (
      <main className="main">
        <div className="dice-container">{diceData}</div>
        <button className="roll-dice-button" onClick={this.rollNewDice}>
          {this.state.gameOver ? "Again" : "Roll"}
        </button>
      </main>
    );
  }
}
