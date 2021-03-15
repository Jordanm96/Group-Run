import { Link } from "react-router-dom";

function Run(props) {
  const { runnerName, date } = props.run.fields;

  return (
    <div>
      {/* This link takes you to the RunData component with all the run info */}
      <Link to={`/run/${props.run.id}`}>
        {/* Display the name of the runner and date as the link to more info */}
      <h3>{runnerName}'s run {date}</h3>
      </Link>
      {/* <p>maybe include the ranking or location of the run here as well</p> */}
      
    </div>
  )
}

export default Run;