import * as React from 'react';
import { Layout } from '../shared/layout';

const ChangePassword = (props: any) => {
    return (
        <Layout
            title="Change Password">
            <h2>ViewBag.Title.</h2>

            using (Html.BeginForm("ChangePassword", "Manage", FormMethod.Post, new class = "form-horizontal", role = "form" ))
            <h4>Change Password Form</h4>
            <hr />
            Html.ValidationSummary("", new class = "text-danger" )
            <div className="form-group">
                Html.LabelFor(m = m.OldPassword, newclass = "col-md-2 control-label" )
                <div className="col-md-10">
                    Html.PasswordFor(m = m.OldPassword, new class = "form-control" )
                </div>
            </div>
            <div className="form-group">
                Html.LabelFor(m = m.NewPassword, new class = "col-md-2 control-label" )
                <div className="col-md-10">
                    Html.PasswordFor(m = m.NewPassword, new class = "form-control" )
                </div>
            </div>
            <div className="form-group">
                Html.LabelFor(m = m.ConfirmPassword, new class = "col-md-2 control-label" )
                <div className="col-md-10">
                    Html.PasswordFor(m = m.ConfirmPassword, new class = "form-control" )
                </div>
            </div>
            <div className="form-group">
                <div className="col-md-offset-2 col-md-10">
                    <input type="submit" value="Change password" className="btn btn-default" />
                </div>
            </div>
        </Layout>
    );
}

export default ChangePassword; 