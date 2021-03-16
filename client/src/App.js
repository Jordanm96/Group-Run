import "./App.css";
import { Route, Link } from "react-router-dom";
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
    <div className="App">
      <Route path="/">
        {/* Set to this path because I want the header to be on every page */}
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
        {/* <h2>Edit button go here?</h2> */}
      </Route>

      <Route exact path="/add">
        <h2>Add your run here!</h2>
        <NewRunForm runs={runs} setToggleFetch={setToggleFetch} />
        <Link to = "/">
        <button>Cancel Entry</button>
        </Link>
        

      </Route>

      <Route path="/edit/:id">
        <h2>Edit page</h2>
        <NewRunForm runs={runs} setToggleFetch={setToggleFetch} />
      </Route>

      <Footer />
      {/* <Footer component/> */}
    </div>
  );
}

export default App;
