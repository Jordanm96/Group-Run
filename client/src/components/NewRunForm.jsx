import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { baseURL, config } from "../services";
import "../css/NewRunForm.css";
// Import params here for the edit PUT request

function NewRunForm(props) {
  // const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [date, setDate] = useState("");
  const [runnerName, setRunnerName] = useState("");
  const [distance, setDistance] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [caloriesBurned, setCaloriesBurned] = useState("");
  const [satisfactionLevel, setSatisfactionLevel] = useState();
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
        <label className="user" htmlFor="runnerName">
          User:{" "}
          <input
            required
            id="runnerName"
            type="text"
            value={runnerName}
            placeholder="NAME"
            onChange={(e) => setRunnerName(e.target.value)}
            onInput={(e) =>
              (e.target.value = ("" + e.target.value).toUpperCase())
            }
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
            min="0"
            placeholder= "0"
            value={distance}
            onChange={(e) => setDistance(e.target.valueAsNumber)}
          />{" "}
          mile(s)
        </label>

      <div className = "duration-grid">
        <p id="time">Duration:</p>
        <label className="hours" htmlFor="hours">
          Hrs:{" "}
          <input
            id="hours"
            className="duration"
            type="number"
            min="0"
            placeholder= "0"
            value={hours}
            onChange={(e) => setHours(e.target.valueAsNumber)}
          />
        </label>
        <label className="minutes" htmlFor="minutes">
          Min:{" "}
          <input
            id="minutes"
            className="duration"
            type="number"
            min="0"
            max="59"
            placeholder= "0"
            value={minutes}
            onChange={(e) => setMinutes(e.target.valueAsNumber)}
          />
        </label>
        <label className="seconds" htmlFor="seconds">
          Sec:{" "}
          <input
            id="seconds"
            className="duration"
            type="number"
            min="0"
            max="59"
            placeholder= "0"
            value={seconds}
            onChange={(e) => setSeconds(e.target.valueAsNumber)}
          />
        </label>
        </div>
        <label className="calories-burned" htmlFor="caloriesBurned">
          Calories:{" "}
          <input
            required
            id="caloriesBurned"
            type="number"
            min="0"
            placeholder= "0"
            value={caloriesBurned}
            onChange={(e) => setCaloriesBurned(e.target.valueAsNumber)}
          />
        </label>
        {/* <div className = "emojis">
          <p>☠️</p>
          <p>😵</p>
          <p>😤</p>
          <p>😁</p>
          <p>🤩</p>
        </div> */}
        {/* Will have to find a way for the satisfaction level to be converted to stars so they are logged in airtable */}
        {/* create a drop down method here for the input 1-5 */}
        <label className="satisfaction-level" htmlFor="satisfactionLevel">
          How are you feeling?{" "}</label>
        <input
          className = "range-bar"
            type="range"
            // value="{satisfactionLevel}"
            min="1"
            max="5"
            onChange={(e) => setSatisfactionLevel(e.target.valueAsNumber)}
          />
        <div className = "emojis">
          <p>💀</p>
          <p>🥵</p>
          <p>😤</p>
          <p>😎</p>
          <p>🤩</p>
        </div>
          {/* <select> */}
          {/* <option type = "number" value="{satisfactionLevel}" onChange={(e) => setSatisfactionLevel(e.target.value)}>🤩</option> */}
          {/* <option type = "number" value="{satisfactionLevel}" onChange={(e) => setSatisfactionLevel(e.target.valueAsNumber)}>5</option>
          <option type = "number" value="{satisfactionLevel}" onChange={(e) => setSatisfactionLevel(e.target.valueAsNumber)}>4</option>
          <option type = "number" value="{satisfactionLevel}" onChange={(e) => setSatisfactionLevel(e.target.valueAsNumber)}>3</option>
          <option type = "number" value="{satisfactionLevel}" onChange={(e) => setSatisfactionLevel(e.target.valueAsNumber)}>2</option>
          <option type = "number" value="{satisfactionLevel}" onChange={(e) => setSatisfactionLevel(e.target.valueAsNumber)}>1</option>
        </select> */}
        

        <label className="additional-notes" htmlFor="additionalNotes">
          Notes (optional):{" "}
          <textarea
            id="additionalNotes"
            type="text"
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
          />
        </label>

        <div className="form-buttons">
          <button className="form-buttons" id="add=button" type="submit">
            Add
          </button>
          <Link to="/">
            <button className="form-buttons" id="cancel-button">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
}

export default NewRunForm;
