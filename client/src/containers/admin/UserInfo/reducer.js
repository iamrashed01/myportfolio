import {SET_USER_INFO} from './constants';
const initialState = {};

function reducer(state, action) {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.data
      };
    default:
      return state;
  }
}

export {initialState};
export default reducer;