import { Layout } from "../shared/layout"

const SetPassword = (props: any) => {
    return (
        <Layout
            title="Create Password">
            <h2>ViewBag.Title.</h2>
            <p className="text-info">
                You do not have a local username/password for this site. Add a local
                account so you can log in without an external login.
            </p>

            <h4>Create Local Login</h4>
            <hr />
            Html.ValidationSummary("", new class = "text-danger" )
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
                    <input type="submit" value="Set password" className="btn btn-default" />
                </div>
            </div>
        </Layout>
    )
}

export default SetPassword;