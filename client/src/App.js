import "./App.css";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services"; //This line is getting our api url
import axios from "axios";
import { useEffect, useState } from "react";
import HomeRuns from "./components/HomeRuns";
import RunData from "./components/RunData";
import Navbar from "./components/Navbar";
import NewRunForm from "./components/NewRunForm";

function App() {
  const [runs, setRuns] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    const getRuns = async () => {
      const resp = await axios.get(baseURL, config);
      setRuns(resp.data.records);
    };
    getRuns();
  }, [toggleFetch]);

  return (
    <div className="App">
      {/* <Header component /> */}
      <Route path="/">
      <Navbar />

      </Route>

      <Route exact path="/">
        {/* <Navbar /> */}
        <h1>Group Run!// The Track// Track and Yield</h1>

        <div className="home-containter">
          {runs.map((run) => (
            <HomeRuns key = {run.id} run={run} />
          ))}
        </div>
      </Route>

      <Route path="/run/:id">
        <RunData runs={runs} />
        {/* <h2>Edit button go here?</h2> */}
      </Route>

      <Route path="/add">
        <NewRunForm runs={runs} setToggleFetch={setToggleFetch} />
      </Route>

      <Route path="/edit:id">
        <h2>Edit run component goes here</h2>1
      </Route>

      {/* <Footer component/> */}
    </div>
  );
}

export default App;
