import { Layout } from "../shared/layout";

const EditEmployee = (props: any) => {
    return (
        <Layout
            title="Edit">
            <h2>Edit</h2>
            <div className="form-horizontal">
                <h4>Employee</h4>
                <hr />
                Html.ValidationSummary(true, "", new class = "text-danger" )
                Html.HiddenFor(model = model.EmployeeID)

                <div className="form-group">
                    Html.LabelFor(model = model.EmpFirstName, htmlAttributes: new class = "control-label col-md-2" )
                    <div className="col-md-10">
                    Html.EditorFor(model = model.EmpFirstName, new htmlAttributes = new class = "form-control" )
                    Html.ValidationMessageFor(model = model.EmpFirstName, "", new class = "text-danger")
                    </div>
                </div>

                <div className="form-group">
                    Html.LabelFor(model => model.EmpLastName, htmlAttributes: new class = "control-label col-md-2")
                    <div className="col-md-10">
                    Html.EditorFor(model = model.EmpLastName, new htmlAttributes = new class = "form-control" )
                    Html.ValidationMessageFor(model = model.EmpLastName, "", new class = "text-danger" )
                    </div>
                </div>

                <div className="form-group">
                    Html.LabelFor(model = model.EmpAddress, htmlAttributes: newclass = "control-label col-md-2" )
                    <div className="col-md-10">
                    Html.EditorFor(model = model.EmpAddress, new htmlAttributes = new class = "form-control" )
                    Html.ValidationMessageFor(model = model.EmpAddress, "", new class = "text-danger" )
                    </div>
                </div>

                <div className="form-group">
                    Html.LabelFor(model = model.StateID, "StateID", htmlAttributes: new class = "control-label col-md-2" )
                    <div className="col-md-10">
                        Html.DropDownList("StateID", null, htmlAttributes: new class = "form-control" )
                        Html.ValidationMessageFor(model = model.StateID, "", new class = "text-danger" )
                    </div>
                </div>

                <div className="form-group">
                    Html.LabelFor(model => model.CityID, "City", htmlAttributes: new class = "control-label col-md-2" )
                    <div className="col-md-10">
                         Html.EditorFor(model => model.CityObj.CityName, "", new htmlAttributes = new class = "form-control" )
                        Html.DropDownList("CityID", null, htmlAttributes: new class = "form-control" )
                        Html.ValidationMessageFor(model = model.CityObj.CityName, "", new class = "text-danger" )
                    </div>
                </div>

                <div className="form-group">
            Html.LabelFor(model = model.DepartmentID, "DepartmentID", htmlAttributes: new  class = "control-label col-md-2" )
                    <div className="col-md-10">
                        Html.DropDownList("DepartmentID", null, htmlAttributes: new  class = "form-control" )
                Html.ValidationMessageFor(model = model.DepartmentID, "", new  class = "text-danger" )
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-md-offset-2 col-md-10">
                        <input type="submit" value="Save" className="btn btn-default" />
                    </div>
                </div>
            </div>

        </Layout>
    )
};

export default EditEmployee;