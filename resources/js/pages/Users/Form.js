import React from "react";
import { Field, reduxForm } from "redux-form";
import renderField from "components/FormInputs/renderField";
import _ from "lodash";

const Form = ({handleSubmit,catalogs,onInputChange}) => (
    <div className="row">
        <div className="col-md-12">
            <div className="card">
                <div className="header">
                    <h4>Crear usuario</h4>
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
                        </div>
                        <div className="form-group">
                            <label className="col-sm-3 control-label">
                                Correo
                            </label>
                            <div className="col-sm-9">
                                <Field
                                    type="text"
                                    name="email"
                                    input={{
                                        name: "email",
                                        value: catalogs.dataMatrix.email,
                                        onChange: value =>
                                            onInputChange(value, "email")
                                    }}
                                    required={true}
                                    component={renderField}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-3 control-label">
                                Teléfono
                            </label>
                            <div className="col-sm-9">
                                <Field
                                    type="text"
                                    name="phone"
                                    input={{
                                        name: "phone",
                                        value: catalogs.dataMatrix.phone,
                                        onChange: value =>
                                            onInputChange(value, "phone")
                                    }}
                                    required={true}
                                    component={renderField}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-3 control-label">
                                Contraseña
                            </label>
                            <div className="col-sm-9">
                                <Field
                                    type="password"
                                    name="password"
                                    input={{
                                        name: "password",
                                        value: catalogs.dataMatrix.password,
                                        onChange: value =>
                                            onInputChange(value, "password")
                                    }}
                                    required={(catalogs.dataMatrix.id == '')?true:false}
                                    component={renderField}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-3 control-label">
                                Confirmar Contraseña
                            </label>
                            <div className="col-sm-9">
                                <Field
                                    type="password"
                                    name="confirmpassword"
                                    input={{
                                        name: "confirmpassword",
                                        value: catalogs.dataMatrix.confirmpassword,
                                        onChange: value =>
                                            onInputChange(value, "confirmpassword")
                                    }}
                                    required={(catalogs.dataMatrix.id == '')?true:false}
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
