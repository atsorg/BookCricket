import { actionTypes } from "../state";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

export default function Menu({ teams, overs, dispatch, state }) {
  const handleTeamSelect = (team) => {
    dispatch({ type: actionTypes.SELECT_TEAM, data: team });
  };

  const handleRemoveTeam = (team) => {
    dispatch({ type: actionTypes.SELECT_TEAM, data: team });
  };
  return (
    <div>
      {state.team ? (
        <div id="mainclose" className="mainbutton">
          {state.team?.name}
          <HighlightOffIcon onClick={() => {}}></HighlightOffIcon>
        </div>
      ) : (
        <h2>Select Your Teams</h2>
      )}
      <div className="teambutton">
        {teams.map((team) => {
          return (
            <div
              id="rteam"
              className="mainbutton"
              onClick={() => handleTeamSelect(team)}
            >
              {team?.name}
            </div>
          );
        })}
      </div>
      <div>
        <h2>Select Overs</h2>
      </div>
      <div>
        <div className="overbutton">
          {overs.map((over) => {
            return (
              <div id="rover" className="mainbutton">
                {over?.name}
              </div>
            );
          })}
        </div>
        <div className="mainbutton">
          <h2>Start Game</h2>
        </div>
      </div>
    </div>
  );
}
