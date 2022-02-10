import * as React from "react";
import { Layout } from "../../components/shared/layout";

const ExternalLoginFailure = (props: any) => {
  return (
    <Layout title="Login Failure">
      <hgroup>
        <h2>ViewBag.Title.</h2>
        <h3 className="text-danger">Unsuccessful login with service.</h3>
      </hgroup>
    </Layout>
  );
};

export default ExternalLoginFailure;
