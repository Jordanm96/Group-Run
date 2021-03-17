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
      <Link to={`/run/${props.run.id}`}>
        <h2 className="runner-link">{runnerName}'s Run</h2>
        {/* Potentially include the rating here as well */}
      </Link>
      <h5 className="date-logged">{date}</h5>

      <button id="delete-button" onClick={deleteRun}>
        Delete Run
      </button>
    </div>
  );
}

export default Run;
