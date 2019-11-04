import React from 'react'
import { Loader } from 'semantic-ui-react'

const Loading = () => {
  return (
    <div className='loading-container'>
      <Loader active size='big' />
    </div>
  )
}

export default Loading
