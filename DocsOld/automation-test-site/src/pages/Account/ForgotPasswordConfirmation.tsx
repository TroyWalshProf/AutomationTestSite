import * as React from "react";
import { Layout } from "../../components/shared/layout";

const ForgotPasswordConfirmation = (props: any) => {
  return (
    <Layout title="Forgot Password Confirmation">
      <hgroup className="title">
        <h1>@ViewBag.Title.</h1>
      </hgroup>
      <div>
        <p>Please check your email to reset your password.</p>
      </div>
    </Layout>
  );
};

export default ForgotPasswordConfirmation;
