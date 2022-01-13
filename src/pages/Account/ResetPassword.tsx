import * as React from 'react';
import { Layout } from '../shared/layout';

const ResetPassword = (props: any) => {
    return (
        <Layout
            title="Reset password">
            <h2>@ViewBag.Title.</h2>

            <h4>Reset your password.</h4>
            <hr />
            Html.ValidationSummary("", new class = "text-danger")
    Html.HiddenFor(model = model.Code)
            <div className="form-group">
        Html.LabelFor(m = m.Email, new class = "col-md-2 control-label")
                <div className="col-md-10">
            Html.TextBoxFor(m = m.Email, new class = "form-control" )
                </div>
            </div>
            <div className="form-group">
        Html.LabelFor(m  m.Password, new  class = "col-md-2 control-label" )
                <div className="col-md-10">
            @Html.PasswordFor(m m.Password, new class = "form-control" )
                </div>
            </div>
            <div className="form-group">
        @Html.LabelFor(m = m.ConfirmPassword, new class = "col-md-2 control-label" )
                <div className="col-md-10">
            @Html.PasswordFor(m m.ConfirmPassword, newclass = "form-control")
                </div>
            </div>
            <div className="form-group">
                <div className="col-md-offset-2 col-md-10">
                    <input type="submit" className="btn btn-default" value="Reset" />
                </div>
            </div>
        </Layout>
    );
}

export default ResetPassword;