import React from 'react'
import { Button, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Welcome extends React.Component {
  render () {
    return(
      <div className='welcome-container'>
        <div className='welcome-header'>
          <Button color='red'>Sign In</Button>
          <Button>Sign Out</Button>
          <Button>Register</Button>
        </div>
        <div className='welcome-title'>
          <div className='welcome-title-message'>
            <h1>Not Yet?</h1>
            <p>Now's a better time than ever.</p>
          </div>
        </div>
        <div className='welcome-body-message'>
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column>Create</Grid.Column>
              <Grid.Column>Plan</Grid.Column>
              <Grid.Column>Achieve</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column><Link to='/goals'>Jump Back In</Link></Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Welcome