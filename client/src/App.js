import "./App.css";
import { Link, Route } from "react-router-dom";
import { baseURL, config } from "./services"; //This line is getting our api url
import axios from "axios";
import { useEffect, useState } from "react";
import Run from "./components/Run";
import RunData from "./components/RunData";

function App() {
  const [runs, setRuns] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    const getRuns = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data.records);
      setRuns(resp.data.records);
    };
    getRuns();
  }, []);

  return (
    <div className="App">

      {/* <Header component /> */}

      <Route exact path="/">
        <h1>home</h1>
        <p>Mapped out runs will go here</p>
        <div className="home-containter">
          {runs.map((run) => (
            <Run run = {run} />
          ))}
        </div>
      </Route>

      <Route path="/run/:id" >
        <h1>This is where the details for the person's run will go and</h1>
        <RunData runs={runs}/>
        {/* <h2>Edit button go here?</h2> */}
      </Route>

      <Route path="/add">
        <h2>Add Run FORM component goes here</h2>
      </Route>

      <Route path="/edit:id">
        <h2>Edit run component goes here</h2>1
      </Route>

      {/* <Footer component/> */}
      
    </div>
  );
}

export default App;
