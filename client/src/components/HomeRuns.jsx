import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

function Run(props) {
  const { runnerName, date } = props.run.fields;
  const { id } = props.run;

  const deleteRun = async () => {
    const runURL = `${baseURL}/${id}`;
    await axios.delete(runURL, config);
    props.setToggleFetch((curr) => !curr);
  }
  return (
    <div>
      {/* This link takes you to the RunData component with all the run info */}
      <Link to={`/run/${props.run.id}`}>
        {/* Display the name of the runner and date as the link to more info */}
      <h3>{runnerName}'s run {date}</h3>
      </Link>
      
      <button onClick = {deleteRun}>Remove Run</button>
      {/* <p>maybe include the ranking or location of the run here as well</p> */}
      
    </div>
  )
}

export default Run;