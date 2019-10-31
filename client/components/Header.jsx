import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <div className='header-container'>
      <div className='header-container-text-left'>
        <span><Link to='/' style={{color: 'white'}}>Home</Link></span>
      </div>
      <div className='header-container-text-right'>
        <span>Register</span>
      </div>
    </div>
  )
}

export default Header