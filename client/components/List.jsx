import React from 'react'
import { connect } from 'react-redux'
import { Divider } from 'semantic-ui-react'

class List extends React.Component {
  componentDidMount () {
    this.state = {
      list: this.props.list
    }
  }

  render () {
    return(
      <>
        {/* {this.props.list.map(listItem => 
          <div className='list-goal-item'>
            <h1 key={listItem.id}>{listItem.name}</h1>
          </div>
        )} */}
        <h1 className='uncompleted-header'>Uncompleted</h1>
        <Divider vertical>NOT YET?</Divider>
        <h1 className='completed-header'>Completed</h1>
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