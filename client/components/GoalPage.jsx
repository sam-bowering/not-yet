import React from 'react'
import { connect } from 'react-redux'

import { getSelectedGoal } from '../actions/getSelectedGoal'
import Loading from './Loading'

class GoalPage extends React.Component {
  componentDidMount () {
    const goalId = this.props.match.params.selectedGoal
    this.props.getSelectedGoal(goalId)
      .then(() => {
        this.setState({
          title: this.props.selectedGoal.name
        })
      })
  }

  state = {
    title: 'sldgjdflg'
  }

  render () {
    return(
      <>
        <>
          {this.props.isLoading && <Loading />}
        </>
        <>
          {!this.props.isLoading &&
            <div className='selected-goal-container'>
            <div className='selected-goal-container-header'>
              <div className='selected-goal-header'>
                <h1>{this.state.title}</h1>
              </div>
            </div>
          </div>
          }
        </>
      </>
    )
  }
}

const MapStateToProps = state => {
  return {
    selectedGoal: state.listReducer.selectedGoal,
    isLoading: state.navigation.isLoading
  }
}

const MapDispatchToProps = dispatch => {
  return {
    getSelectedGoal: id => dispatch(getSelectedGoal(id))
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(GoalPage)