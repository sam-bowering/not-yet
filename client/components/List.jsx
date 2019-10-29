import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getList } from '../actions/list'

class List extends React.Component {
  componentDidMount() {
    this.props.getList()
  }

  render () {
    return(
      <>
        <ul>
          {this.props.list.map(listItem => <li key={listItem.id}>{listItem.name}</li>)}
        </ul>
        <br/>
        <Link to='/'>Go Back</Link>
      </>
    )
  }
}
  
const MapStateToProps = state => {
  return {
    list: state.list
  }
}

const MapDispatchToProps = dispatch => {
  return {
    getList: () => dispatch(getList())
  }
}


export default connect(MapStateToProps, MapDispatchToProps)(List)