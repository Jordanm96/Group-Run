import { useHistory, useParams, Link } from "react-router-dom";
import "../css/RunData.css";

function RunData(props) {
  const params = useParams();
  const history = useHistory();
  const { runs } = props;
  const run = runs.find((run) => run.id === params.id);

  // If runs have not loaded yet...
  if (!run && !runs.length) {
    return <h3>Loading...</h3>;
  } else if (!run) {
    // if the runs are loaded and we still can't find it, send the user to home
    history.push('/')
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
    <div className="run-card ">
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

      <Link class="home-button" to="/">
        <button class="home-button" ><i class="fas fa-home"></i></button>
      </Link>
      <Link class="edit-button" to={`/edit/${run.id}`}>
        <button class="edit-button"><i class="far fa-edit"></i></button>
      </Link>
    </div>
  );
}

export default RunData;
