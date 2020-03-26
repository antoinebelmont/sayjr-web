import React from "react";
import { Field, reduxForm } from "redux-form";
import renderField from "components/FormInputs/renderField";
import _ from "lodash";

const Form = ({handleSubmit,catalogs,onInputChange,onTooggle}) => (
    <div className="row">
        <div className="col-md-12">
            <div className="card">
                <div className="header">
                    <h4>Crear aseguradora</h4>
                </div>
                <form className="form-horizontal" onSubmit={handleSubmit}>
                    <div className="content">
                        <div className="form-group">
                            <label className="col-sm-3 control-label">
                                Nombre
                            </label>
                            <div className="col-sm-9">
                                <Field
                                    type="text"
                                    name="name"
                                    input={{
                                        name: "name",
                                        value: catalogs.dataMatrix.name,
                                        onChange: value =>
                                            onInputChange(value, "name")
                                    }}
                                    required={true}
                                    component={renderField}
                                />
                            </div>
                            <input
                                type="hidden"
                                name="id"
                                value={catalogs.dataMatrix.id}
                            />
                        </div>
                    </div> 
                    <div className="footer text-center">
                        <button type="submit" className="btn btn-info btn-fill">
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)
;
const validate = values => {};
export default reduxForm({
    form: "Form",
    validate
})(Form);
