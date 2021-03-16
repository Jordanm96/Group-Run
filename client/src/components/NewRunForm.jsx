import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { baseURL, config } from "../services";
// Import params here for the edit PUT request

function NewRunForm(props) {
  // I want the useState value for date to be set to whatever day it currently is
  const [date, setDate] = useState("");
  const [runnerName, setRunnerName] = useState("");
  const [distance, setDistance] = useState("");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState("");
  const [satisfactionLevel, setSatisfactionLevel] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const history = useHistory();
  const params = useParams();

  useEffect(() => {

    if (params.id && props.runs.length > 0) {
      const run = props.runs.find((run) => run.id === params.id);
      if (run) setDate(run.fields.date);
      setRunnerName(run.fields.runnerName);
      setDistance(run.fields.distance);
      setHours(run.fields.hours);
      setMinutes(run.fields.minutes);
      setSeconds(run.fields.seconds);
      setCaloriesBurned(run.fields.caloriesBurned);
      setSatisfactionLevel(run.fields.satisfactionLevel);
      setAdditionalNotes(run.fields.additionalNotes);
    }
  }, [props.runs, params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRunEntry = {
      runnerName,
      date,
      distance,
      hours,
      minutes,
      seconds,
      caloriesBurned,
      satisfactionLevel,
      additionalNotes,
    };
    if (!params.id) {
      await axios.post(baseURL, { fields: newRunEntry }, config);
    } else {
      const editURL = `${baseURL}/${params.id}`;
      await axios.put(editURL, { fields: newRunEntry }, config);
    }
    props.setToggleFetch((curr) => !curr);
    history.push("/");
  };

  return (
        <form onSubmit={handleSubmit}>
      <div className="form-container">

      <h2 className="add-run-here">Add your run here!</h2>
      {/* <h2 className="add-run-here">Edit your run here!</h2> */}
        <label className="user" htmlFor="runnerName">
          User:{" "}
          <input
            required
            id="runnerName"
            type="text"
            value={runnerName}
            onChange={(e) => setRunnerName(e.target.value)}
          />
        </label>
        <label className="date" htmlFor="date">
          Date:{" "}
          <input
            required
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />{" "}
        </label>
        <label className="distance" htmlFor="distance">
          Distance:{" "}
          <input
            required
            id="distance"
            type="number"
            placeholder="miles"
            value={distance}
            onChange={(e) => setDistance(e.target.valueAsNumber)}
          />
        </label>
          <p id="time">Time</p>
        <label className="hours" htmlFor="hours">
          Hours:{" "}
          <input
            id="hours"
            type="number"
            value={hours}
            onChange={(e) => setHours(e.target.valueAsNumber)}
          />
        </label>

        <label className="minutes" htmlFor="minutes">
          Min:{" "}
          <input
            id="minutes"
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(e.target.valueAsNumber)}
          />
        </label>

        <label className="seconds" htmlFor="seconds">
          Sec:{" "}
          <input
            id="seconds"
            type="number"
            value={seconds}
            onChange={(e) => setSeconds(e.target.valueAsNumber)}
          />
        </label>

        <label className="calories-burned" htmlFor="caloriesBurned">
          Calories:{" "}
          <input
            required
            id="caloriesBurned"
            type="number"
            value={caloriesBurned}
            onChange={(e) => setCaloriesBurned(e.target.valueAsNumber)}
          />
        </label>

        {/* Will have to find a way for the satisfaction level to be converted to stars so they are logged in airtable */}
        <label className="satisfaction-level" htmlFor="satisfactionLevel">
          How satisfied were you?{" "}
          <input
            required
            id="satisfactionLevel"
            type="number"
            placeholder="1-5"
            value={satisfactionLevel}
            onChange={(e) => setSatisfactionLevel(e.target.valueAsNumber)}
          />
        </label>

        <label className="additional-notes" htmlFor="additionalNotes">
          Notes (optional):{" "}
          <input
            id="additionalNotes"
            type="text"
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
          />
        </label>

        <div className = "form-buttons">
        <button id="add=button" type="submit">Add</button>
        <Link to="/">
          <button id="cancel-button">Cancel</button>
        </Link>
        </div>

      </div>
    </form>
  );
}

export default NewRunForm;
