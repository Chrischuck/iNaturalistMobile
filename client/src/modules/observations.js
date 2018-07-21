import { push } from 'connected-react-router'

const initialState = {
  observations: []
}

// actions
const GET_OBSERVATIONS = 'iNaturalist/session/GET_OBSERVATIONS';


// Reducer
export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action
  switch (type) {
    case GET_OBSERVATIONS: 
      return { ...state, ...payload }
    default: return state;
  }
}

// Action Creators


export const getObservations = ({ latitude, longitude, radius, tokenType, accessToken }) => async dispatch => {
  const response = await fetch(
    `${process.env.INATURALIST_API_URI}/observations?lat=${latitude}&lng=${longitude}&radius=${radius}`,
    {
      headers: {
        Authorization: `${tokenType} ${accessToken}`
      }
    }
  )
  .then(res => res.json())
  .catch(console.error)

  console.log(response)
}
