// TODO: Add back in client side javascript
import * as React from 'react';
import { Layout } from '../shared/layout';
import './asyncPage.css';

const AsyncPage = (props: any) => {
    return (
        <Layout
            title="Async">
            <body>
                <h2>Async Page</h2>
                <label id="LoadingLabel">Loading...</label>
                <div id="AsyncContent">
                    <label id="Label">Loading</label><br />
                    <select id="Selector"></select>
                </div>
                <br />
                <div className="roundedcorners">
                    <div id="loading-div" className="ui-corner-all">
                        <img id="LoadingIconImage" src="~/Content/Images/loading.gif" alt="Loading.." height="50" style={{ display: "block", margin: "auto" }} />

                    </div>
                    <div id="loading-div-text">
                        <p>Loaded</p>
                    </div>
                </div>
                <div>
                </div>
            </body>
        </Layout>
    );
}

export default AsyncPage;