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

  hideDetail = () => {
    this.setState({
      singleAF: false,
      activePig: []
    })
  }

  render() {
    if (this.state.singleAF === false) {
      return(



          <div className="column">
            <div className="ui fluid card"  >
              <div className="image">
                <img className="blurred" src={`/hog-imgs/${this.props.makeTile.imageName}.jpg`}/>
              </div>
              <div className="content" onClick={this.showDetail}>
                <a className="header">{this.props.makeTile.name}</a>
              </div>
              <button onClick={this.showDetail} class="ui bottom attached button">
               <i class="add icon"></i>
              Click Here to Expose this Hog!
              </button>
            </div>
          </div>



      )
    } else {
      return(<Detail theShittyPig={this.state.activePig} hideDetailFUNK={this.hideDetail}/>)
    }
  }
}
