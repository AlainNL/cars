import { Component } from 'react'
import Car from './Cars'

class Mycars extends Component {

  state = {
    cars: [
      { name: 'Ford', color: 'red', year: 2022},
      { name: 'Mercedes', color: 'black', year: 2010},
      { name: 'Peugeot', color: 'red', year: 2000}
    ],
    title: 'Mon Catalogue Voitures'
  }

  addTenYears = () => {

      const updatedState = this.state.cars.map((param) => {
          return param.year -=10;
      })

      this.setState({
          updatedState
      })
  }

  render() {

    const year = new Date().getFullYear();

      return (
          <div>
              <h1>{this.state.title}</h1>

              <button onClick={this.addTenYears}> + 10 ans</button>

              {
                this.state.cars.map((car, index) => {
                  return(
                    <div key={index}>
                      <Car name={car.name} color={car.color} year={year - car.year + ' ans'}/>
                    </div>
                    )
                })
              }
          </div>

      )
  }
}

export default Mycars
