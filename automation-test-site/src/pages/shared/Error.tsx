import * as React from "react";
import { Layout } from "../../components/shared/layout";

const Error = () => {
  return (
    <Layout title="Error">
      <h1 className="text-danger">Error.</h1>
      <h2 className="text-danger">
        An error occurred while processing your request.
      </h2>
    </Layout>
  );
};

export default Error;
