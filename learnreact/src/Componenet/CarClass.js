import { Component } from "react";

class CarClass extends Component {

  // costuctor to get all properities for change the state
  constructor() {
    //  call the super constructor
    super();

    // set the intial state
    this.state = { color: "Yellow" };
  }

  render() {
    return (
      <div>

        <h1> From CarClass : { this.state.color } </h1>

        {/* button for TRIGGER */}
        <button
          onClick={
            // update the state when user click the button
            // inside the setStae() we setting the color as object itself
            () => this.setState({ color: "Magenta" })}> Change the color </button>

      </div>
    );
  }
}

export default CarClass;
