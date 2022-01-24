import * as React from 'react';
import { Layout } from '../../components/shared/layout';

const Login = (props: any) => {
    return (
        <Layout
            title="Log in">
            <h2>@ViewBag.Title.</h2>
            <div className="row">
                <div className="col-md-8">
                    <section id="loginForm">
                        <h4>Use a local account to log in.</h4>
                        <hr />
                        Html.ValidationSummary(true, "", new class = "text-danger" )
                        <div className="form-group">
                            Html.LabelFor(m m.Email, new class = "col-md-2 control-label" )
                            <div className="col-md-10">
                                Html.TextBoxFor(m  m.Email, new class = "form-control" )
                                Html.ValidationMessageFor(m  m.Email, "", new class = "text-danger" )
                            </div>
                        </div>
                        <div className="form-group">
                            Html.LabelFor(m  m.Password, new class = "col-md-2 control-label" )
                            <div className="col-md-10">
                                @Html.PasswordFor(m  m.Password, new class = "form-control" )
                                @Html.ValidationMessageFor(m  m.Password, "", new  class = "text-danger" )
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-offset-2 col-md-10">
                                <div className="checkbox">
                                    Html.CheckBoxFor(m m.RememberMe)
                                    Html.LabelFor(m  m.RememberMe)
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-offset-2 col-md-10">
                                <input type="submit" value="Log in" className="btn btn-default" />
                            </div>
                        </div>
                        <p>
                            Html.ActionLink("Register as a new user", "Register")
                        </p>
            }
                    </section>
                </div>
                <div className="col-md-4">
                    <section id="socialLoginForm">
                        Html.Partial("_ExternalLoginsListPartial", new ExternalLoginListViewModel ReturnUrl = ViewBag.ReturnUrl)
                    </section>
                </div>
            </div>
        </Layout>
    );
}

export default Login;