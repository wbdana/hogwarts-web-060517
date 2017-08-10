import React from 'react'
import Detail from './Detail'

export default class Tile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      singleAF: false,
      activePig: []
    }
  }

  showDetail = (event) => {
    this.setState({
      singleAF: true,
      activePig: this.props.makeTile
    })
  }

  hideDetail = (event) => {
    this.setState({
      singleAF: false,
      activePig: []
    })
  }

  render() {
    console.log(this.state.activePig)
    if (this.state.singleAF === false) {
      return(
        <div onClick={this.showDetail}>
          Name: {this.props.makeTile.name}<br/>
          <img src={`/hog-imgs/${this.props.makeTile.imageName}.jpg`} /><br/><br/>
        </div>
      )
    } else {
      return(<Detail theShittyPig={this.state.activePig} />)
    }
  }
}
