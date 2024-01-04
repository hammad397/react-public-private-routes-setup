import { Link, NavLink, useNavigate } from "react-router-dom";
import menuList from "../../data/menuList";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <aside className="sidebar-wrapper">
      <ul>
        {menuList.map(({ id, menu }) => (
          <li key={id}>
            <NavLink
              className={({ isActive }) => (isActive ? "active-menu" : "")}
              to={`/${menu}`}
            >
              <span className="text-capitalize">{menu}</span>
            </NavLink>
          </li>
        ))}
        <li onClick={handleLogout}>
          <Link>Logout</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
