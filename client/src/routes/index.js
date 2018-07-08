import React from 'react'
import { history } from '../store'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import Navbar from '../components/navbar'
import Fab from '../components/fab'

import Landing from './landing'
import Login from './login'
import Explore from './explore'
import Signup from './signup'
import Redirect from './redirect'
import NotFound from './notFound'

class AppRouter extends React.Component {
  render() {

    return (
        <ConnectedRouter history={history}>
          <>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/explore' component={Explore} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Landing} />
            <Route exact path='/redirect' component={Redirect} />
            <Route exact component={NotFound} />
          </Switch>

          <Fab />
          </>
        </ConnectedRouter>
    )
  }
}
export default AppRouter;