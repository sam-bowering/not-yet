import React from 'react'
import { connect } from 'react-redux'

class List extends React.Component {
  render () {
    return(
      <ul>
        {this.props.list.map(listItem => <li key={listItem.id}>{listItem.name}</li>)}
      </ul>
    )
  }
}
  
const MapStateToProps = state => {
  return {
    list: state.listReducer.listItems
  }
}

export default connect(MapStateToProps, null)(List)