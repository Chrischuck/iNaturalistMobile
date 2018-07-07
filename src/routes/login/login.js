import React from 'react'

import './index.scss'

class Login extends React.Component {
 
  render() {
    return (
      <div className='login-wrapper'>
        <div className='login-content'>

          <h3> Log into iNaturalist Mobile</h3>
          <a 
            className='oauth-button'
            href={`${process.env.OAUTH_URI}?client_id=${process.env.OAUTH_CLIENT_ID}&redirect_uri=${process.env.OAUTH_REDIRECT_URI}&response_type=code`}
          >
            <span className='oauth-inner'>Login with iNaturalist</span>
          </a>

        </div>
      </div>
    )
  }
} 

export default Login