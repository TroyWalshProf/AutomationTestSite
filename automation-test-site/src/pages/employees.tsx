import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import { Layout } from "./shared/layout";
import { getEmployees, useDeleteEmployee } from "../hooks/employee-hooks";

/**
 * Main employee listing on Automation site.
 * Ported from View/Employees/Index.cshtml.
 *
 * @param props
 * @returns
 */
const Employees = (props: any) => {

  // The hook calls need to happen within the layout context, which is why
  // two components are used.
  const EmployeesInner = (props: any) => {
    const employees = getEmployees();

    // TODO: Fetch if we want to
    return (
      <React.Fragment>
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
              employees.map(employee => (
                <tr>
                  <td>{employee.city}</td>
                  <td>{employee.department}</td>
                  <td>{employee.state}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.address}</td>
                  <td>
                    <a href={"/Employees/Edit?id=" + employee.id}> Edit </a> |
                    <a href={"/Employees/Details?id=" + employee.id}> Details </a> |
                    <a href={"/Employees/Delete?id=" + employee.id}> Delete </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </React.Fragment>
    )
  }

  return (
    <Layout title="Index">
      <EmployeesInner />
    </Layout>
  );
};

export default Employees;
