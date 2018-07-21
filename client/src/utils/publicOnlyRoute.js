import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PublicOnlyRoute = ({ component: Component, accessToken, path, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !accessToken ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/explore",
            state: { from: props.location }
          }}
        />
      )
    }
  />
)



export default PublicOnlyRoute