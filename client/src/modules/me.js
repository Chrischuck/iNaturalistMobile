import { push } from 'connected-react-router'

const initialState = {
  profile: null
}

// actions
const GET_PROFILE = 'iNaturalist/session/GET_PROFILE';


// Reducer
export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action
  switch (type) {
    case GET_PROFILE: 
      return { ...state, ...payload }
    default: return state;
  }
}

// Action Creators


export const getProfile = ({ accessToken }) => async dispatch => {
  const profile = await fetch(`${process.env.CUSTOM_API_URI}/get-me?accessToken=${accessToken}`, {
    headers: {
      Accept: 'application/json',
    }
  })
  .then(res => res.json())
  .catch(console.error)
  
  dispatch({ type: GET_PROFILE, payload: { profile } })
}
