import React from 'react'
import Tile from './Tile'

export default class Detail extends React.Component {
  constructor(props) {
    super(props)
  }

  unexposePigs = (event) => {
    console.log(this.props)
    this.props.hideDetailFUNK()
  }

  render() {
    const PigWeight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    const Medal = 'highest medal achieved'
    console.log("We are in details")
    console.log(this.props.theShittyPig.name)
    return(
      <div>
        <p>Name: {this.props.theShittyPig.name}</p>
        <p>Specialty: {this.props.theShittyPig.specialty}</p>
        <p>Greased? {this.props.theShittyPig.greased ? "This pig is GREASEY AF!" : "This pig is A'ight. Not SOOO greasey."}</p>
        <p>Weight: {this.props.theShittyPig[PigWeight]}</p>
        <p>Highest Medal Achieved: {this.props.theShittyPig[Medal]}</p>
        <img src={`/hog-imgs/${this.props.theShittyPig.imageName}.jpg`} /> <br/><br/><br/>
        <p onClick={this.unexposePigs}>Click here to go back and expose more pigs </p><br/>
      </div>
    )
  }
}
