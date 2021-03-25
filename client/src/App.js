import { Route } from "react-router-dom";
import { baseURL, config } from "./services"; 
import axios from "axios";
import { useEffect, useState } from "react";
import HomeRuns from "./components/HomeRuns";
import RunData from "./components/RunData";
import NewRunForm from "./components/NewRunForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import FilteredRuns from "./components/FilteredRuns";
import "./App.css";

function App() {
  const [runs, setRuns] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);
  // const [userInput, setUserInput] = useState("");
  
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
      {/*
      <form className="search-form">
       <input
        className="search-input"
        placeholder="Search"
        type="text"
        onChange={(e) => setUserInput(e.target.value)}
          />
          </form> */}
        <div className="home-container">
          <div className="mapped-container">
            {/* {userInput ? (
              runs.map((run) => (
              <FilteredRuns runs={runs} run={run} userInput={userInput}/>) )): ( */}
              
            {runs.map((run) => (
              <HomeRuns
                key={run.id}
                run={run}
                setToggleFetch={setToggleFetch}
              />
            ))}
              )}
          </div>
        </div>
        <div className="footer">
          <Footer />
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
    </div>
  );
}

export default App;
