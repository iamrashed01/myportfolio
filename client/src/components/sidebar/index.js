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
          <NavLink to="/user-info">User Info</NavLink>
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
