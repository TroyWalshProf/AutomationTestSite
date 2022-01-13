import * as React from 'react';
import { Layout } from '../shared/layout';

const ErrorPage = (props: any) => {
    return (
        <Layout
            title="ErrorPage">

            <h2>ErrorPage</h2>

            <body>
                <p id="NoError" style="font-size: x-large; font-weight: bold">No error this time</p>
            </body>
        </Layout>
    )
}

export default ErrorPage;