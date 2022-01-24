import * as React from "react";
import { Layout } from "../../components/shared/layout";

const Index = () => {
  return (
    <Layout title="Homepage">
      <div className="jumbotron">
        <img src="~/Content/Images/Magenic-Logo.png" />
        <h2 className="text-center">Automation Test Site</h2>
      </div>
    </Layout>
  );
};

export default Index;
