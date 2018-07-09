import { push } from 'connected-react-router'

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
  try {

  const {
    access_token,
    token_type,
    expires_in,
    refresh_token,
    scope,
    error,
    error_description
  } = await fetch(`${process.env.OAUTH_TOKEN_URI}?code=${code}`)
  .then(res => res.json())
  .catch(err => { throw err })

  if (error) {
    throw new Error('Bad code...')
  }
  
  localStorage.setItem('accessToken', access_token)
  dispatch(push('/explore'))
  return { type: SET_ACCESS_TOKEN, payload: { accessToken: access_token }  }
  } catch (e) {
    dispatch(push('/login'))

    console.log(e)
  }
}
