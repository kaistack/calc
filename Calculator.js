import React from "react";

import Display from "./Display";

import Keypad from "./Keypad";



class Calculator extends React.Component {

  state = {

    displayValue: "",

  };



  handleClick = (value) => {

    this.setState((prevState) => ({

      displayValue: prevState.displayValue + value,

    }));

  };



  render() {

    return (

      <div className="calculator">

        <Display value={this.state.displayValue} />

        <Keypad onClick={this.handleClick} />

      </div>

    );

  }

}

export default Calculator;

