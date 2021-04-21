
export const initialState = {};

export const actionTypes = {
    SELECT_TEAM: "SELECT_TEAM", 
    SELECT_OVER: "SELECT_OVER"
}

export function reducer(state, action) {
    console.log({action})
  switch (action.type) {
    case actionTypes.SELECT_TEAM:
      return {...state, team:action.data};
    default:
      return state
  }
}