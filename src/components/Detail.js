import React from 'react'
import Tile from './Tile'

export default class Detail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      gif: false,
      image: ''
    }
  }

  changeGif = () => {
    this.setState({
      gif: false,
      image: ''
    })
  }

  theFiveSecondRule = () => {
    setInterval(this.changeGif,5000)
  }

  unexposePigs = (event) => {
    console.log(this.props)
    this.props.hideDetailFUNK()
  }

  showMeTheFuture = () => {
    fetch('http://api.giphy.com/v1/gifs/random?tag=funny+bacon&rating=g&api_key=f9bf6b55a49847c38560bcf8074e73d6&limit=1')
    .then(resp => {return resp.json()})
    .then(resp => resp.data.image_url)
    .then(resp => this.setState({
      gif: true,
      image: resp
    }))
    }

  render() {
    const PigWeight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    const Medal = 'highest medal achieved'
    // console.log("We are in details")
    // console.log(this.props.theShittyPig.name)
    console.log("gif state", this.state.gif)
      if (!this.state.gif) {
        return(
          <div className="column">
            <div className="ui fluid card"  >
              <div className="image">
                <img  src={`/hog-imgs/${this.props.theShittyPig.imageName}.jpg`}/>
              </div>
              <div className="content" onClick={this.unexposePigs}>
                <a className="header">{this.props.theShittyPig.name}</a>
              </div>
              <div class="description">
              <p>Name: {this.props.theShittyPig.name}</p>
              <p>Specialty: {this.props.theShittyPig.specialty}</p>
              <p>Greased? {this.props.theShittyPig.greased ? "This pig is GREASY AF!" : "This pig is A'ight. Not SOOO greasy."}</p>
              <p>Weight: {this.props.theShittyPig[PigWeight]}</p>
              <p>Highest Medal Achieved: {this.props.theShittyPig[Medal]}</p>
              <button className="ui button" onClick={this.showMeTheFuture}> Click Here to find out what happened to this pig! </button>
              </div>
              <button onClick={this.unexposePigs} className="ui bottom attached button">
              Click Here to Hide this Hog!
              </button>
            </div>
          </div>
        )
      } else {
        return (
        <div>
          <img onLoad={this.theFiveSecondRule} src={this.state.image} />
        </div>
        )
      }
    }
}
