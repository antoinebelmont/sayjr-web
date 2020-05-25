import React from "react";
import { Field, reduxForm } from "redux-form";
import renderField from "components/FormInputs/renderField";
import _ from "lodash";

const CoverageForm = ({ handleSubmit, catalogs, onInputChange }) => (
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
                                Banco
                            </label>
                            <div className="col-sm-9">
                                <Field
                                    type="text"
                                    name="bank"
                                    input={{
                                        name: "bank",
                                        value: catalogs.dataMatrix.bank,
                                        onChange: value =>
                                            onInputChange(value, "bank")
                                    }}
                                    required={true}
                                    component={renderField}
                                />
                            </div>
                        </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label">
                                    Aseguradora
                                </label>
                                <div className="col-sm-9">
                                    <Field
                                        type="select"
                                        name="select"
                                        required={true}
                                        input={{
                                            name: "insurance_id",
                                            value: catalogs.dataMatrix.insurance_id,
                                            onChange: value =>
                                                onInputChange(value, "insurance_id")
                                        }}
                                        options={catalogs.insurances}
                                        component={renderField}
                                    />
                                </div>
                            </div><div className="form-group">
                            <label className="col-sm-3 control-label">
                                Monto asegurado
                            </label>
                            <div className="col-sm-9">
                                <Field
                                    type="number"
                                    name="coverage"
                                    required={true}
                                    input={{
                                        name: "coverage",
                                        step:".01",
                                        value: catalogs.dataMatrix.coverage,
                                        onChange: value => 
                                        onInputChange(value, "coverage")
                                    }}
                                    component={renderField}
                                />
                            </div>
                        </div>
                            <input
                                type="hidden"
                                name="id"
                                value={catalogs.dataMatrix.id}
                            />
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
);
const validate = values => {};
export default reduxForm({
    form: "CoverageForm",
    validate
})(CoverageForm);
