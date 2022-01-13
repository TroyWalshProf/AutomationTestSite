import * as React from 'react';
import { Layout } from "../shared/layout";

const ManageLogins = (props: any) => {

    const getInline = (input) => {
        if (input) {
            return (<div>
                <p>
                    There are no external authentication services configured. See <a href="http://go.microsoft.com/fwlink/?LinkId=313242">this article</a>
                    for details on setting up this ASP.NET application to support logging in via external services.
                </p>
            </div>)
        }
        else if (!input) {
            return (
                <JSX.Element>
                    <h4>Registered Logins</h4>
                    <table className="table">
                        <tbody>
                            foreach (var account in Model.CurrentLogins)
                            <tr>
                                <td>account.LoginProvider</td>
                                <td>
                                    if (ViewBag.ShowRemoveButton)
                                    using(Html.BeginForm("RemoveLogin", "Manage"))
                                    Html.AntiForgeryToken()
                                    <div>
                                        Html.Hidden("loginProvider", account.LoginProvider)
                                        Html.Hidden("providerKey", account.ProviderKey)
                                        <input type="submit" className="btn btn-default" value="Remove" title="Remove this @account.LoginProvider login from your account" />
                                    </div>
                                    else
                                    : &nbsp;
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </JSX.Element>);
        }
        else {
            return (
                <div id="socialLoginList">
                    <p>
                        foreach (AuthenticationDescription p in Model.OtherLogins)
                        {
                            <button type="submit" className="btn btn-default" id="@p.AuthenticationType" name="provider" value="@p.AuthenticationType" title="Log in using your @p.Caption account">@p.AuthenticationType</button>
                        }
                    </p>
                </div>
            );
        }
    }


    return (
        <Layout
            name="Manage your external logins">
            <h2>@ViewBag.Title.</h2>
            {getInline(true)}
            <p className="text-success">ViewBag.StatusMessage</p>

        </Layout>
    );
}

export default ManageLogins;