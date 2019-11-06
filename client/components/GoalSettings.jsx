import React from 'react'
import { Modal, Button, Grid, Menu, Segment } from 'semantic-ui-react'

class GoalSettings extends React.Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  state = {
    activeItem: 'Header'
  }

  render () {
    const { activeItem } = this.state
    return (
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
    )
  }
}

export default GoalSettings
