"use strict";(self.webpackChunk_cognizant_softvision_automation_test_site=self.webpackChunk_cognizant_softvision_automation_test_site||[]).push([[914],{7685:function(e,t,n){n.r(t);var i=n(7294),a=n(8177);t.default=function(e){var t;return i.createElement(a.A,{name:"Manage your external logins"},i.createElement("h2",null,"@ViewBag.Title."),(t=!0)?i.createElement("div",null,i.createElement("p",null,"There are no external authentication services configured. See"," ",i.createElement("a",{href:"http://go.microsoft.com/fwlink/?LinkId=313242"},"this article"),"for details on setting up this ASP.NET application to support logging in via external services.")):t?i.createElement("div",{id:"socialLoginList"},i.createElement("p",null,"foreach (AuthenticationDescription p in Model.OtherLogins)",i.createElement("button",{type:"submit",className:"btn btn-default",id:"@p.AuthenticationType",name:"provider",value:"@p.AuthenticationType",title:"Log in using your @p.Caption account"},"@p.AuthenticationType"))):i.createElement(JSX.Element,null,i.createElement("h4",null,"Registered Logins"),i.createElement("table",{className:"table"},i.createElement("tbody",null,"foreach (var account in Model.CurrentLogins)",i.createElement("tr",null,i.createElement("td",null,"account.LoginProvider"),i.createElement("td",null,'if (ViewBag.ShowRemoveButton) using(Html.BeginForm("RemoveLogin", "Manage")) Html.AntiForgeryToken()',i.createElement("div",null,'Html.Hidden("loginProvider", account.LoginProvider) Html.Hidden("providerKey", account.ProviderKey)',i.createElement("input",{type:"submit",className:"btn btn-default",value:"Remove",title:"Remove this @account.LoginProvider login from your account"})),"else :  "))))),i.createElement("p",{className:"text-success"},"ViewBag.StatusMessage"))}}}]);
//# sourceMappingURL=component---src-pages-manage-manage-logins-tsx-1bff720b034f24336dbc.js.map