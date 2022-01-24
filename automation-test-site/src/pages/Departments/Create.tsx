import React, { useState } from "react";
import { Layout } from "../../components/shared/layout";
import { useCreateDepartment } from "../../hooks/department-hooks";
import { navigate, Link } from "gatsby";

const Create = (props: any) => {
  const CreateInner = (props: any) => {
    const [department, setDepartment] = useState({
      id: undefined,
      department: "",
    });

    const createDepartment = useCreateDepartment();

    return (
      <React.Fragment>
        <h2>Create</h2>
        <div className="form-horizontal">
          <h4>Department</h4>
          <hr />
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
                value={department.department}
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
                  createDepartment(department);
                  navigate("/");
                }}
                value="Create"
                className="btn btn-default"
              />
            </div>
          </div>
        </div>

        <div>
          <Link to="/Departments">"Back to List"</Link>
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
