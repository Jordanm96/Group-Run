import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";
// Import params here for the edit PUT request

function NewRunForm(props) {
  // I want the useState value for date to be set to whatever day it currently is
    const [date, setDate] = useState("");
    const [runnerName, setRunnerName] = useState("");
    const [distance, setDistance] = useState("");
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");
    const [caloriesBurned, setCaloriesBurned] = useState("");
    const [satisfactionLevel, setSatisfactionLevel] = useState("");
    const [additionalNotes, setAdditionalNotes] = useState("");
    const history = useHistory();

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
      await axios.post(baseURL, { fields: newRunEntry }, config);
      props.setToggleFetch((curr) => !curr);
      history.push("/");
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Add your run here!</h2>
          
          <label htmlFor="runnerName">User: </label>
          <input required id="runnerName" type="text" value={runnerName} onChange={(e) => setRunnerName(e.target.value)} />
          <label htmlFor="date">Date: </label>
          <input required id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <label htmlFor="distance">Distance: </label>
          <input required id="distance" type="number" placeholder = "miles" value={distance} onChange={(e) => setDistance(e.target.valueAsNumber)} />
          <label htmlFor="hours">Hours: </label>
          <input required id="hours" type="number" value={hours} onChange={(e) => setHours(e.target.valueAsNumber)}/>
          <label htmlFor="minutes">Min: </label>
          <input required id = "minutes" type="number" value={minutes} onChange={(e) => setMinutes(e.target.valueAsNumber)}/>
          <label htmlFor="seconds">Sec: </label>
          <input required id = "seconds" type="number" value={seconds} onChange={(e) => setSeconds(e.target.valueAsNumber)}/>

          <label htmlFor="caloriesBurned">Calories: </label>
          <input required id="caloriesBurned" type="number" value={caloriesBurned} onChange={(e) => setCaloriesBurned(e.target.valueAsNumber)} />
        
          {/* Will have to find a way for the satisfaction level to be converted to stars so they are logged in airtable */}
          <label htmlFor="satisfactionLevel">How satisfied were you? </label>
          <input required id="satisfactionLevel" type="number" placeholder = "1-5" value={satisfactionLevel} onChange={(e) => setSatisfactionLevel(e.target.valueAsNumber)} />

          <label htmlFor="additionalNotes">Notes (optional): </label>
          <input id="additionalNotes" type="text" value={additionalNotes} onChange={(e) => setAdditionalNotes(e.target.value)} />

          <button type="submit">Add run</button>
        </form>
      </div>
    );
  };

export default NewRunForm;
