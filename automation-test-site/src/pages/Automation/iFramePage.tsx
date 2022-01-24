import * as React from "react";
import { Layout } from "../../components/shared/layout";

const iFramePage = (props: any) => {
  return (
    <Layout>
      <div className="container">
        <h2>iFrame Page</h2>
        <br />
        <div style={{ border: "5px solid black;" }}>
          <div className="row-height">
            <iframe
              id="mageniciFrame"
              src="https://magenic.com"
              className="col-lg-12 inside inside-full-height"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default iFramePage;
