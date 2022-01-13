import * as React from 'react';
import { Layout } from '../shared/layout';

const Details = (props: any) => {
    return (
        <Layout
            title="Details">
            <h2>Details</h2>

            <div>
                <h4>Employee</h4>
                <hr />
                <dl className="dl-horizontal">
                    <dt>
                        Html.DisplayNameFor(model  model.CityObj.CityName)
                    </dt>

                    <dd>
                        tml.DisplayFor(model  model.CityObj.CityName)
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
            </div>
            <p>
                Html.ActionLink("Edit", "Edit", new  id = Model.EmployeeID ) |
                Html.ActionLink("Back to List", "Index")
            </p>
        </Layout>
    );
}

export default Details;