import * as React from "react";
import { Layout } from "../../components/shared/layout";

const ResetPasswordConfirmation = (props: any) => {
  return (
    <Layout title="Reset password confirmation">
      <hgroup className="title">
        <h1>ViewBag.Title.</h1>
      </hgroup>
      <div>
        <p>
          Your password has been reset. Please @Html.ActionLink("click here to
          log in", "Login", "Account", routeValues: null, htmlAttributes: new id
          = "loginLink")
        </p>
      </div>
    </Layout>
  );
};

export default ResetPasswordConfirmation;
