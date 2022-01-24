import { navigate, Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { Layout } from "../../components/shared/layout";
import {
  useEditDepartment,
  useGetDepartment,
} from "../../hooks/department-hooks";

const Edit = (props: any) => {
  const EditInner = (props: any) => {
    let [department, setDepartment] = useState(undefined);
    const [id, setId] = useState<number>(undefined);
    const getDepartment = useGetDepartment();
    const editDepartment = useEditDepartment();

    useEffect(() => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const queryId = Number.parseInt(urlParams.get("id"));
      setId(queryId);
      setDepartment(getDepartment(queryId));
    }, []);

    return (
      <React.Fragment>
        <h2>Edit</h2>

        <form
          action="/Departments/Edit/1754"
          method="post"
          novalidate="novalidate"
        >
          {
            false && (
              <input
                name="__RequestVerificationToken"
                type="hidden"
                value="ENvsqL2FNrnZss40ySe9RPx1O5Em961LrYKCp_YaVqBZw2PZSO7dfnBhNV7Pp0rAH0ow0QqzKX9EC8hLpwNzTLUROIy08ecapRsv6-PTdX81"
              />
            )
            /* I am assuming this is no longer needed. */
          }
          <div className="form-horizontal">
            <h4>Department</h4>
            <hr />

            <input
              data-val="true"
              data-val-number="The field DepartmentID must be a number."
              data-val-required="The DepartmentID field is required."
              id="DepartmentID"
              name="DepartmentID"
              type="hidden"
              value={department ? department.id : -1}
            />

            <div className="form-group">
              <label className="control-label col-md-2" for="DepartmentName">
                Department
              </label>
              <div className="col-md-10">
                <input
                  className="form-control text-box single-line"
                  data-val="true"
                  data-val-required="The Department field is required."
                  id="DepartmentName"
                  name="DepartmentName"
                  type="text"
                  value={department ? department.department : ""}
                  onChange={(event) => {
                    let newDepartment = { ...department };
                    newDepartment.department = event.target.value;
                    setDepartment(newDepartment);
                  }}
                />
                <span
                  className="field-validation-valid text-danger"
                  data-valmsg-for="DepartmentName"
                  data-valmsg-replace="true"
                ></span>
              </div>
            </div>

            <div className="form-group">
              <div className="col-md-offset-2 col-md-10">
                <input
                  onClick={() => {
                    editDepartment(id, department);
                    navigate("/Departments/");
                  }}
                  value="Save"
                  className="btn btn-default"
                />
              </div>
            </div>
          </div>
        </form>

        <div>
          <Link to="/Departments">Back to List</Link>
        </div>
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
