import React from 'react'
import { connect } from 'react-redux'

const GoalsList = (props) => {
  return(
    <>
      <ul>
        {props.currentGoals.map(goal =>
        <li>
          <div className='current-goal-item'>
            <h1 key={goal.id} className='current-goal-item-title'>{goal.name}</h1>
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

export default connect(MapStateToProps, null)(GoalsList)