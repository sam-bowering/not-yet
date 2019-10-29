import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Welcome from './Welcome'
import List from './List'
import Header from './Header'

const App = () => (
  <Router>
    <Header />
    <Route path='/' exact component={Welcome} />
    <Route path='/goals' exact component={List} />
  </Router>
)

export default App
