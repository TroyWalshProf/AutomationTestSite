import { Link } from 'gatsby';
import * as React from 'react';
import { Layout } from './shared/layout';

const Employees = (props: any) => {
    return (
        <Layout title="Index">
            <h2>Index</h2>

            <p>
                <Link to="/create">
                    Create New
                </Link>
            </p>
            <table className="table">
                {
                    props.employees ?? props.employees.map(employee => (
                        <tr>
                            <td>
                                {employee.CityObj.CityName}
                            </td>
                            <td>
                                {employee.DepartmentObj.DepartmentName}
                            </td>
                            <td>
                                {employee.StateObj.StateName}
                            </td>
                            <td>
                                {employee.EmpFirstName}
                            </td>
                            <td>
                                {employee.EmpLastName}
                            </td>
                            <td>
                                {employee.EmpAddress}
                            </td>
                            <th></th>
                            <td>
                                Html.ActionLink("Edit", "Edit", new id = item.EmployeeID) |
                                Html.ActionLink("Details", "Details", new id = item.EmployeeID) |
                                Html.ActionLink("Delete", "Delete", new id = item.EmployeeID)
                            </td>
                        </tr>
                    ))
                }
            </table>
        </Layout>
    );
}

export { Employees };