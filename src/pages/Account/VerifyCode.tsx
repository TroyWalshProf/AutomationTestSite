import * as React from 'react';
import { Layout } from '../shared/layout';

const VerifyCode = (props: any) => {
    return (
        <Layout
            title="Verify">
            <h2>ViewBag.Title.</h2>

            <h4>Enter verification code</h4>
            <hr />
            Html.ValidationSummary("", new class = "text-danger" )
            <div className="form-group">
                Html.LabelFor(m = m.Code, new class = "col-md-2 control-label" )
                <div className="col-md-10">
                    Html.TextBoxFor(m = m.Code, new class = "form-control" )
                </div>
            </div>
            <div className="form-group">
                <div className="col-md-offset-2 col-md-10">
                    <div className="checkbox">
                        Html.CheckBoxFor(m = m.RememberBrowser)
                        Html.LabelFor(m = m.RememberBrowser)
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="col-md-offset-2 col-md-10">
                    <input type="submit" className="btn btn-default" value="Submit" />
                </div>
            </div>

        </Layout>
    );
}

export default VerifyCode;