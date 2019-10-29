import React from 'react'

import List from './List'

class Welcome extends React.Component {
  render () {
    return(
      <div className='welcome-container'>
        {/* <div className='header'>
          <button>Sign In</button>
          <button>Sign Out</button>
          <button>Register</button>
        </div> */}
        <div className='title-message'>
          <h1>Not Yet?</h1>
          <span>Does this sound like you? Jump in and get your 'Not Yet's sorted!</span> 
        </div>
        {/* <List /> */}
      </div>
    )
  }
}

export default Welcome