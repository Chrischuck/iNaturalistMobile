import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from '../components/navbar'
import Fab from '../components/fab'

import Landing from './landing'
import Login from './login'
import Signup from './signup'
import NotFound from './notFound'

class AppRouter extends React.Component {
  render() {

    return (

        <Router>
          <>
          <Navbar />

          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Landing} />
            <Route exact path='/signup' component={Landing} />
            <Route exact component={NotFound} />
          </Switch>

          <Fab />
          </>
        </Router>
        


    )
  }
}
export default AppRouter;