import * as React from 'react';
import { Layout } from '../shared/layout';

const Delete = (props: any) => {
    return (
        <Layout
            title="Delete">
            <h2>Delete</h2>

            <h3>Are you sure you want to delete this?</h3>
            <div>
                <h4>Employee</h4>
                <hr />
                <dl className="dl-horizontal">
                    <dt>
            Html.DisplayNameFor(model  model.CityObj.CityName)
                    </dt>

                    <dd>
            Html.DisplayFor(model  model.CityObj.CityName)
                    </dd>

                    <dt>
            Html.DisplayNameFor(model  model.DepartmentObj.DepartmentName)
                    </dt>

                    <dd>
            Html.DisplayFor(model  model.DepartmentObj.DepartmentName)
                    </dd>

                    <dt>
            Html.DisplayNameFor(model  model.StateObj.StateName)
                    </dt>

                    <dd>
            Html.DisplayFor(model  model.StateObj.StateName)
                    </dd>

                    <dt>
            Html.DisplayNameFor(model  model.EmpFirstName)
                    </dt>

                    <dd>
            Html.DisplayFor(model  model.EmpFirstName)
                    </dd>

                    <dt>
            Html.DisplayNameFor(model  model.EmpLastName)
                    </dt>

                    <dd>
            Html.DisplayFor(model  model.EmpLastName)
                   </dd>

                    <dt>
            Html.DisplayNameFor(model  model.EmpAddress)
                    </dt>

                    <dd>
            Html.DisplayFor(model  model.EmpAddress)
                    </dd>

                </dl>

                <div className="form-actions no-color">
                    <input type="submit" value="Delete" className="btn btn-default" /> |
                    Html.ActionLink("Back to List", "Index")
                </div>
            </div>
        </Layout>
    );
}

export default Delete;
