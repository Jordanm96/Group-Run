import { Link } from "react-router-dom";
import "../css/CreateNav.css";

function CreateNav() {
  return (
    <div className="create-new">
        <Link classname="add-button" to = "/add">+</Link>
    </div>
  );
};

export default CreateNav;