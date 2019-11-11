import React from 'react'
import { Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { deleteTask } from '../actions/deleteTask'

class Task extends React.Component {
  componentDidMount () {
    this.setState({
      colorId: Math.floor(Math.random() * (11 - 1)) + 1
    })
  }

  handleDelete = (id, goalId) => {
    this.props.deleteTask(id, goalId)
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
        <Segment size='big' inverted color={this.state.color[this.state.colorId]}>
          {this.props.name}
          <span onClick={() => this.handleDelete(this.props.id, this.props.selectedGoal.id)} className='task-item-delete'>X</span>
        </Segment>
      </li>
    )
  }
}

const MapStateToProps = state => {
  return {
    selectedGoal: state.lists.selectedGoal
  }
}

const MapDispatchToProps = dispatch => {
  return {
    deleteTask: (id, goalId) => dispatch(deleteTask(id, goalId))
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(Task)
