﻿import * as React from 'react';
import { Layout } from '../../components/shared/layout';

const Index = (props: any) => {
    return (
        <Layout
            title="Manage">
            <h2>@ViewBag.Title.</h2>

            <p className="text-success">@ViewBag.StatusMessage</p>
            <div>
                <h4>Change your account settings</h4>
                <hr />
                <dl className="dl-horizontal">
                    <dt>Password:</dt>
                    <dd>
                        [
                        @if (Model.HasPassword)
                        Html.ActionLink("Change your password", "ChangePassword")
                        else
                        Html.ActionLink("Create", "SetPassword")
                        ]
                    </dd>
                    <dt>External Logins:</dt>
                    <dd>
                        Model.Logins.Count [
                        Html.ActionLink("Manage", "ManageLogins") ]
                    </dd>
                    Phone Numbers can used as a second factor of verification in a two-factor authentication system.

                    See <a href="http://go.microsoft.com/fwlink/?LinkId=403804">this article</a>
                    for details on setting up this ASP.NET application to support two-factor authentication using SMS.

                    Uncomment the following block after you have set up two-factor authentication
                    <dt>Phone Number:</dt>
                    <dd>
                        (Model.PhoneNumber ?? "None") [
                        if (Model.PhoneNumber != null)
                        Html.ActionLink("Change", "AddPhoneNumber")
                        Html.ActionLink("Remove", "RemovePhoneNumber")
                        else
                        Html.ActionLink("Add", "AddPhoneNumber")
                        ]
                    </dd>
                    <dt>Two-Factor Authentication:</dt>
                    <dd>
                        <p>
                            There are no two-factor authentication providers configured. See <a href="http://go.microsoft.com/fwlink/?LinkId=403804">this article</a>
                            for details on setting up this ASP.NET application to support two-factor authentication.
                        </p>
                        if (Model.TwoFactor)
                        using (Html.BeginForm("DisableTwoFactorAuthentication", "Manage", FormMethod.Post, new class = "form-horizontal", role = "form" ))
                        Html.AntiForgeryToken()
                        <text>Enabled
                            <input type="submit" value="Disable" className="btn btn-link" />
                        </text>
                        else
                    using (Html.BeginForm("EnableTwoFactorAuthentication", "Manage", FormMethod.Post, new class = "form-horizontal", role = "form" }))
                        Html.AntiForgeryToken()
                        <text>Disabled
                            <input type="submit" value="Enable" className="btn btn-link" />
                        </text>
                    </dd>
                </dl>
            </div>
        </Layout>
    );
}

export default Index;