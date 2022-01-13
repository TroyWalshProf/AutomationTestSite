import * as React from 'react';
import { Layout } from '../shared/layout';

const ExternalLoginConfirmation = (props: any) => {
    return (
        <Layout
            title="ExternalLoginConfirmation">
            <h2>ViewBag.Title.</h2>
            <h3>Associate your ViewBag.LoginProvider account.</h3>

            <h4>Association Form</h4>
            <hr />
            Html.ValidationSummary(true, "", new class = "text-danger" )
            <p className="text-info">
                You've successfully authenticated with <strong>@ViewBag.LoginProvider</strong>.
                Please enter a user name for this site below and click the Register button to finish
                logging in.
            </p>
            <div className="form-group">
                @Html.LabelFor(m  m.Email, new class = "col-md-2 control-label" )
                <div className="col-md-10">
                    @Html.TextBoxFor(m  m.Email, new class = "form-control" )
                    @Html.ValidationMessageFor(m  m.Email, "", new class = "text-danger" )
                </div>
            </div>
            <div className="form-group">
                <div className="col-md-offset-2 col-md-10">
                    <input type="submit" className="btn btn-default" value="Register" />
                </div>
            </div>
        </Layout>
    );
}

export default ExternalLoginConfirmation; 
