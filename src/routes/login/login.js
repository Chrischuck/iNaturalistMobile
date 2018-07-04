import React from 'react'

class Login extends React.Component {

 
  render() {

    return (
      <div> <a href={`${process.env.OAUTH_URI}?client_id=${process.env.OAUTH_CLIENT_ID}&redirect_uri=${process.env.OAUTH_REDIRECT_URI}&response_type=code`}>link</a></div>
    )
  }
} 

export default Login