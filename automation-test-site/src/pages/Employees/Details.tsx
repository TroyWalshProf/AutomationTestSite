import React, { useEffect, useState } from "react";
import { Layout } from "../shared/layout";
import { Link, navigate } from "gatsby";
import { useDeleteEmployee, useGetEmployee } from "../../hooks/employee-hooks";

const Details = (props: any) => {
  const DetailsInner = (props: any) => {
    const getEmployee = useGetEmployee();
    const [employee, setEmployee] = useState<any>(undefined);
    const [id, setId] = useState<number>(undefined);

    useEffect(() => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const queryId = Number.parseInt(urlParams.get("id"));
      setId(queryId);
      setEmployee(getEmployee(queryId));
    }, []);

    return (
      <React.Fragment>
        <h2>Details</h2>

        <div>
          <h4>Employee</h4>
          <hr />
          <dl className="dl-horizontal">
            <dt>City</dt>

            <dd>{!!employee && employee.city}</dd>

            <dt>Department</dt>

            <dd>{!!employee && employee.department}</dd>

            <dt>State</dt>

            <dd>{!!employee && employee.state}</dd>

            <dt>First Name</dt>

            <dd>{!!employee && employee.firstName}</dd>

            <dt>Last Name</dt>

            <dd>{!!employee && employee.lastName}</dd>

            <dt>Address</dt>

            <dd>{!!employee && employee.address}</dd>
          </dl>
        </div>
        <p>
          <Link to={`/Employees/Edit?id=${id}`}>Edit</Link> |
          <Link to="/Employees">Back to List</Link>
        </p>
      </React.Fragment>
    );
  };

  return (
    <Layout title="Details">
      <DetailsInner />
    </Layout>
  );
};

export default Details;
