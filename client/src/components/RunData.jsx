import { useParams } from "react-router-dom";

function JogData(props) {
  const params = useParams();
  const { runs } = props;
  const individualData = runs.find((run) => run.id === params.id);
  // console.log(individualData)

  if (!individualData) {
    return <></>;
  }
  // console.log(individualData.fields)
  const {
    runnerName,
    caloriesBurned,
    date,
    distance,
    time,
    satisfactionLevel,
    additionalNotes,
  } = individualData.fields;

  return (
    <div className="run-card">
      <h3>{runnerName}</h3>
      <h3>{date}</h3>
      <h3>Distance: {distance} miles</h3>
      <h3>Time: {time} minutes</h3>
      <h3>Cals: {caloriesBurned}</h3>
      <h4>How was it 1-5? {satisfactionLevel}</h4>
      <p>Notes: {additionalNotes}</p>
      <h2>Edit button/Link here</h2>
      <h2>Back to home page button/Link here</h2>
    </div>
  );
}

export default JogData;
