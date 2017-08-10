import React from 'react'

export default class Detail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const PigWeight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    const Medal = 'highest medal achieved'
    return(
      <div>
        <p>Name: {this.props.name}</p>
        <p>Specialty: {this.props.specialty}</p>
        <p>Greased? {this.props.greased}</p>
        <p>Weight: {this.props.PigWeight}</p>
        <p>Highest Medal Achieved: {this.props.Medal}</p>
        <img src={`/hog-imgs/${this.props.imageName}.jpg`} />
      </div>
    )
  }
}
