import { useParams, Link } from "react-router-dom";

function RunData(props) {
  const params = useParams();
  const { runs } = props;
  // const { id } = props.run;
  const individualData = runs.find((run) => run.id === params.id);

  if (!individualData) {
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
  } = individualData.fields;

  return (
    <div className="run-card">
      <h3>{runnerName}</h3>
      <h3>{date}</h3>
      <h3>Distance: {distance} miles</h3>
      <h3>Time: {hours}:{minutes}:{seconds}</h3>
      <h3>Cals: {caloriesBurned}</h3>
      <h4>Rating: {satisfactionLevel}/5</h4>
      <p>Notes: {additionalNotes}</p>
      {/* <Link to={`/edit/${id}`}>
        <button>Edit</button>
      </Link> */}
      <Link to = "/">
        <button>Go back</button>
      </Link>
      
      {/* <h2>Edit button/Link here</h2>*/}
    </div>
  );
}

export default RunData;
