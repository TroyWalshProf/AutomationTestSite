﻿import * as React from "react";
import { Layout } from "../../components/shared/layout";

const Register = (props: any) => {
  return (
    <Layout title="Register">
      <h2>@ViewBag.Title.</h2>
      <h4>Create a new account.</h4>
      <hr />
      Html.ValidationSummary("", new class = "text-danger" )
      <div className="form-group">
        Html.LabelFor(m m.Email, new class = "col-md-2 control-label" )
        <div className="col-md-10">
          Html.TextBoxFor(m m.Email, new class = "form-control" )
        </div>
      </div>
      <div className="form-group">
        Html.LabelFor(m m.Password, new class = "col-md-2 control-label" )
        <div className="col-md-10">
          Html.PasswordFor(m m.Password, new class = "form-control" )
        </div>
      </div>
      <div className="form-group">
        Html.LabelFor(m m.ConfirmPassword, new class = "col-md-2 control-label"
        )
        <div className="col-md-10">
          Html.PasswordFor(m m.ConfirmPassword, new class = "form-control" )
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-offset-2 col-md-10">
          <input type="submit" className="btn btn-default" value="Register" />
        </div>
      </div>
    </Layout>
  );
};

export default Register;
