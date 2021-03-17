import { useParams, Link } from "react-router-dom";
import "../css/RunData.css";

function RunData(props) {
  const params = useParams();
  const { runs } = props;
  const run = runs.find((run) => run.id === params.id);

  if (!run) {
    return <></>;
  }

  const {
    runnerName,
    caloriesBurned,
    date,
    distance,
    hours,
    minutes,
    seconds,
    satisfactionLevel,
    additionalNotes,
  } = run.fields;

  return (
    <div className="run-card">
      <h3>Runner: {runnerName}</h3>
      <h3>Date: {date}</h3>
      <h3>Distance: {distance} miles</h3>
      <h3>
        Time: {hours}:{minutes}:{seconds}
      </h3>
      <h3>{caloriesBurned} cals</h3>
      <h3>Rating: {satisfactionLevel}/5</h3>
      {/* if notes are left blank on form*/}
      {additionalNotes ? <h4>Comments: {additionalNotes}</h4> : <h4>Comments: No comments listed</h4>}
      <Link to={`/edit/${run.id}`}>
        <button className="run-card-buttons">Edit info</button>
      </Link>
      <Link to="/">
        <button className="run-card-buttons">Back</button>
      </Link>
    </div>
  );
}

export default RunData;
