import React from 'react'
import { connect } from 'react-redux'
import { Form, Divider, Button } from 'semantic-ui-react'

import List from './List'
import GoalsList from './GoalsList'
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
    this.setState({
      title: '',
      description: ''
    })
  }

  render () {
    return(
      <div className='create-container'>
        <div className='create-container-header'>
          <div className='create-header'>
            <h1>Create.</h1>
          </div>
        </div>
        <div className='create-body-container'>
          <h1 className='create-form-title'>New Goal</h1>
          <div className='create-form-container'>
            <Form size='big' className='create-form'>
              <Form.Group widths='equal'>
                <Form.Input placeholder='Title' name='title' value={this.state.title} onChange={this.handleChange}/>
              </Form.Group>
              <Form.TextArea placeholder='Description' name='description' style={{height: '50vh'}} value={this.state.description} onChange={this.handleChange}/>
            </Form>
            <Button type='button' style={{marginTop: '2vh'}} onClick={this.handleSubmit}>Submit</Button>
          </div>
          <Divider vertical style={{height: '35vh'}}>AND</Divider>
          <div className='current-goals-container'>
            <h1 className='current-goals-title'>Current Goals</h1>
            <GoalsList />
          </div>
        </div>
      </div>
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
  }
}    

export default connect(mapStateToProps, mapDispatchToProps)(Create)