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
      filteredHogs: Hogs,
      filterOption: 'All Hogs'
    }
  }

  filterByName = (event) => {
    let fromState = Object.assign([], this.state.hogs)
    let newState = fromState.filter( (pig) => {
      return pig.name.includes(event.target.value)
    })
    this.setState({
      filteredHogs: newState
    }, () => {
      if (document.getElementById('select') !== "All Hogs") {
        document.getElementById('select').value = "All Hogs"

      }
    })
  }


  theShittierAFFilter = () => {
    let filterTarget = this.state.filterOption
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
      filteredHogs: fromState,
      filterOption: "All Hogs"
    }
  )}

  filterByWeight = () => {
    let fromState = Object.assign([], this.state.hogs)
      fromState.sort((a, b)=>{
        return b[this.PigWeight] - a[this.PigWeight]
      })
    this.setState({
      filteredHogs: fromState,
      filterOption: "Weight"
    }
  )}

  filterByShowGreased = () => {
    let fromState = Object.assign([], this.state.hogs)
      let newState = fromState.filter((pig)=>{
        return pig.greased === true
      })
    this.setState({
      filteredHogs: newState,
      filterOption: "Show Greased"
    }
  )}

  filterByShowUnGreased = () => {
    let fromState = Object.assign([], this.state.hogs)
      let newState = fromState.filter((pig)=>{
        return pig.greased === false
      })
    this.setState({
      filteredHogs: newState,
      filterOption: "Show UnGreased"
    }
  )}



  render() {
    return (
      <div className="App">
          <h1> Doxxed Pigs EXPOSED </h1>
          <h5> `You won't believe THESE Porkers `</h5>
          < Nav />
          <textarea onChange={this.filterByName} />
          <select id="select" onChange={this.shittyAFFilter}>
          <option>All Hogs</option>
          <option>Weight</option>
          <option>Show Greased</option>
          <option>Show UnGreased</option>
          </select><br/><br/>
          < Browser allHogs={this.state.filteredHogs} />
      </div>
    )
  }
}

export default App;
