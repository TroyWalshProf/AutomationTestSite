import * as React from 'react';
import { Layout } from '../shared/layout';

const Index = (props: any) => {
    return (
        <Layout
            title="Index">
            <h2>Index</h2>

            <p>
                Html.ActionLink("Create New", "Create")
            </p>
            <table className="table">
                <tr>
                    <th>
                        Html.DisplayNameFor(model  model.DepartmentName)
                    </th>
                    <th></th>
                </tr>

                <tr>
                    <td>
                        Html.DisplayFor(modelItem  item.DepartmentName)
                    </td>
                    <td>
                        Html.ActionLink("Edit", "Edit", new id = item.DepartmentID) |
                        Html.ActionLink("Details", "Details", new id = item.DepartmentID) |
                        Html.ActionLink("Delete", "Delete", new id = item.DepartmentID)
                    </td>
                </tr>
            </table>
        </Layout>
    );
}

export default Index;