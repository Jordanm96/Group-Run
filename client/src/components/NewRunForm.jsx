import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";
// Import params here for the edit PUT request

function NewRunForm(props) {
    const [date, setDate] = useState("");
    const [runnerName, setRunnerName] = useState("");
    const [distance, setDistance] = useState("");
    const [time, setTime] = useState("");
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
        time,
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
          <input required id="distance" type="number" value={distance} onChange={(e) => setDistance(e.target.valueAsNumber)} />

          <label htmlFor="time">Run Time: </label>
          <input required id="time" type="number" value={time} onChange={(e) => setTime(e.target.valueAsNumber)} />

          <label htmlFor="caloriesBurned">Calories: </label>
          <input required id="caloriesBurned" type="number" value={caloriesBurned} onChange={(e) => setCaloriesBurned(e.target.valueAsNumber)} />

          {/* Will have to find a way for the satisfaction level to be converted to stars so they are logged in airtable */}
          <label htmlFor="satisfactionLevel">How satisfied were you? </label>
          <input required id="satisfactionLevel" type="rating" value={satisfactionLevel} onChange={(e) => setSatisfactionLevel(e.target.valueAsRating)} />

          <label htmlFor="additionalNotes">Notes (optional): </label>
          <input id="additionalNotes" type="text" value={additionalNotes} onChange={(e) => setAdditionalNotes(e.target.value)} />

          <button type="submit">Add run</button>
        </form>
      </div>
    );
  };

export default NewRunForm;
