import teams from "./teams.json";
import "./home.css"
export default function Teams() {
  return (
    <div>
      <div className="teambutton">

      {teams.map((team) => {
        console.log(team);
        return <div>
            {team?.name}
        </div>;
      })}
      </div>
    </div>
  );
}
