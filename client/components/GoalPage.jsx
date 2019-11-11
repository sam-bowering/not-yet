import React from 'react'
import { connect } from 'react-redux'
import { Segment, Progress, Menu, Form, Button } from 'semantic-ui-react'

import { getSelectedGoal } from '../actions/getSelectedGoal'
import { getTasksBySelectedGoal } from '../actions/getTasksBySelectedGoal'
import { addTask } from '../actions/addTask'
import { editGoalDescription } from '../actions/editGoalDescription'
import Loading from './Loading'
import Task from './Task'
import GoalSettings from './GoalSettings'

class GoalPage extends React.Component {
  componentDidMount () {
    const goalId = this.props.match.params.selectedGoal
    this.props.getSelectedGoal(goalId)
      .then(() => {
        this.setState({
          title: this.props.selectedGoal.name,
          description: this.props.selectedGoal.description
        })
      })
    this.props.getTasksBySelectedGoal(goalId)
      .then(() => {
        this.setState({
          tasks: [...this.props.tasks]
        })
      })
      .then(() => {
        if (this.props.tasks.length > 1) {
          this.setState({
            progressVisible: true,
            goalProgress: 100 / this.state.tasks.length
          })
        }
        if (this.props.tasks.length === 0) {
          this.setState({
            taskAddVisible: true
          })
        }
      })
      .then(this.checkGoalCompleted)
  }

  state = {
    title: '',
    tasks: [],
    goalProgress: 100,
    taskAddVisible: false,
    editDescVisible: false,
    progressVisible: false,
    newTitle: '',
    newDescription: '',
    isCompleted: false,
    style: {
      color: 'white'
    }
  }

  handleShowTaskInput = () => {
    switch (this.state.taskAddVisible) {
      case false:
        return this.setState({
          taskAddVisible: true
        })
      case true:
        return this.setState({
          taskAddVisible: false
        })
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleAddTask = (title, description, goalId) => {
    this.props.addTask({ title, description, goalId })
      .then(this.props.getTasksBySelectedGoal(this.props.selectedGoal.id)
        .then(() => {
          this.setState({
            tasks: [...this.props.tasks]
          })
        }))
      .then(this.checkTaskLength)
  }

  checkTaskLength = () => {
    if (this.state.tasks.length >= 1) {
      this.setState({
        newTitle: '',
        newDescription: '',
        progressVisible: true,
        goalProgress: 100 / (this.state.tasks.length + 1)
      })
    } else {
      this.setState({
        newTitle: '',
        newDescription: ''
      })
    }
  }

  handleShowEditDesc = () => {
    switch (this.state.editDescVisible) {
      case false:
        return this.setState({
          editDescVisible: true
        })
      case true:
        return this.setState({
          editDescVisible: false
        })
    }
  }

  handleEditDesc = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  handleSubmitDesc = (e, desc, id) => {
    if (e.keyCode === 13) {
      this.props.editGoalDescription({ desc, id })
        .then(this.props.getSelectedGoal(id))
        .then(this.handleShowEditDesc())
    }
  }

  checkGoalCompleted = () => {
    if (this.props.selectedGoal.completed === 1) {
      this.setState({
        isCompleted: true,
        style: {
          color: 'rgba(123, 237, 159,1.0)'
        }
      })
    }
  }

  render () {
    return (
      <>
        <>
          {this.props.isLoading && <Loading />}
        </>
        <>
          {!this.props.isLoading &&
            <div className='selected-goal-container'>
              <div className='selected-goal-container-header'>
                <div className='selected-goal-header'>
                  <h1 style={this.state.style}>{this.state.title}</h1>
                </div>
              </div>
              <div className='selectedGoal-container-body'>
                <div className='selectedGoal-progress'>
                  {this.state.progressVisible && !this.state.isCompleted &&
                    <Progress percent={this.state.goalProgress} active color='orange'>
                      In Progress
                    </Progress>
                  }
                  {this.state.progressVisible && this.state.isCompleted &&
                    <Progress percent={100} success>
                      Done!
                    </Progress>
                  }
                </div>
                <div className='selectedGoal-left'>
                  <div className='selectedGoal-menu'>
                    <Menu vertical>
                      <Menu.Item
                        name={'editDesc'}
                        onClick={this.handleShowEditDesc}>
                          Edit Description
                      </Menu.Item>
                      <Menu.Item
                        name={'addTask'}
                        onClick={this.handleShowTaskInput}>
                         Show/Hide Add Task
                      </Menu.Item>
                    </Menu>
                  </div>
                </div>
                <div className='selectedGoal-centre'>
                  <div className='selectedGoal-description'>
                    <Segment color='red' raised>
                      <h1>Description:</h1>
                      {!this.state.editDescVisible &&
                        <p>{this.state.description}</p>
                      }
                      {this.state.editDescVisible &&
                        <Form>
                          <Form.Input name='editDescription' value={this.state.description} onChange={this.handleEditDesc} onKeyDown={(e) => this.handleSubmitDesc(e, this.state.description, this.props.selectedGoal.id)}></Form.Input>
                        </Form>
                      }
                    </Segment>
                  </div>
                  <div className='selectedGoal-tasks'>
                    <h1>Required Tasks:</h1>
                    {this.state.taskAddVisible &&
                      <Form className='selectedGoal-add-task-form'>
                        <Form.Group>
                          <Form.Input placeholder='New Task' name='newTitle' value={this.state.newTitle} onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.TextArea placeholder='Description' name='newDescription' value={this.state.newDescription} onChange={this.handleChange}></Form.TextArea>
                        <Button style={{ marginBottom: '2vh' }}type='button' onClick={() => this.handleAddTask(this.state.newTitle, this.state.newDescription, this.props.selectedGoal.id)}>Add</Button>
                      </Form>
                    }
                    {this.props.tasksLoading && <Loading />}
                    {!this.props.tasksLoading &&
                    <ul className='tasks-ul'>
                      {this.state.tasks.map(task =>
                        <Task key={task.id} name={task.name} id={task.id}/>
                      )}
                    </ul>
                    }
                  </div>
                </div>
                <div className='selectedGoal-right'>
                  <GoalSettings />
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
    selectedGoal: state.lists.selectedGoal,
    isLoading: state.navigation.isLoading,
    tasksLoading: state.navigation.tasksLoading,
    tasks: state.tasks.goalTasks
  }
}

const MapDispatchToProps = dispatch => {
  return {
    getSelectedGoal: id => dispatch(getSelectedGoal(id)),
    getTasksBySelectedGoal: id => dispatch(getTasksBySelectedGoal(id)),
    addTask: (title, description, goalId) => dispatch(addTask(title, description, goalId)),
    editGoalDescription: (desc, id) => dispatch(editGoalDescription(desc, id))
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(GoalPage)
