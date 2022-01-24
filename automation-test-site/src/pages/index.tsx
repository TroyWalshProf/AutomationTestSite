import * as React from "react";
import { Layout } from "../components/shared/layout";

// markup
const IndexPage = () => {
  return (
    <Layout title="Home Page">
      <div className="jumbotron">
        <img
          src="/Content/Images/Magenic-Logo.png"
          style={{ display: "block", margin: "auto" }}
        />
        <h2 className="text-center">Automation Test Site</h2>
      </div>
    </Layout>
  );
};

export default IndexPage;
