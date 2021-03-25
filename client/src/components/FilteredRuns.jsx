import React from "react";
import { Link } from "react-router-dom";

const FilteredRuns = (props) => {
  const { userInput } = props;
  const { runnerName, date, satisfactionLevel } = props.run.fields;
  const { id } = props.run;
  
  const deleteRun = async () => {
    const runURL = `${baseURL}/${id}`;
    await axios.delete(runURL, config);
    props.setToggleFetch((curr) => !curr);
  };

  const filteredRuns = props.runs.filter((run) => {
    return (
      run.name && run.name.toUpperCase().includes(props.userInput.toUpperCase())
    );  
  });  

  return (
    <>
      {userInput &&
        filteredRuns.map((run) => (
          <div className="run-container">
          <Link className="runner-link" to={`/run/${props.run.id}`}>
            <h2>
              <i className="fas fa-running"></i> {runnerName}'S RUN
            </h2>
          </Link>
          <p className="rating">Rating: {run.satisfactionLevel}/5</p>
          <p className="date-logged">{run.date}</p>
          <button id="delete-button" onClick={deleteRun}>
            <i class="fas fa-trash"></i>
          </button>
        </div>
     ))}
    </>
  );
};

export default FilteredRuns;
