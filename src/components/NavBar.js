import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const location = useLocation();

  let btnColor1 = "";
  let btnColor2 = "";
  let btnColor3 = "";
  let btnColor4 = "";
  let btnColor5 = "";
  let btnColor6 = "";
  let btnColor7 = "";

  switch (location.pathname) {
    case "/":
      btnColor1 = "rgb(63 176 172 / 40%)";
      break;
    case "/education":
      btnColor2 = "rgb(63 176 172 / 40%)";
      break;
    case "/work":
      btnColor3 = "rgb(63 176 172 / 40%)";
      break;
    case "/seminars":
      btnColor4 = "rgb(63 176 172 / 40%)";
      break;
    case "/projects":
      btnColor5 = "rgb(63 176 172 / 40%)";
      break;
    case "/other":
      btnColor6 = "rgb(63 176 172 / 40%)";
      break;
    case "/skills":
      btnColor7 = "rgb(63 176 172 / 40%)";
      break;
    default:
      break;
  }

  return (
    <div className="navbar-container">
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaBars onClick={showSidebar} value={{ color: "#000000" }} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <div className="nav-menu-items" onClick={showSidebar}>
            <span className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <IoClose />
              </Link>
            </span>

            <div className="navbar-btns">
              <span
                style={{ backgroundColor: btnColor1 }}
                className="navbar-button"
              >
                <Link className="aboutme-btn" to="/">
                  HOME
                </Link>
              </span>
              <span
                style={{ backgroundColor: btnColor2 }}
                className="navbar-button"
              >
                <Link className="education-btn" to="/education">
                  EDUCATION
                </Link>
              </span>
              <span
                style={{ backgroundColor: btnColor3 }}
                className="navbar-button"
              >
                <Link className="work-btn" to="/work">
                  WORK
                </Link>
              </span>
              <span
                style={{ backgroundColor: btnColor4 }}
                className="navbar-button"
              >
                <Link className="seminar-btn" to="/seminars">
                  SEMINARS
                </Link>
              </span>
              <span
                style={{ backgroundColor: btnColor5 }}
                className="navbar-button"
              >
                <Link className="project-btn" to="/projects">
                  PROJECTS
                </Link>
              </span>
              <span
                style={{ backgroundColor: btnColor6 }}
                className="navbar-button"
              >
                <Link className="language-btn" to="/other">
                  OTHER
                </Link>
              </span>
              <span
                style={{ backgroundColor: btnColor7 }}
                className="navbar-button"
              >
                <Link className="skills-btn" to="/skills">
                  SKILLS
                </Link>
              </span>
            </div>
          </div>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
