import React from 'react'
import { history } from '../store'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { connect } from 'react-redux'

import Navbar from '../components/navbar'
import Fab from '../components/fab'

import PrivateRoute from '../utils/privateRoute'
import PublicOnlyRoute from '../utils/publicOnlyRoute'

import Landing from './landing'
import Login from './login'
import Explore from './explore'
import Community from './community'
import Signup from './signup'
import Redirect from './redirect'
import NotFound from './notFound'



import { destroyAccessToken } from '../modules/session'

const mapStateToProps = state => ({ session: state.session })

@connect(mapStateToProps, { destroyAccessToken })
class AppRouter extends React.Component {
  
  render() {
    const { accessToken } = this.props.session

    return (
      <ConnectedRouter history={history}>
        <>
        <Navbar accessToken={accessToken} />
        <Switch>
          <PublicOnlyRoute exact path='/' component={Landing} />

          <PublicOnlyRoute privateOnly={false} publicOnly={true} path='/login' accessToken={accessToken} component={Login} />
          <PublicOnlyRoute privateOnly={false} publicOnly={true} path='/signup' accessToken={accessToken} component={Signup} />
          <PublicOnlyRoute privateOnly={false} publicOnly={true} path='/redirect' accessToken={accessToken} component={Redirect} />

          <PrivateRoute path='/explore' accessToken={accessToken} component={Explore} />
          <PrivateRoute path='/community' accessToken={accessToken} component={Community} />

          <Route exact component={NotFound} />
        </Switch>
        {
          accessToken && <Fab />
        }
        </>
      </ConnectedRouter>
    )
  }
}
export default AppRouter;
