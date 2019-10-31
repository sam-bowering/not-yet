import React from 'react'
import { connect } from 'react-redux'
import { Divider } from 'semantic-ui-react'

class List extends React.Component {
  render () {
    return(
      <>
        <div className='uncompleted-goals-container'>
          <h1 className='uncompleted-container-title'>Uncompleted</h1>
          <div className='uncompleted-goals-list'>
            {this.props.list.map(listItem => 
            <div className='list-goal-item'>
              <h1 key={listItem.id}>{listItem.name}</h1>
            </div>
            )}
          </div>
        </div>
        <div className='horizontal-divider'>
          <Divider />
        </div>
        <div className='completed-goals-container'>
          <h1>Completed</h1>
          <div className='completed-goals-list'>

          </div>
        </div>
      </>
    )
  }
}
  
const MapStateToProps = state => {
  return {
    list: state.listReducer.listItems
  }
}

export default connect(MapStateToProps, null)(List)