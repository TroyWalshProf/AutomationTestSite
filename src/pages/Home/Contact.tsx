import { Layout } from "../shared/layout";

const Contact = (props: any) => {
    return (
        <Layout
            title="Contact">
            <h2 id="AboutMessage">ViewBag.Message</h2>
            <h3 id="AboutTitle">ViewBag.Title</h3>

            <address id="Address">
                1600 Utica Ave S<br />
                St. Louis Park, MN 55416<br />
                <abbr title="Phone">P:</abbr>
                (763) 398-4800
            </address>

            <address id="MailTo">
                <strong>Support:</strong>   <a href="mailto:Support@example.com">TroyW@magenic.com</a><br />
            </address>
        </Layout>
    );
}

export default Contact;