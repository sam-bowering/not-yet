import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Welcome from './Welcome'
import Goals from './Goals'
import Header from './Header'
import Create from './Create'

const App = () => (
  <Router>
    <Header />
    <Route path='/' exact component={Welcome} />
    <Route path='/goals' exact component={Goals} />
    <Route path='/create' exact component={Create} />
  </Router>
)

export default App
