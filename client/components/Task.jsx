import React from 'react'
import { Segment } from 'semantic-ui-react'

class Task extends React.Component {
  componentDidMount () {
    this.setState({
      colorId: Math.floor(Math.random() * (11 - 1)) + 1
    })
  }

  state = {
    color:
      [
        'red', 'orange', 'yellow', 'olive',
        'green', 'teal', 'blue', 'violet',
        'purple', 'pink', 'brown'
      ],
    colorId: 0
  }

  render () {
    return (
      <li className='task-item'>
        <Segment size='big' inverted color={this.state.color[this.state.colorId]}>{this.props.name}</Segment>
      </li>
    )
  }
}

export default Task
