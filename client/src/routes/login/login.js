import React from 'react'

import './index.scss'


const { INATURALIST_URI, OAUTH_CLIENT_ID, OAUTH_REDIRECT_URI, OAUTH_RESPONSE_TYPE } = process.env
const REDIRECT_URI = `${INATURALIST_URI}/oauth/authorize?client_id=${OAUTH_CLIENT_ID}&redirect_uri=${OAUTH_REDIRECT_URI}&response_type=${OAUTH_RESPONSE_TYPE}`

class Login extends React.Component {
 
  render() {
    return (
      <div className='login-wrapper'>
        <div className='login-content'>

          <h3> Log into iNaturalist Mobile</h3>
          <a 
            className='oauth-button'
            href={REDIRECT_URI}
          >
            <span className='oauth-inner'>Login with iNaturalist</span>
          </a>

        </div>
      </div>
    )
  }
} 

export default Login