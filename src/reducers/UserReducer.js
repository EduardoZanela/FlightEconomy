const SET_AVATAR = 'SET_AVATAR';
const SET_FLIGHT = 'SET_FLIGHT';

export const initialState = {
  avatar: 'avatar',
  flights: [],
  planes: [],
};

export const UserReducer = (state, action) => {
  switch(action.type) {
    case SET_AVATAR:
      return {
        ...state,
        avatar: action.payload.avatar
      };
      break;
    case SET_FLIGHT:
      return {
        ...state,
        flights: action.payload.flights
      }
      break;
    default:
      return state;
  }
}

export function setAvatar (avatar) {
  return {
    type: SET_AVATAR,
    payload: {
      avatar
    }
  }
}

export function setFlights (flights) {
  return {
    type: SET_FLIGHT,
    payload: {
      flights
    }
  }
}