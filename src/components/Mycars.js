import React, { Component} from "react";
import Car from "./Cars";

class Mycars extends Component {

  state = {
      cars: ["Ford", "Mercedes", "Peugeot"]
  }

  render() {
      return (
          <div className="Cars">
              <h1 style={{ color: this.props.color }}>{this.props.title}</h1>

              <Car color="red">{this.state.cars[0]}</Car>
              <Car>{this.state.cars[1]}</Car>
              <Car>{this.state.cars[2]}</Car>
          </div>
      )
  }
}

export default Mycars;
