import React from 'react'
import { connect } from 'react-redux'

import List from './List'
import { getList } from '../actions/getList'

const Goals = () => {
  return (
      <>
      <div className='list-container'>
        <div className='list-container-header'>
          <div className='list-header'>
            <h1>Goals.</h1>
          </div>
        </div>
        <div className='list-goals'>
          <List />
        </div>
      </div>
      </>
  )
}

const MapDispatchToProps = dispatch => {
  return {
    getList: () => dispatch(getList())
  }
}

export default connect(null, MapDispatchToProps)(Goals)
