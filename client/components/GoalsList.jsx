import React from 'react'
import { connect } from 'react-redux'

const GoalsList = (props) => {
  return(
    <>
      {props.currentGoals.map(goal => 
        <h1 key={goal.id}>{goal.name}</h1>  
      )}
    </>
  )
}

const MapStateToProps = state => {
  return {
    currentGoals: state.listReducer.uncompletedList
  }
}

export default connect(MapStateToProps, null)(GoalsList)