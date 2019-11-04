import React from 'react'
import { connect } from 'react-redux'

const TaskList = props => {
  return (
    <div className='tasklist-container'>
      {/* {props.tasks.map(task =>
        <h1 key={task.id}>{task.name}</h1>
      )} */}
    </div>
  )
}

const MapStateToProps = state => {
  return {
    tasks: state.lists.tasks
  }
}

export default connect(MapStateToProps, null)(TaskList)
