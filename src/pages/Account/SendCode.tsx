import * as React from 'react';
import { Layout } from '../shared/layout';

const SendCode = (props: any) => {
    return (
        <Layout
            title="Send">
            <h2>ViewBag.Title.</h2>

            <h4>Send verification code</h4>
            <hr />
            <div className="row">
                <div className="col-md-8">
                    Select Two-Factor Authentication Provider:
                    Html.DropDownListFor(model = model.SelectedProvider, Model.Providers)
                    <input type="submit" value="Submit" className="btn btn-default" />
                </div>
            </div>
        </Layout>
    );
}

export default SendCode;
