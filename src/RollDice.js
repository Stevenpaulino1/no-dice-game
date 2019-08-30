import React, { Component } from "react";

import Die from "./Die";

class RollDice extends Component {
  state = {
    die1: "one",
    die2: "two",
    sides: 6
  };

  rollDice = () => {
    console.log("Rolling dice");

    const die1 = this.props.dieSides[
      this.getRandomInt(this.props.dieSides.length) - 1
    ];
    const die2 = this.props.dieSides[
      this.getRandomInt(this.props.dieSides.length) - 1
    ];

    this.setState({ die1, die2 });
  };

  getRandomInt = max => {
    return Math.ceil(Math.random() * Math.ceil(max));
  };

  render() {
    return (
      <React.Fragment>
        <Die num={this.state.die1} />
        <Die num={this.state.die2} />
        <button onClick={this.rollDice}>Roll Dice</button>
      </React.Fragment>
    );
  }
}

RollDice.defaultProps = {
  dieSides: ["one", "two", "three", "four", "five", "six"]
};
//parseInt

export default RollDice;
