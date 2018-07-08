
const initialState = {
  accessToken: localStorage.getItem('accessToken')
}

// actions
const SET_ACCESS_TOKEN = 'iNaturalist/session/SET_ACCESS_TOKEN';
const DESTROY_ACCESS_TOKEN = 'iNaturalist/session/DESTROY_ACCESS_TOKEN ';

// Reducer
export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action
  switch (type) {
    case SET_ACCESS_TOKEN: 
      return { ...state, ...payload }
    default: return state;
  }
}

// Action Creators


export const getAccessToken = ({ code }) => async dispatch => {
  const { INATURALIST_URI, OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET, OAUTH_REDIRECT_URI, OAUTH_GRANT_TYPE } = process.env

  const payload = {
    client_id: OAUTH_CLIENT_ID,
    client_secret: OAUTH_CLIENT_SECRET,
    code,
    redirect_uri: OAUTH_REDIRECT_URI,
    grant_type: OAUTH_GRANT_TYPE
  }

  const response = await fetch(`${INATURALIST_URI}/oauth/token`, {
    method: 'POST',
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(payload)
  })
  .then(res => res)
  .catch(err => { throw err })

  console.log(response)

  return { type: SET_ACCESS_TOKEN, payload: { accessToken }  }
}
