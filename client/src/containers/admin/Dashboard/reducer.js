import {SET_DASHBAORD} from './constants';
const initialState = {};

function reducer(state, action) {
  switch (action.type) {
    case SET_DASHBAORD:
      return {
        ...state,
        dashboard: action.data
      };
    default:
      return state;
  }
}

export {initialState};
export default reducer;