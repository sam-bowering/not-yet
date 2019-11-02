import React from 'react'
import { connect } from 'react-redux'

class SelectedGoal extends React.Component {
  render () {
    return(
      <div className='selected-goal-container'>
        <div className='selected-goal-container-header'>
          <div className='selected-goal-header'>
            <h1>Insert Goal Name Here</h1>
          </div>
        </div>
      </div>
    )
  }
}

const MapStateToProps = state => {
  return {
    goal: state.listReducer.selectedGoal
  }
}

export default connect(MapStateToProps, null)(SelectedGoal)
