import { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

class Sidebar extends Component {
  render() {
    return (
      <aside className="sidebars">
        <Link to="/" className="linkdecor">
          <FaHome /> Home
        </Link>
        <Link to="/contact" className="linkdecor">
          Contact Us
        </Link>
      </aside>
    );
  }
}
export default Sidebar;
