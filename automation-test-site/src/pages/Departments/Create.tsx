import * as React from 'react';
import { Layout } from '../shared/layout';

const Create = (props: any) => {
    return (
        <Layout
            title="Create">
            <h2>Create</h2>
            <div className="form-horizontal">
                <h4>Department</h4>
                <hr />
                Html.ValidationSummary(true, "", new class = "text-danger" )
                <div className="form-group">
                    Html.LabelFor(model  model.DepartmentName, htmlAttributes: new class = "control-label col-md-2" )
                    <div className="col-md-10">
                        Html.EditorFor(model  model.DepartmentName, new htmlAttributes = new class = "form-control" )
                        Html.ValidationMessageFor(model  model.DepartmentName, "", new class = "text-danger" )
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-md-offset-2 col-md-10">
                        <input type="submit" value="Create" className="btn btn-default" />
                    </div>
                </div>
            </div>

            <div>
                Html.ActionLink("Back to List", "Index")
            </div>
        </Layout>
    )
}

export default Create;