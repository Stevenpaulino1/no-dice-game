import React, { Component } from "react";
import "./RollDice.css";

import Die from "./Die";

class RollDice extends Component {
  state = {
    die1: "one",
    die2: "two",
    sides: 6,
    rolling: false
  };

  rollDice = () => {
    console.log("Rolling dice");

    const die1 = this.props.dieSides[
      this.getRandomInt(this.props.dieSides.length) - 1
    ];
    const die2 = this.props.dieSides[
      this.getRandomInt(this.props.dieSides.length) - 1
    ];

    this.setState({ die1: die1, die2: die2, rolling: true });

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  };

  getRandomInt = max => {
    return Math.ceil(Math.random() * Math.ceil(max));
  };

  render() {
    let buttonText = "Roll Dice";
    if (this.state.rolling) {
      buttonText = "Rolling...";
    }

    return (
      <div className="RollDice">
        <h1 className="header">No Dice!</h1>
        <div className="RollDice-container">
          <Die num={this.state.die1} jiggling={this.state.rolling} />
          <Die num={this.state.die2} jiggling={this.state.rolling} />
        </div>
        <button onClick={this.rollDice} disabled={this.state.rolling}>
          {buttonText}
        </button>
      </div>
    );
  }
}

RollDice.defaultProps = {
  dieSides: ["one", "two", "three", "four", "five", "six"]
};

export default RollDice;
