import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-container-text-left'>
        <span className='header-nav-title'><Link to='/' style={{ color: 'white' }}>Home</Link></span>
        <span className='header-nav-divider'>|</span>
        <span className='header-nav-label'><Link to='/goals' style={{ color: 'white' }}>View</Link></span>
        <span className='header-nav-label'><Link to='/create' style={{ color: 'white' }}>Create</Link></span>
      </div>
      <div className='header-container-text-right'>
        <span>Register</span>
      </div>
    </div>
  )
}

export default Header
