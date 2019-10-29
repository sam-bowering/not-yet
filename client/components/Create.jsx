import React from 'react'
import { Link } from 'react-router-dom'

import List from './List'

class Create extends React.Component {
  state = {
    listIsVisible: false,
    goalCreateIsVisible: false
  }

  handleList = () => {
    if (this.state.listIsVisible) {
      this.setState({
        listIsVisible: false
      })
    } else {
      this.setState({
        listIsVisible: true
      })
    }
  }

  handleGoal = () => {
    if (this.state.goalCreateIsVisible) {
      this.setState({
        goalCreateIsVisible: false
      })
    } else {
      this.setState({
        goalCreateIsVisible: true
      })
    }
  }

  render () {
    return(
      <>
        {!this.state.goalCreateIsVisible &&
          <>
            <button type='button' onClick={this.handleGoal}>Add a new Goal</button>
            <br/>
          </>
        }
        {this.state.goalCreateIsVisible &&
          <>
            <input type='input'></input>
            <button type='button' onClick={this.handleGoal}>Cancel</button>
            <br/>
          </>
        }
        {!this.state.listIsVisible &&
          <button type='button' onClick={this.handleList}>Show List</button>
        }
        {this.state.listIsVisible &&
          <>
            <button type='button' onClick={this.handleList}>Hide List</button>
            <List />
          </>
        }
        <br/>
        <Link to='/'>Go Back</Link>
      </>
    )
  }
}

export default Create