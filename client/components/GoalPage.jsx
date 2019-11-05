import React from 'react'
import { connect } from 'react-redux'
import { Segment, Progress, Menu, Modal, Button, Grid } from 'semantic-ui-react'

import { getSelectedGoal } from '../actions/getSelectedGoal'
import { getTasksBySelectedGoal } from '../actions/getTasksBySelectedGoal'
import Loading from './Loading'
import Task from './Task'

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
  }

  state = {
    title: '',
    tasks: [],
    activeItem: 'Header'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state
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
                  <h1>{this.state.title}</h1>
                </div>
              </div>
              <div className='selectedGoal-container-body'>
                <div className='selectedGoal-progress'>
                  <Progress percent={60} active color='orange'>
                    Progress
                  </Progress>
                </div>
                <div className='selectedGoal-left'>
                  <div className='selectedGoal-settings'>
                    <Modal trigger={<Button>Settings</Button>}>
                      <Modal.Header>Settings</Modal.Header>
                      <Modal.Content>
                        <Grid>
                          <Grid.Column width={4}>
                            <Menu fluid vertical tabular>
                              <Menu.Item
                                name='Header'
                                active={activeItem === 'Header'}
                                onClick={this.handleItemClick}
                              />
                              <Menu.Item
                                name='Progress Bar'
                                active={activeItem === 'Progress Bar'}
                                onClick={this.handleItemClick}
                              />
                              <Menu.Item
                                name='Description'
                                active={activeItem === 'Description'}
                                onClick={this.handleItemClick}
                              />
                              <Menu.Item
                                name='Tasks'
                                active={activeItem === 'Tasks'}
                                onClick={this.handleItemClick}
                              />
                            </Menu>
                          </Grid.Column>

                          <Grid.Column stretched width={12}>
                            {
                              activeItem === 'Header' &&
                                <Segment>
                                  Header
                                </Segment>
                            }
                            {
                              activeItem === 'Progress Bar' &&
                                <Segment>
                                  Progress Bar
                                </Segment>
                            }
                            {
                              activeItem === 'Description' &&
                                <Segment>
                                  Description
                                </Segment>
                            }
                            {
                              activeItem === 'Tasks' &&
                                <Segment>
                                  Tasks
                                </Segment>
                            }
                          </Grid.Column>
                        </Grid>
                      </Modal.Content>
                    </Modal>
                  </div>
                </div>
                <div className='selectedGoal-centre'>
                  <div className='selectedGoal-description'>
                    <Segment color='red' raised>
                      <h1>Description:</h1>
                      <p>{this.state.description}</p>
                    </Segment>
                  </div>
                  <div className='selectedGoal-tasks'>
                    <h1>Required Tasks:</h1>
                    {this.props.tasksLoading && <Loading />}
                    {!this.props.tasksLoading &&
                    <ul className='tasks-ul'>
                      {this.state.tasks.map(task =>
                        <Task key={task.id} name={task.name}/>
                      )}
                    </ul>
                    }
                  </div>
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
    getTasksBySelectedGoal: id => dispatch(getTasksBySelectedGoal(id))
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(GoalPage)
