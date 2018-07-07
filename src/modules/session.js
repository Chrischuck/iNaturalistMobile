
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
export const setAccessToken = ({ accessToken }) => {
  return { type: SET_ACCESS_TOKEN, payload: { accessToken }  };
}


export const getAccessToken = ({ accessToken }) => {
  return { type: SET_ACCESS_TOKEN, payload: { accessToken }  };
}