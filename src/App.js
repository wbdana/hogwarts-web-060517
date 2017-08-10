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
    this.PigWeight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    this.Medal = 'highest medal achieved'


    this.state = {
      hogs: Hogs,
      filteredHogs: Hogs
    }
  }

  shittyAFFilter = (event) => {
    let filterTarget = event.target.value
    if (filterTarget === "Weight") {
      this.filterByWeight()
    } else if (filterTarget === "All Hogs") {
      this.filterByAllHogs()
    } else if (filterTarget === "Show Greased") {
      this.filterByShowGreased()
    } else if (filterTarget === "Show UnGreased") {
      this.filterByShowUnGreased()
    }

  }

  filterByAllHogs = () => {
    let fromState = Object.assign([], this.state.hogs)
    this.setState({
      filteredHogs: fromState
    }
  )}

  filterByWeight = () => {
    let fromState = Object.assign([], this.state.hogs)
      fromState.sort((a, b)=>{
        return b[this.PigWeight] - a[this.PigWeight]
      })
    this.setState({
      filteredHogs: fromState
    }
  )}

  filterByShowGreased = () => {
    let fromState = Object.assign([], this.state.hogs)
      let newState = fromState.filter((pig)=>{
        return pig.greased === true
      })
    this.setState({
      filteredHogs: newState
    }
  )}

  filterByShowUnGreased = () => {
    let fromState = Object.assign([], this.state.hogs)
      let newState = fromState.filter((pig)=>{
        return pig.greased === false
      })
    this.setState({
      filteredHogs: newState
    }
  )}



  render() {
    return (
      <div className="App">
          <h1> Doxxed Pigs EXPOSED </h1>
          <h5> `You won't believe THESE Porkers `</h5>
          < Nav />
          <select onChange={this.shittyAFFilter}>
          <option>All Hogs</option>
          <option>Weight</option>
          <option>Show Greased</option>
          <option>Show UnGreased</option>
          </select>
          < Browser allHogs={this.state.filteredHogs} />
      </div>
    )
  }
}

export default App;
