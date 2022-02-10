import React, { useState } from "react";
import { navigate } from "gatsby";
import PropTypes from "prop-types";

const EmployeeForm = (props: any) => {
  const [employee, setEmployee] = useState(props.value);

  return (
    <form action="/Employees/Create" method="post" novalidate="novalidate">
      {
        false && (
          <input
            name="__RequestVerificationToken"
            type="hidden"
            value="-Kv-aAqS8iz1imYFh44kM17rCMFZt2gIIwVtHL3FoRqHCUOshUwDp2i2cz6dq3JpDvHuEX76A2qKyi2bKImCc3otcYA4f0n1ID_Az1hTMx81"
          />
        ) /* I am assuming this is no longer needed. If needed, a dummy field can be added. */
      }
      <div className="form-horizontal">
        <h4>Employee</h4>
        <hr />

        <div className="form-group">
          <label className="control-label col-md-2" for="EmpFirstName">
            First Name
          </label>
          <div className="col-md-10">
            <input
              className="form-control text-box single-line"
              data-val="true"
              data-val-required="The First Name field is required."
              id="EmpFirstName"
              name="EmpFirstName"
              type="text"
              value={employee.firstName}
              onChange={(event) => {
                let newEmployee = { ...employee };
                newEmployee.firstName = event.target.value;
                setEmployee(newEmployee);
              }}
            />
            <span
              className="field-validation-valid text-danger"
              data-valmsg-for="EmpFirstName"
              data-valmsg-replace="true"
            ></span>
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-md-2" for="EmpLastName">
            Last Name
          </label>
          <div className="col-md-10">
            <input
              className="form-control text-box single-line"
              data-val="true"
              data-val-required="The Last Name field is required."
              id="EmpLastName"
              name="EmpLastName"
              type="text"
              value={employee.lastName}
              onChange={(event) => {
                let newEmployee = { ...employee };
                newEmployee.lastName = event.target.value;
                setEmployee(newEmployee);
              }}
            />
            <span
              className="field-validation-valid text-danger"
              data-valmsg-for="EmpLastName"
              data-valmsg-replace="true"
            ></span>
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-md-2" for="EmpAddress">
            Address
          </label>
          <div className="col-md-10">
            <input
              className="form-control text-box single-line"
              data-val="true"
              data-val-required="The Address field is required."
              id="EmpAddress"
              name="EmpAddress"
              type="text"
              value={employee.address}
              onChange={(event) => {
                let newEmployee = { ...employee };
                newEmployee.address = event.target.value;
                setEmployee(newEmployee);
              }}
            />
            <span
              className="field-validation-valid text-danger"
              data-valmsg-for="EmpAddress"
              data-valmsg-replace="true"
            ></span>
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-md-2" for="StateID">
            State
          </label>
          <div className="col-md-10">
            <select
              className="form-control"
              id="StateID"
              name="StateID"
              value={employee.stateId}
              onChange={(event) => {
                let newEmployee = { ...employee };
                newEmployee.stateId = event.target.value;
                setEmployee(newEmployee);
              }}
            >
              <option value="1">Alaska</option>
              <option value="2">Arizona</option>
              <option value="3">Arkansas</option>
              <option value="4">California</option>
              <option value="5">Colorado</option>
              <option value="6">Connecticut</option>
              <option value="7">Delaware</option>
              <option value="8">Florida</option>
              <option value="9">Georgia</option>
              <option value="10">Hawaii</option>
              <option value="11">Idaho</option>
              <option value="12">Illinois</option>
              <option value="13">Indiana</option>
              <option value="14">Iowa</option>
              <option value="15">Kansas</option>
              <option value="16">Kentucky</option>
              <option value="17">Louisiana</option>
              <option value="18">Maine</option>
              <option value="19">Maryland</option>
              <option value="20">Massachusetts</option>
              <option value="21">Michigan</option>
              <option value="22">Minnesota</option>
              <option value="23">Mississippi</option>
              <option value="24">Missouri</option>
              <option value="25">Montana</option>
              <option value="26">Nebraska</option>
              <option value="27">Nevada</option>
              <option value="28">New Hampshire</option>
              <option value="29">New Jersey</option>
              <option value="30">New Mexico</option>
              <option value="31">New York</option>
              <option value="32">North Carolina</option>
              <option value="33">North Dakota</option>
              <option value="34">Ohio</option>
              <option value="35">Oklahoma</option>
              <option value="36">Oregon</option>
              <option value="37">Pennsylvania</option>
              <option value="38">Rhode Island</option>
              <option value="39">South Carolina</option>
              <option value="40">South Dakota</option>
              <option value="41">Tennessee</option>
              <option value="42">Texas</option>
              <option value="43">Utah</option>
              <option value="44">Vermont</option>
              <option value="45">Virginia</option>
              <option value="46">Washington</option>
              <option value="47">West Virginia</option>
              <option value="48">Wisconsin</option>
              <option value="49">Wyoming</option>
            </select>
            <span
              className="field-validation-valid text-danger"
              data-valmsg-for="StateID"
              data-valmsg-replace="true"
            ></span>
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-md-2" for="CityID">
            City
          </label>
          <div className="col-md-10">
            <input
              className="form-control text-box single-line"
              data-val="true"
              data-val-required="The City field is required."
              id="CityObj_CityName"
              name="CityObj.CityName"
              type="text"
              value={employee.city}
              onChange={(event) => {
                let newEmployee = { ...employee };
                newEmployee.city = event.target.value;
                setEmployee(newEmployee);
              }}
            />
            <span
              className="field-validation-valid text-danger"
              data-valmsg-for="CityObj.CityName"
              data-valmsg-replace="true"
            ></span>
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-md-2" for="DepartmentID">
            Department
          </label>
          <div className="col-md-10">
            <select
              className="form-control"
              id="DepartmentID"
              name="DepartmentID"
              value={employee.departmentId}
              onChange={(event) => {
                let newEmployee = { ...employee };
                newEmployee.departmentId = event.target.value;
                setEmployee(newEmployee);
              }}
            >
              <option value="1754">Dev</option>
              <option value="1755">Quality Engineering</option>
              <option value="1756">IT</option>
              <option value="1757">DevOps</option>
              <option value="1790">HR</option>
              <option value="1791">Admin</option>
              <option value="1796">Magenic</option>
              <option value="1810">sampleDept</option>
              <option value="1815">test</option>
              <option value="1906">Magenic Manila Recruitment - 84</option>
              <option value="2163">Magenic Manila Recruitment</option>
              <option value="2164">Magenic Manila Recruitment - 101</option>
              <option value="2170">QE Dept</option>
              <option value="2171">Chirurgeon</option>
            </select>
            <span
              className="field-validation-valid text-danger"
              data-valmsg-for="DepartmentID"
              data-valmsg-replace="true"
            ></span>
          </div>
        </div>

        <div className="form-group">
          <div className="col-md-offset-2 col-md-10">
            <input
              type="submit"
              onClick={() => props.onSubmit(employee)}
              value={props.isCreate ? "Create" : "Edit"}
              className="btn btn-default"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

EmployeeForm.propTypes = {
  value: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isCreate: PropTypes.bool,
};

export { EmployeeForm };
