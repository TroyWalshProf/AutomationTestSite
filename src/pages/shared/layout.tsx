import { Link } from 'gatsby';
import * as React from 'react';
import '../../../static/Content/bootstrap-theme.css';
import '../../../static/Content/bootstrap.css';
import '../../../static/Content/Site.css';
import './layout.css';
import { LoginForm } from './loginForm';

const Layout = (props: any) => (
    <html>
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{!!props.title ? props.title + " - " : ""}Magenic Automation Test Site</title>

            <link rel="icon" href="/Content/favicon.ico" />
        </head>
        <body>
            <div className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li id="homeButton">Html.ActionLink("Home", "Index", "Home")</li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Manage<b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li id="EmployeeButton">
                                        <Link to="/Employee">
                                            Employees
                                        </Link>
                                    </li>
                                    <li id="DepartmentsButton">Html.ActionLink("Departments", "Index", "Departments")</li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Automation<b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li id="AutomationButton">Html.ActionLink("Page Elements", "Index", "Automation")</li>
                                    <li id="SwaggerButton">Html.ActionLink("Swagger API", "", "Swagger")</li>
                                    <li id="iFrameButton">Html.ActionLink("iFrame","iFramePage","Automation")</li>
                                </ul>
                            </li>
                            <li className="dropdown" id="TrainingDropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Training<b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li id="iFrameButton">
                                        <a href="Training1/LoginPage.html">
                                            Training Page 1
                                        </a>
                                    </li>
                                    <li id="iFrameButton">
                                        <a href="Training2/LoginPage.html">
                                            Training Page 2
                                        </a>
                                    </li>
                                    <li id="iFrameButton">
                                        <a href="Training3/LoginPage.html">
                                            Training Page 3
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li id="ContactButton">Html.ActionLink("Contact", "Contact", "Home")</li>
                        </ul>
                        <LoginForm />
                    </div>
                </div>
            </div>
            <div className="container body-content">
                RenderBody()
                <hr />
                <footer>
                    <p>&copy; DateTime.Now.Year - Magenic Technologies</p>
                </footer>
            </div>
            RenderSection("scripts", required: false)
        </body>
    </html>

)

export { Layout };