import { push } from 'connected-react-router'

const initialState = {
  accessToken: localStorage.getItem('accessToken'),
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
    case DESTROY_ACCESS_TOKEN: 
      return { ...state, accessToken: null }
    default: return state;
  }
}

// Action Creators


export const getAccessToken = ({ code }) => async dispatch => {
  try {

    const {
      access_token,
      token_type,
      created_at,
      refresh_token,
      scope,
      error,
      error_description,
      ...rest
    } = await fetch(`${process.env.CUSTOM_API_URI}/get-token?code=${code}`)
    .then(res => res.json())
    .catch(err => { throw err })

    if (error) {
      throw new Error('Bad code...')
    }
    
    // expires in 24 hrs
    localStorage.setItem('accessToken', access_token)
    dispatch({ type: SET_ACCESS_TOKEN, payload: { accessToken: access_token }  })
    dispatch(push('/explore'))

  } catch (e) {
    dispatch(push('/login'))
    console.log(e)
  }
}

export const destroyAccessToken = () => async dispatch => {
  localStorage.removeItem('accessToken')
  dispatch(push('/login'))
  return { type: DESTROY_ACCESS_TOKEN }
}