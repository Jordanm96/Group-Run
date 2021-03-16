import "./App.css";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services"; //This line is getting our api url
import axios from "axios";
import { useEffect, useState } from "react";
import HomeRuns from "./components/HomeRuns";
import RunData from "./components/RunData";
import Navbar from "./components/Navbar";
import NewRunForm from "./components/NewRunForm";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
    <div>
      <Route path="/">
        <Header />
      </Route>

      <Route exact path="/">
        <Navbar />
        <div className="home-containter">
          {runs.map((run) => (
            <HomeRuns key={run.id} run={run} setToggleFetch={setToggleFetch} />
          ))}
        </div>
      </Route>

      <Route path="/run/:id">
        <RunData runs={runs} />
      </Route>

      <Route exact path="/add">
        <h2 className="add-run-here">Add your run here!</h2>
        <NewRunForm runs={runs} setToggleFetch={setToggleFetch} />
      </Route>

      <Route path="/edit/:id">
        <h2 className="edit-run-here">Edit your run here!</h2>
        <NewRunForm runs={runs} setToggleFetch={setToggleFetch} />
      </Route>

      <Route exact path="/">
        <div className="footer">
          <Footer />
        </div>
      </Route>
    </div>
  );
}

export default App;
