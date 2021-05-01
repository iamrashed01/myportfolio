import { NavLink } from "react-router-dom";

const Menus = () => {
  return (
    <div className="menusArea">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/project">Project</NavLink>
        </li>
        <li>
          <NavLink to="/skill">Skil</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menus;
