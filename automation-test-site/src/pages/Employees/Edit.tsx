import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";
import { EmployeeForm } from "../../components/employee-form";
import { useEditEmployee, useGetEmployee } from "../../hooks/employee-hooks";
import { Layout } from "../../components/shared/layout";

const Edit = (props: any) => {
  const EditInner = (props: any) => {
    let [employee, setEmployee] = useState(undefined);
    const getEmployee = useGetEmployee();
    const editEmployee = useEditEmployee();

    const [id, setId] = useState<number>(undefined);

    useEffect(() => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const queryId = Number.parseInt(urlParams.get("id"));
      setId(queryId);
      const employee = getEmployee(queryId);
      setEmployee(employee);
    }, []);

    return (
      <React.Fragment>
        <h2>Edit</h2>
        {!!employee && (
          <EmployeeForm
            value={employee}
            onSubmit={(employee) => {
              setEmployee(employee);
              editEmployee(id, employee);
              navigate("/Employees");
            }}
          />
        )}
      </React.Fragment>
    );
  };
  return (
    <Layout title="Edit">
      <EditInner />
    </Layout>
  );
};

export default Edit;
