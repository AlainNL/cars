import React, { Component } from 'react';
import Mycars from './components/Mycars';
import './App.css';

class App extends Component {

  state = {
    title : 'Mon catalogue Voitures',
    color : "Green"
  }
  render () {
    return (
      <div className="App">
        <Mycars
          title={this.state.title}
          color={this.state.color}
        />
      </div>
    );
  }

}

export default App;
