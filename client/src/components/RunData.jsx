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
      <label className="runner-label"htmlFor="runner">Runner:</label>
      <label className="date-label" htmlFor="date">Date:</label>
      <label className="distance-label" htmlFor="">Distance:</label>
      <label className="time-label" htmlFor="">Time:</label>
      <label className="calories-label" htmlFor="">Calories:</label>
      <label className="rating-label" htmlFor="">How was it?</label>
      <label className="comments-label" htmlFor="">Comments:</label>

      <p className="name-entry">{runnerName}</p>
      <p className="date-entry">{date}</p>
      <p className="distance-entry">{distance} miles</p>
      <p className="time-entry">{hours}hrs {minutes}min {seconds}sec</p>
      <p className="calories-entry">{caloriesBurned}</p>
      <p className="difficulty-entry">{satisfactionLevel}/5</p>
      {additionalNotes ? <p className="comments-entry">{additionalNotes}</p> : <p className="comments-entry">No comments</p>}
      
      <Link id="home-button" to="/">
        <button >Home</button>
      </Link>
      <Link id="edit-button" to={`/edit/${run.id}`}>
        <button >Edit info</button>
      </Link>
    </div>
  );
}

export default RunData;
