import * as React from "react";
import { Layout } from "../../components/shared/layout";

const AddPhoneNumber = (props: any) => {
  return (
    <Layout>
      <h2>ViewBag.Title.</h2>
      <h4>Add a phone number</h4>
      <hr />
      Html.ValidationSummary("", new class = "text-danger")
      <div className="form-group">
        Html.LabelFor(m = m.Number, new class = "col-md-2 control-label"
        <div className="col-md-10">
          Html.TextBoxFor(m = m.Number, new class = "form-control" )
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-offset-2 col-md-10">
          <input type="submit" className="btn btn-default" value="Submit" />
        </div>
      </div>
    </Layout>
  );
};

export default AddPhoneNumber;
