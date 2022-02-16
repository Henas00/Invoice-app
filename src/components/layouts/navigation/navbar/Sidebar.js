import "./sidebar.css";
import {
  MdNightlight,
  MdLightMode
} from "react-icons/md";
const Sidebar = (props) => {

  return (
    <nav className="sidebar">
      <img className="sidebar-logo" src="/logo.png" alt="" />
      <div className="sidebar-toggle-btn" onClick={props.handleClick}>
        {props.theme === "dark" ? <  MdLightMode/> : <MdNightlight /> }
        </div>
        <div className="sidebar-profile">
          <img
            className="sidebar-avatar"
            src="https://images.unsplash.com/photo-1620293023555-272e1a661b26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=576&q=80"
            alt=""
          />
        </div>
    </nav>
  );
};

export default Sidebar;
