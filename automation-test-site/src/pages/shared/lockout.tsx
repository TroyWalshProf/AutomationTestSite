import * as React from "react";
import { Layout } from "../../components/shared/layout";

const LockedOut = () => {
  return (
    <Layout title="Locked Out">
      <hgroup>
        <h1 className="text-danger">Locked out.</h1>
        <h2 className="text-danger">
          This account has been locked out, please try again later.
        </h2>
      </hgroup>
    </Layout>
  );
};

export default LockedOut;
