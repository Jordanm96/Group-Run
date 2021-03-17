import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav id= "nav-button">
        {/* <Link to="/">Home</Link> */}
        <Link to = "/add">Add a run</Link>
        {/* Maybe have a link to the edit component here */}
      </nav>
      
    </div>
  );
};

export default Navbar;