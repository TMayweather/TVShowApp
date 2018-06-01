import React from 'react'

class ShowRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

  render() {
    return ( <table key={this.props.show.show.id}>
    <tbody>
      <tr>
        <td>
          
          <img alt="poster" width="185" src={this.props.show.show.image.original} />
        </td>
        <td>
          <h3>{this.props.show.show.name}</h3>
          {this.props.show.show.summary}
        </td>
      </tr>
    </tbody>
  </table>
    )
  }

}

export default ShowRow