import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const GoalsList = (props) => {
  return (
    <>
      <ul>
        {props.currentGoals.map(goal =>
          <li key={goal.name}>
            <div className='current-goal-item'>
              <Link to={`/goal/${goal.id}`}>
                <h1 key={goal.id} className='current-goal-item-title'>{goal.name}</h1>
              </Link>
            </div>
          </li>
        )}
      </ul>
    </>
  )
}

const MapStateToProps = state => {
  return {
    currentGoals: state.lists.uncompletedList
  }
}

export default connect(MapStateToProps, null)(GoalsList)
