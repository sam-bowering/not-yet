import React from 'react'
import { connect } from 'react-redux'
import { Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import { deleteGoal } from '../actions/deleteGoal'
import { getList } from '../actions/getList'

class List extends React.Component {
  handleDelete = (id) => {
    this.props.deleteGoal(id)
  }

  render () {
    return(
      <>
        <div className='uncompleted-goals-container'>
          <h1 className='uncompleted-container-title'>Uncompleted</h1>
          <div className='uncompleted-goals-list'>
            {this.props.uncompletedGoals.map(listItem => 
            <div className='list-goal-item-uncompleted'>
              <Link to={`/goal/${listItem.id}`}>
                <h1 className='uncompleted-goal-title'key={listItem.id}>{listItem.name}</h1>
              </Link>
              <div className='list-item-controls'>
                <button type='button' onClick={() => this.handleDelete(listItem.id)}>Delete</button>
                <button type='button'>View</button>
                <button type='button'>Complete</button>
              </div>
            </div>
            )}
          </div>
        </div>
        <div className='horizontal-divider'>
          <Divider />
        </div>
        <div className='completed-goals-container'>
          <h1 className='completed-container-title'>Completed</h1>
          <div className='completed-goals-list'>
            {this.props.completedGoals.map(listItem => 
              <div className='list-goal-item-completed'>
                <Link to={`/goal/${listItem.id}`}>
                  <h1 className='completed-goal-title' key={listItem.id}>{listItem.name}</h1>
                </Link>
              </div>
              )}
          </div>
        </div>
      </>
    )
  }
}
  
const MapStateToProps = state => {
  return {
    list: state.lists.fullList,
    uncompletedGoals: state.lists.uncompletedList,
    completedGoals: state.lists.completedList
  }
}

const MapDispatchToProps = dispatch => {
  return {
    deleteGoal: id => dispatch(deleteGoal(id)),
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(List)