import * as React from 'react';
import { Layout } from '../shared/layout';

const ExternalLoginsListPartial = (props: any) => {
    return (
        <Layout>
            <h4>Use another service to log in.</h4>
            <hr />
            <div>
                <p>
                    There are no external authentication services configured. See <a href="http://go.microsoft.com/fwlink/?LinkId=403804">this article</a>
                    for details on setting up this ASP.NET application to support logging in via external services.
                </p>
            </div>
            <div id="socialLoginList">
                <p>
                    <button type="submit" className="btn btn-default" id="@p.AuthenticationType" name="provider" value="@p.AuthenticationType" title="Log in using your @p.Caption account">p.AuthenticationType</button>
                </p>
            </div>
        </Layout>
    )
}

export { ExternalLoginsListPartial };