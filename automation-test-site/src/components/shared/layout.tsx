import * as React from "react";
import { Link } from "gatsby";
import { LoginForm } from "./loginForm";
import PropTypes from "prop-types";
import "../../../static/Content/bootstrap-theme.css";
import "../../../static/Content/bootstrap.css";
import "../../../static/Content/Site.css";
import "./layout.css";
import { ApplicationContext } from "../../hooks/context-hooks";
import { Helmet } from "react-helmet";

/**
 * Layout for the Magenic Automation Site pages.
 * Ported from Views/Shared/_Layout.cshtml
 *
 * TODO: Fix page title.
 * TODO: Make static path prefixing context aware.
 * @param props React props. Children are required, and a page title is optional.
 * @returns A React element that wraps the children in a navigation bar and footer.
 */
const Layout = (props: any) => {
  return (
    <ApplicationContext>
      <Helmet>
        <title>
          {!!props.title ? props.title + " - " : ""}Magenic Automation Test Site
        </title>
      </Helmet>
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
                <Link to="/">Home</Link>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Manage<b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                  <li id="EmployeeButton">
                    <Link to="/Employees">Employees</Link>
                  </li>
                  <li id="DepartmentsButton">
                    <Link to="/Departments">Departments</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Automation<b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                  <li id="AutomationButton">
                    <Link to="/Automation/">Page Elements</Link>
                  </li>
                  <li id="SwaggerButton">
                    <Link to="/Swagger/">Swagger API</Link>
                  </li>
                  <li id="iFrameButton">
                    <Link to="/Automation/iFramePage">iFrame</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown" id="TrainingDropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Training<b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                  <li id="iFrameButton">
                    <a href="/AutomationTestSite/Training1/LoginPage.html">
                      Training Page 1
                    </a>
                  </li>
                  <li id="iFrameButton">
                    <a href="/AutomationTestSite/Training2/LoginPage.html">
                      Training Page 2
                    </a>
                  </li>
                  <li id="iFrameButton">
                    <a href="/AutomationTestSite/Training3/LoginPage.html">
                      Training Page 3
                    </a>
                  </li>
                </ul>
              </li>
              <li id="ContactButton">
                <Link to="/Home/Contact">Contact</Link>
              </li>
            </ul>
            {false ?? <LoginForm /> /*Commented out in legacy ASP application*/}
          </div>
        </div>
      </div>
      {!!props.dangerouslySetInnerHTML ? (
        <div
          className="container body-content"
          dangerouslySetInnerHTML={{
            __html:
              props.dangerouslySetInnerHTML.__html +
              /* Add footer to the end */ `
            <hr />
            <footer>
              <p>&copy; {new Date().getFullYear()} - Magenic Technologies</p>
            </footer>         
          `,
          }}
        />
      ) : (
        <div className="container body-content">
          {props.children}
          <hr />
          <footer>
            <p>&copy; {new Date().getFullYear()} - Magenic Technologies</p>
          </footer>
        </div>
      )}
    </ApplicationContext>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string,
  dangerouslySetInnerHTML: PropTypes.object,
};

export { Layout };
