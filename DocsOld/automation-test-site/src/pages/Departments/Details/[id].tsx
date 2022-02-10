import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { Layout } from "../../../components/shared/layout";
import { getEmployees } from "../../../hooks/employee-hooks";
import { useGetDepartment } from "../../../hooks/department-hooks";

const Details = (props: any) => {
  const DetailsInner = (props: any) => {
    const [employees, setEmployees] = useState<any[]>(undefined);
    const [id, setId] = useState<number>(undefined);
    const [department, setDepartment] = useState<any>(undefined);
    const allEmployees = getEmployees();
    const getDepartment = useGetDepartment();

    useEffect(() => {
      const queryId = props.id;
      setId(queryId);
      setDepartment(getDepartment(queryId));
      setEmployees(
        allEmployees.filter((employee) => (employee.departmentId = queryId))
      );
    }, []);

    return (
      <React.Fragment>
        <h2>{!!department ? department.department : ""}</h2>

        <div>
          <h1>Employees</h1>
          {!!employees ? (
            <table className="table">
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>City</th>
                <th>Department</th>
                <th>State</th>
                <th>Address</th>
              </tr>
              {!!employees &&
                employees.map((employee) => {
                  return (
                    <tr>
                      <td>{employee.firstName}</td>
                      <td>{employee.lastName}</td>
                      <td>{employee.city}</td>
                      <td>{employee.department}</td>
                      <td>{employee.state}</td>
                      <td>{employee.address}</td>
                    </tr>
                  );
                })}
            </table>
          ) : (
            <h1>No data</h1>
          )}
        </div>

        <p>
          <Link to={`/Departments/Edit?id=${id}`}>Edit</Link>|
          <Link to="/Departments">Back to List</Link>
        </p>
      </React.Fragment>
    );
  };

  return (
    <Layout title="Details">
      <DetailsInner id={props.params.id} />
    </Layout>
  );
};

export default Details;
