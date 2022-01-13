import * as React from 'react';
import { Layout } from '../shared/layout';

const Delete = (props: any) => {
    return (
        <Layout
            title="Delete"
        >
            <h2>Delete</h2>

            <h3>Are you sure you want to delete this?</h3>
            <div>
                <h4>Department</h4>
                <hr />
                <dl className="dl-horizontal">
                    <dt>
                        Html.DisplayNameFor(model  model.DepartmentName)
                    </dt>

                    <dd>
                        Html.DisplayFor(model  model.DepartmentName)
                    </dd>

                </dl>


                <div className="form-actions no-color">
                    <input type="submit" value="Delete" className="btn btn-default" /> |
                    Html.ActionLink("Back to List", "Index")
                </div>
            </div>
        </Layout>
    )
}

export default Delete;