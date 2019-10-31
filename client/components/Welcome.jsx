import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Welcome extends React.Component {
  render () {
    return(
      <div className='welcome-container'>
        <div className='welcome-title'>
          <div className='welcome-title-message'>
            <h1>Not Yet?</h1>
            <p>Now's a better time than ever.</p>
          </div>
          <div className='welcome-buttons'>
            <Link to='/goals' style={{color: 'white'}}><button type='button'>View</button></Link>
            <Link to='/create' style={{color: 'white'}}><button type='button'>Create</button></Link>
          </div>
        </div>
        <div className='welcome-body-message'>
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column><Link to='/create'><h1 style={{color: 'rgba(6, 82, 221,1.0)'}}>Create</h1></Link></Grid.Column>
              <Grid.Column><Link to='/#'><h1 style={{color: 'rgba(238, 90, 36,1.0)'}}>Plan</h1></Link></Grid.Column>
              <Grid.Column><Link to='/#'><h1 style={{color: 'rgba(0, 148, 50,1.0)'}}>Achieve</h1></Link></Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Welcome