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
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [caloriesBurned, setCaloriesBurned] = useState("");
  const [satisfactionLevel, setSatisfactionLevel] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (params.id && props.runs.length > 0) {
      const run = props.runs.find((run) => run.id === params.id);
      if (run)
      setDate(run.fields.date);
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
    // potential put request
    if (!params.id) {
      await axios.post(baseURL, { fields: newRunEntry }, config);
    } else {
      const editURL = `${baseURL}/${params.id}`;
      await axios.put(editURL, { fields: newRunEntry }, config);
    }
    // await axios.post(baseURL, { fields: newRunEntry }, config);
    props.setToggleFetch((curr) => !curr);
    history.push("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="runnerName">User: </label>
        <input
          required
          id="runnerName"
          type="text"
          value={runnerName}
          onChange={(e) => setRunnerName(e.target.value)}
        />
        <label htmlFor="date">Date: </label>
        <input
          required
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="distance">Distance: </label>
        <input
          required
          id="distance"
          type="number"
          placeholder="miles"
          value={distance}
          onChange={(e) => setDistance(e.target.valueAsNumber)}
        />
        <label htmlFor="hours">Hours: </label>
        <input
          id="hours"
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.valueAsNumber)}
        />
        <label htmlFor="minutes">Min: </label>
        <input
          id="minutes"
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(e.target.valueAsNumber)}
        />
        <label htmlFor="seconds">Sec: </label>
        <input
          id="seconds"
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(e.target.valueAsNumber)}
        />
        <label htmlFor="caloriesBurned">Calories: </label>
        <input
          required
          id="caloriesBurned"
          type="number"
          value={caloriesBurned}
          onChange={(e) => setCaloriesBurned(e.target.valueAsNumber)}
        />
        {/* Will have to find a way for the satisfaction level to be converted to stars so they are logged in airtable */}
        <label htmlFor="satisfactionLevel">How satisfied were you? </label>
        <input
          required
          id="satisfactionLevel"
          type="number"
          placeholder="1-5"
          value={satisfactionLevel}
          onChange={(e) => setSatisfactionLevel(e.target.valueAsNumber)}
        />
        <label htmlFor="additionalNotes">Notes (optional): </label>
        <input
          id="additionalNotes"
          type="text"
          value={additionalNotes}
          onChange={(e) => setAdditionalNotes(e.target.value)}
        />
        <button type="submit">Add run</button>
        <Link to = "/">
        <button>Cancel Entry</button>
        </Link>
      </form>
    </div>
  );
}

export default NewRunForm;
