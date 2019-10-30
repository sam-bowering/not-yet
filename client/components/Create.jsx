import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'

import List from './List'
import { addGoal } from '../actions/addGoal'
import { getList } from '../actions/getList'

class Create extends React.Component {
  state = {
    listIsVisible: false,
    goalCreateIsVisible: false,
    title: '',
    description: '',
    completed: false,
    primary: true,
    dependants: 0
  }

  componentDidMount () {
    this.props.getList()
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

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = () => {
    this.props.addGoal({
      title: this.state.title,
      description: this.state.description,
      completed: this.state.completed,
      primary: this.state.primary,
      dependants: this.state.dependants
    })
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
            <Form>
              <Form.Group width='equal'>
                <Form.Input placeholder='Title' name='title' onChange={this.handleChange}/>
              </Form.Group>
              <Form.TextArea placeholder='Description' name='description' onChange={this.handleChange}/>
            </Form>
            <button type='button' onClick={this.handleGoal}>Cancel</button>
            <button type='button' onClick={this.handleSubmit}>Submit</button>
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

const mapStateToProps = state => {
  return {
    goal: state.addGoal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addGoal: (goal) => dispatch(addGoal(goal)),
    getList: () => dispatch(getList())
  }
}    

export default connect(mapStateToProps, mapDispatchToProps)(Create)