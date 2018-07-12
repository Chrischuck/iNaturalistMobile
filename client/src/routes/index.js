import React from 'react'
import { history } from '../store'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { connect } from 'react-redux'

import Navbar from '../components/navbar'
import Fab from '../components/fab'

import AuthRoute from '../utils/authRoute'

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
          <Route exact path='/' component={Landing} />

          <AuthRoute privateOnly={false} publicOnly={true} path='/login' accessToken={accessToken} component={Login} />
          <AuthRoute privateOnly={false} publicOnly={true} path='/signup' accessToken={accessToken} component={Signup} />
          <AuthRoute privateOnly={false} publicOnly={true} path='/redirect' accessToken={accessToken} component={Redirect} />

          <AuthRoute privateOnly={true} path='/explore' accessToken={accessToken} component={Explore} />
          <AuthRoute privateOnly={true} path='/community' accessToken={accessToken} component={Community} />

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
