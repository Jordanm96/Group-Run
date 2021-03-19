import { Route, Link } from "react-router-dom";
import { baseURL, config } from "./services"; //This line is getting our api url
import axios from "axios";
import { useEffect, useState } from "react";
import HomeRuns from "./components/HomeRuns";
import RunData from "./components/RunData";
import CreateNav from "./components/CreateNav";
import NewRunForm from "./components/NewRunForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [runs, setRuns] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    const getRuns = async () => {
      const resp = await axios.get(baseURL, config);
      const records = resp.data.records.sort(
        (a, b) => new Date(b.fields.date) - new Date(a.fields.date)
      );
      setRuns(records);
    };
    getRuns();
  }, [toggleFetch]);

  return (
    <div className="body">
      <Route path="/">
        <Header />
      </Route>

      <Route exact path="/">
        <CreateNav />
        <div className="home-container">
          <div className="mapped-container">
            {runs.map((run) => (
              <HomeRuns
                key={run.id}
                run={run}
                setToggleFetch={setToggleFetch}
              />
            ))}
          </div>
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
        <h2 className="edit-run-here">Edit:</h2>
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
