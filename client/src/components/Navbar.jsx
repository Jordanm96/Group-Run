import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="create-new">
        <Link classname="add-button" to = "/add">+</Link>
    </div>
  );
};

export default Navbar;