import { Link } from "react-router-dom";
import "../css/CreateNav.css";

function CreateNav() {
  return (
    <div className="create-new">
        <Link id="add-button" to = "/add">New Run+</Link>
    </div>
  );
};

export default CreateNav;