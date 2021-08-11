import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import { useState } from "react";

export const Navbar = (props: { handleSidebarStatus }) => {
  const [collpased, setCollpased] = useState(false);

  const handleOnMenuClick = () => {
    setCollpased(!collpased);
    props.handleSidebarStatus(collpased);
  };

  return (
    <nav className="navbar navbar-expand navbar-light navbar-bg">
      <IconButton aria-label="menu" onClick={handleOnMenuClick}>
        <MenuIcon fontSize={"large"} />
      </IconButton>
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav navbar-align">
          <li>
            <IconButton>
              <NotificationsNoneIcon />
            </IconButton>
          </li>
          <li>
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <MailIcon />
              </Badge>
            </IconButton>
          </li>
          {/* <li className="nav-item dropdown">
            <a
              className="nav-icon dropdown-toggle d-inline-block d-sm-none"
              href="#"
              data-bs-toggle="dropdown"
            >
              <i className="align-middle" data-feather="settings"></i>
            </a>

            <a
              className="nav-link dropdown-toggle d-none d-sm-inline-block"
              href="#"
              data-bs-toggle="dropdown"
            >
              <img
                src="img/avatars/avatar.jpg"
                className="avatar img-fluid rounded me-1"
                alt="Charles Hall"
              />{" "}
              <span className="text-dark">Charles Hall</span>
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              <a className="dropdown-item" href="pages-profile.html">
                <i className="align-middle me-1" data-feather="user"></i>{" "}
                Profile
              </a>
              <a className="dropdown-item" href="#">
                <i className="align-middle me-1" data-feather="pie-chart"></i>{" "}
                Analytics
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="index.html">
                <i className="align-middle me-1" data-feather="settings"></i>{" "}
                Settings & Privacy
              </a>
              <a className="dropdown-item" href="#">
                <i className="align-middle me-1" data-feather="help-circle"></i>{" "}
                Help Center
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Log out
              </a>
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};
