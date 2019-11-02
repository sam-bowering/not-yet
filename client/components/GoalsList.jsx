import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getSelectedGoal } from '../actions/getSelectedGoal'

function handleClick (props, id) {
  props.selectedGoal(id)
}

const GoalsList = (props) => {
  return(
    <>
      <ul>
        {props.currentGoals.map(goal =>
        <li>
          <div className='current-goal-item'>
            <Link to={`/goal/${goal.id}`} onClick={() => handleClick(props, goal.id)}><h1 key={goal.id} className='current-goal-item-title'>{goal.name}</h1></Link>
          </div>
        </li>
        )}
      </ul>
    </>
  )
}

const MapStateToProps = state => {
  return {
    currentGoals: state.listReducer.uncompletedList
  }
}

const MapDispatchToProps = dispatch => {
  return {
    selectedGoal: name => dispatch(getSelectedGoal(name))
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(GoalsList)