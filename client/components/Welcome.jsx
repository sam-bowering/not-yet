import React from 'react'
import { Segment, Button } from 'semantic-ui-react'

import List from './List'

class Welcome extends React.Component {
  render () {
    return(
      <div className='welcome-container'>
        <div className='welcome-header'>
          <Button>Sign In</Button>
          <Button>Sign Out</Button>
          <Button>Register</Button>
        </div>
        <div className='welcome-title-message'>
          <h1>Not Yet?</h1>
          <span>Does this sound like you? Jump in and get your 'Not Yet's sorted!</span> 
        </div>
        <div className='welcome-body-message'></div>
        {/* <List /> */}
      </div>
    )
  }
}

export default Welcome