import React from 'react'
import { Button } from 'semantic-ui-react'

const Header = () => {
  return(
    <div className='header-container'>
      <Button color='red'>Sign In</Button>
      <Button>Sign Out</Button>
      <Button>Register</Button>
    </div>
  )
}

export default Header