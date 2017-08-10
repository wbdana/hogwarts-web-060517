import React from 'react';
import './App.css';
import Hogs from './porkers_data'
import Nav from './components/Nav'
import Browser from './components/Browser'
// import Tile from './components/Tile'
// import Detail from './components/Detail'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      hogs: Hogs
    }
  }

  render() {
    return (
      <div className="App">
          <h1> Doxxed Pigs EXPOSED </h1>
          <h5> `You won't believe THESE Porkers `</h5>
          < Nav />
          < Browser allHogs={this.state.hogs} />
      </div>
    )
  }
}

export default App;
