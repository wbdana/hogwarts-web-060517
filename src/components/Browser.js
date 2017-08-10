import React from 'react'
import Tile from './Tile'

export default class Browser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  showMeSomeHogs = () => {
    console.log(this.props.allHogs)
  }

  createAllPigTiles = () => {
    return this.props.allHogs.map((pig) => {
      return <Tile makeTile={pig} />
    })
  }

  render() {
    return(
      <div>
        {this.createAllPigTiles()}
      </div>
    )
  }
}
