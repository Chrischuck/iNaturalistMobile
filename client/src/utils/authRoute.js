import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const AuthRoute = ({ privateOnly, publicOnly, component, accessToken, path }) => {
  try {

    if (privateOnly && accessToken) {
      return <Route path={path} component={component} />
    } else if (publicOnly && accessToken) {
      return <Route render={props => <Redirect to='/explore' /> } />
    } else {
      return <Route render={props => <Redirect to='/login' /> } />
    }
  } catch(err) {
    console.log(err)
    console.log('oh no....')
  }
}


export default AuthRoute