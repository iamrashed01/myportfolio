import { NavLink } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ListGroup>
        <ListGroupItem>
          <NavLink to="/admin">Dashboard</NavLink>
        </ListGroupItem>
        <ListGroupItem>
          <NavLink to="/admin/user-info">User Info</NavLink>
        </ListGroupItem>
        <ListGroupItem>
          <NavLink to="/admin/create-project">Create Project</NavLink>
        </ListGroupItem>
        <ListGroupItem>
          <NavLink to="/admin/projects">Projects</NavLink>
        </ListGroupItem>
        <ListGroupItem className="end">
          <NavLink exact to="/">
            Preview
          </NavLink>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
