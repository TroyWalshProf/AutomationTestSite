import React from "react";
import { Layout } from "../components/shared/layout";
import { Link } from "gatsby";
import { getDepartments } from "../hooks/department-hooks";

const Departments = (props: any) => {
  const DepartmentsInner = (props: any) => {
    const departments = getDepartments();

    return (
      <React.Fragment>
        <h2>Index</h2>

        <p>
          <Link to="/Departments/Create">Create New</Link>
        </p>
        <table className="table">
          <tbody>
            <tr>
              <th>Department</th>
              <th></th>
            </tr>

            {departments.map((department) => (
              <tr>
                <td>{department.department}</td>
                <td>
                  <Link to={`/Departments/Edit/${department.id}`}>Edit</Link>
                  {" | "}
                  <Link to={`/Departments/Details/${department.id}`}>
                    Details
                  </Link>
                  {" | "}
                  <Link to={`/Departments/Delete/${department.id}`}>
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  };
  return (
    <Layout title="Index">
      <DepartmentsInner />
    </Layout>
  );
};

export default Departments;
