import * as React from "react";
import { Link } from "gatsby";
import { LoginForm } from "./loginForm";
import PropTypes from "prop-types";
import "../../../static/Content/bootstrap-theme.css";
import "../../../static/Content/bootstrap.css";
import "../../../static/Content/Site.css";
import "./layout.css";

/**
 * Layout for the Magenic Automation Site pages.
 * Ported from Views/Shared/_Layout.cshtml
 *
 * TODO: Fix page title.
 * @param props React props. Children are required, and a page title is optional.
 * @returns A React element that wraps the children in a navigation bar and footer. 
 */
const Layout = (props: any) => {
  return (
    <React.Fragment>
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li id="homeButton">
                <a href="/">Home</a>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Manage<b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                  <li id="EmployeeButton">
                    <Link to="/employees">Employees</Link>
                  </li>
                  <li id="DepartmentsButton">
                    Html.ActionLink("Departments", "Index", "Departments")
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Automation<b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                  <li id="AutomationButton">
                    Html.ActionLink("Page Elements", "Index", "Automation")
                  </li>
                  <li id="SwaggerButton">
                    Html.ActionLink("Swagger API", "", "Swagger")
                  </li>
                  <li id="iFrameButton">
                    Html.ActionLink("iFrame","iFramePage","Automation")
                  </li>
                </ul>
              </li>
              <li className="dropdown" id="TrainingDropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Training<b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                  <li id="iFrameButton">
                    <a href="Training1/LoginPage.html">Training Page 1</a>
                  </li>
                  <li id="iFrameButton">
                    <a href="Training2/LoginPage.html">Training Page 2</a>
                  </li>
                  <li id="iFrameButton">
                    <a href="Training3/LoginPage.html">Training Page 3</a>
                  </li>
                </ul>
              </li>
              <li id="ContactButton">
                Html.ActionLink("Contact", "Contact", "Home")
              </li>
            </ul>
            {false ?? <LoginForm /> /*Commented out in legacy ASP application*/}
          </div>
        </div>
      </div>
      <div className="container body-content">
        {props.children}
        <hr />
        <footer>
          <p>&copy; {new Date().getFullYear()} - Magenic Technologies</p>
        </footer>
      </div>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

export { Layout };
