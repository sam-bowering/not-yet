import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Welcome from './Welcome'
import Goals from './Goals'
import Header from './Header'
import Create from './Create'
import GoalPage from './GoalPage'

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path='/' exact component={Welcome} />
      <Route path='/goals' component={Goals} />
      <Route path='/create' component={Create} />
      <Route path='/goal/:selectedGoal' component={GoalPage}/>
    </Switch>
  </Router>
)

export default App
