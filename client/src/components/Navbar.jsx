import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="add-button-div">
      {/* <nav id= "nav-button"> */}
        {/* <Link to="/">Home</Link> */}
        <Link classname="add-button" to = "/add">Add a run</Link>
      {/* </nav> */}
      
    </div>
  );
};

export default Navbar;