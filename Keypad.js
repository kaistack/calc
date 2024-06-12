import React from "react";



class Keypad extends React.Component {

  handleClick = (value) => {

    this.props.onClick(value);

  };



  render() {

    return (

      <div className="keypad">

        {/* keypad buttons */}

        <button onClick={() => this.handleClick(1)}>1</button>

        <button onClick={() => this.handleClick(2)}>2</button>

        <button onClick={() => this.handleClick(3)}>3</button>

        {/* and so on */}

      </div>

    );

  }

}



export default Keypad;



