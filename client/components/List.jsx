import React from 'react'
import { connect } from 'react-redux'

class List extends React.Component {
  componentDidMount() {
    this.props.getList()
  }

  render () {
    return(
      <p>{props.list}</p>
    )
  }
}
  
const MapDispatchToProps = dispatch => {
  return {
    getList: () => dispatch(getList())
  }
}


export default connect(null, MapDispatchToProps)(List)