import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL, config } from "../services";
import "../css/HomeRuns.css";

function Run(props) {
  const { runnerName, date, satisfactionLevel } = props.run.fields;
  const { id } = props.run;

  const deleteRun = async () => {
    const runURL = `${baseURL}/${id}`;
    await axios.delete(runURL, config);
    props.setToggleFetch((curr) => !curr);
  };

  return (
    <div className="run-container">
      <Link className="runner-link" to={`/run/${props.run.id}`}>
        <h2>{runnerName}'S RUN ➡️</h2>
      </Link>
      <p className="rating">Rating: {satisfactionLevel}/5</p>
      <p className="date-logged">{date}</p>
      <button id="delete-button" onClick={deleteRun}>
        🗑
      </button>
    </div>
  );
}

export default Run;
