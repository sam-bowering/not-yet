import React from 'react'
import { connect } from 'react-redux'
import { Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const List = props => {
    return(
      <>
        <div className='uncompleted-goals-container'>
          <h1 className='uncompleted-container-title'>Uncompleted</h1>
          <div className='uncompleted-goals-list'>
            {props.uncompletedGoals.map(listItem => 
            <div className='list-goal-item-uncompleted'>
              <Link to={`/goal/${listItem.id}`}>
                <h1 className='uncompleted-goal-title'key={listItem.id}>{listItem.name}</h1>
              </Link>
            </div>
            )}
          </div>
        </div>
        <div className='horizontal-divider'>
          <Divider />
        </div>
        <div className='completed-goals-container'>
          <h1 className='completed-container-title'>Completed</h1>
          <div className='completed-goals-list'>
            {props.completedGoals.map(listItem => 
              <div className='list-goal-item-completed'>
                <Link to={`/goal/${listItem.id}`}>
                  <h1 className='completed-goal-title' key={listItem.id}>{listItem.name}</h1>
                </Link>
              </div>
              )}
          </div>
        </div>
      </>
    )
}
  
const MapStateToProps = state => {
  return {
    list: state.listReducer.listItems,
    uncompletedGoals: state.listReducer.uncompletedList,
    completedGoals: state.listReducer.completedList
  }
}

export default connect(MapStateToProps, null)(List)