import React, { useState, useEffect } from "react";
import { Link, navigate } from "gatsby";
import { Layout } from "../../components/shared/layout";
import {
  useDeleteDepartment,
  useGetDepartment,
} from "../../hooks/department-hooks";

const Delete = (props: any) => {
  const DeleteInner = (props: any) => {
    const [id, setId] = useState<number>(undefined);
    const [department, setDepartment] = useState<any>(undefined);
    const getDepartment = useGetDepartment();
    const deleteDepartment = useDeleteDepartment();

    useEffect(() => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const queryId = Number.parseInt(urlParams.get("id"));
      setId(queryId);
      const department = getDepartment(queryId);
      setDepartment(department);
    }, []);

    return (
      <React.Fragment>
        <h2>Delete</h2>

        <h3>Are you sure you want to delete this?</h3>
        <div>
          <h4>Department</h4>
          <hr />
          <dl className="dl-horizontal">
            <dt>Department</dt>

            <dd>{!!department ? department.department : "Not found"}</dd>
          </dl>

          <div className="form-actions no-color">
            <input
              onClick={() => {
                deleteDepartment(id);
                navigate("/Departments/");
              }}
              value="Delete"
              className="btn btn-default"
            />{" "}
            |<Link to="/Departments/">Back to List</Link>
          </div>
        </div>
      </React.Fragment>
    );
  };

  return (
    <Layout title="Delete">
      <DeleteInner />
    </Layout>
  );
};

export default Delete;
