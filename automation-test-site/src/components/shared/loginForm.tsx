import React from "react";

const LoginForm = () => {
  let loggedIn = false;

  if (loggedIn) {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          Html.ActionLink("Hello " + User.Identity.GetUserName() + "!", "Index",
          "Manage", routeValues: null, htmlAttributes: new title = "Manage" )
        </li>
        <li>
          <a href="javascript:document.getElementById('logoutForm').submit()">
            Log off
          </a>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li id="RegisterButton">
          Html.ActionLink("Register", "Register", "Account", routeValues: null,
          htmlAttributes: new id = "registerLink" )
        </li>
        <li id="LogInButton">
          Html.ActionLink("Log in", "Login", "Account", routeValues: null,
          htmlAttributes: new id = "loginLink" )
        </li>
      </ul>
    );
  }
};

export { LoginForm };
