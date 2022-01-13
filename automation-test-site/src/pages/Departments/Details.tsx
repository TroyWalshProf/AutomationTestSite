import * as React from 'react';
import { Layout } from '../shared/layout';

const Details = (props: any) => {

    return (
        <Layout
            title="Details">
            <h2>Model.Departments.DepartmentName</h2>

            <div>

                <h1>Employees</h1>

                <table className="table">
                    <tr>


                        <th>
                            Html.DisplayNameFor(model = model.Employees[0].EmpFirstName)
                        </th>
                        <th>
                            Html.DisplayNameFor(model = model.Employees[0].EmpLastName)
                        </th>
                        <th>
                            Html.DisplayNameFor(model = model.Employees[0].CityObj.CityName)
                        </th>
                        <th>
                            Html.DisplayNameFor(model = model.Employees[0].DepartmentObj.DepartmentName)
                        </th>
                        <th>
                            Html.DisplayNameFor(model = model.Employees[0].StateObj.StateName)
                        </th>

                        <th>
                            Html.DisplayNameFor(model = model.Employees[0].EmpAddress)
                        </th>


                    </tr>

                    <tr>
                        <td>
                            Html.DisplayFor(modelItem = item.EmpFirstName)
                        </td>
                        <td>
                            Html.DisplayFor(modelItem = item.EmpLastName)
                        </td>
                        <td>
                            Html.DisplayFor(modelItem = item.CityObj.CityName)
                        </td>
                        <td>
                            Html.DisplayFor(modelItem = item.DepartmentObj.DepartmentName)
                        </td>
                        <td>
                            Html.DisplayFor(modelItem = item.StateObj.StateName)
                        </td>

                        <td>
                            Html.DisplayFor(modelItem = item.EmpAddress)
                        </td>

                    </tr>
                </table>

                else
                <h1>No data</h1>


            </div>


            <p>
                Html.ActionLink("Edit", "Edit", new id = Model.Departments.DepartmentID) |
                Html.ActionLink("Back to List", "Index")
            </p>
        </Layout>
    )
}

export default Details;
