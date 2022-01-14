import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import { Layout } from "./shared/layout";
import employeeList from "../data/employee-list.json";

/**
 * Main employee listing on Automation site.
 * Ported from View/Employees/Index.cshtml.
 *
 * @param props
 * @returns
 */
const Employees = (props: any) => {
  //TODO: Make context
  const [employees, setEmployees] = useState(employeeList.employees);

  // TODO: Fetch if we want to
  return (
    <Layout title="Index">
      <h2>Index</h2>

      <p>
        <a href="/Employees/Create">Create New</a>
      </p>
      <table className="table">
        <tbody>
          <tr>
            <th>City</th>
            <th>Department</th>
            <th>State</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th></th>
          </tr>
          {!!employees &&
            employees.map((employee, i) => (
              <tr>
                <td>{employee.city}</td>
                <td>{employee.department}</td>
                <td>{employee.state}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.address}</td>
                <td>
                  <a href={"/Employees/Edit/" + i}> Edit </a> |
                  <a href={"/Employees/Details/" + i}> Details </a> |
                  <a href={"/Employees/Delete/" + i}> Delete </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Employees;
