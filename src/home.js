import teams from "./teams.json";
import overs from "./overs.json"
import "./home.css"
import Menu from "./menu";
import {useReducer} from "react"
import {reducer, initialState} from "./state"


export default function Teams() { 
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log({state})

  return (
    <div>
      <Menu teams={teams} overs={overs} dispatch={dispatch} state={state}></Menu>
      
    </div>
  )
} 
