import { useParams, Link } from "react-router-dom";

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
      <h2>RunData page</h2>
      <h3>{runnerName}</h3>
      <h3>{date}</h3>
      <h3>Distance: {distance} miles</h3>
      <h3>
        Time: {hours}:{minutes}:{seconds}
      </h3>
      <h3>{caloriesBurned} cals</h3>
      <h4>Rating: {satisfactionLevel}/5</h4>
      {/* if notes are left blank on form, do nothing */}
      {additionalNotes ? <p>Comments: {additionalNotes}</p> : <></>}
      <Link to={`/edit/${run.id}`}>
        <button>Edit info</button>
      </Link>
      <Link to="/">
        <button>Back</button>
      </Link>

      {/* <h2>Edit button/Link here</h2>*/}
    </div>
  );
}

export default RunData;
