export const initialState = {
  selectTeam: { yourTeam: null, oppositionTeam: null },
};

export const actionTypes = {
  SELECT_TEAM: "SELECT_TEAM",
  REMOVE_TEAM: "REMOVE_TEAM",
  SELECT_OVER: "SELECT_OVER",
};

export function reducer(state, action) {
  console.log({ action });
  switch (action.type) {
    case actionTypes.SELECT_TEAM:
      if(!state.selectTeam.yourTeam){
          state.selectTeam.yourTeam=action.data
      }
      else{
        state.selectTeam.oppositionTeam=action.data
      }
      return { ...state};
    case actionTypes.REMOVE_TEAM:
      if(state.selectTeam.yourTeam===action.data){
        state.selectTeam.yourTeam=null
    }
    else{
      state.selectTeam.oppositionTeam=null
    }
      return { ...state};
    default:
      return state;
  }
}
