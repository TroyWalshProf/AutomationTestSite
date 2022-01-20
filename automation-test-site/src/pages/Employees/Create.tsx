import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import { Layout } from "../shared/layout";
import { useCreateEmployee } from "../../hooks/employee-hooks";
import { EmployeeForm } from "../../components/employee-form";

/**
 * Allows the creation of employees.
 * Ported from Views/Employees/Create.cshtml.
 *
 * @param props No props are currently consumed by this component.
 * @returns A page containing the add new employee form.
 */
const Create = (props: any) => {
  const CreateInner = (props: any) => {
    const [employee, setEmployee] = useState({
      firstName: "",
      lastName: "",
      city: "",
      address: "",
      departmentId: undefined,
      stateId: undefined,
    });

    // TODO: generate
    const createEmployee = useCreateEmployee();

    return (
      <React.Fragment>
        <h2>Create</h2>
        {!!employee && (
          <EmployeeForm
            value={employee}
            isCreate={true}
            onSubmit={(employee) => {
              createEmployee(employee);
              navigate("/Employees");
            }}
          />
        )}
        <div>
          <Link to="/Employees">Back to List</Link>
        </div>
      </React.Fragment>
    );
  };

  return (
    <Layout title="Create">
      <CreateInner />
    </Layout>
  );
};

export default Create;
