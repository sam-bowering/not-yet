import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Welcome from './Welcome'
import List from './List'

const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Welcome} />
      <Route path='/goals' exact component={List} />
    </Switch>
  </Router>
)

export default App
