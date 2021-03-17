import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL, config } from "../services";
import "../css/HomeRuns.css";

function Run(props) {
  const { runnerName, date } = props.run.fields;
  const { id } = props.run;

  const deleteRun = async () => {
    const runURL = `${baseURL}/${id}`;
    await axios.delete(runURL, config);
    props.setToggleFetch((curr) => !curr);
  };
  return (
    <div className="run-container">
      {/* This link takes you to the RunData component with all the run info */}
      <Link to={`/run/${props.run.id}`}>
        {/* Display the name of the runner and date as the link to more info */}
        <h2 className="runner-link">{runnerName}'s Run</h2>
        {/* <h4>Rating: {satisfactionLevel}/5</h4> */}
      </Link>
      <h5 className="date-logged">{date}</h5>

      <button id="delete-button" onClick={deleteRun}>
        Delete Run
      </button>
      {/* <p>maybe include the ranking or location of the run here as well</p> */}
    </div>
  );
}

export default Run;
