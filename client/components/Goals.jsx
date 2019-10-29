import React from 'react'
import { Link } from 'react-router-dom'

import List from './List'

const Goals = () => {
  return(
    <>
      <div className='list-container'>
        <List />
      </div>
      <Link to='/'>Go Back</Link>
    </>
  )
}

export default Goals