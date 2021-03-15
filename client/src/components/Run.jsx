import axios from "axios";
import { baseURL, config } from "../services";
import { Link } from "react-router-dom";

function Run(props) {
  console.log(props.run.fields.runnerName)

  return (
    <div>
      <h3>Run time baby</h3>
      <Link to = {`/run/${props.run.id}`}>
      <p>{props.run.fields.runnerName}'s run</p>
      {/* <p>{props.run.fields.date}</p> */}
      </Link>
      
    </div>
  )
}

export default Run;