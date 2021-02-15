import React from 'react';
import { Field, reduxForm } from "redux-form";
import renderField from "components/FormInputs/renderField";

const validate = values => {};

const InsuranceForm = ({handleSubmit,onInputChange,users}) => (
    <div className="row">
        <div className='col-md-3'></div>
        <div className="col-md-6">
            <div className="card">
                <div className="header">
                    <h4>Registrar factura</h4>
                </div>
                <form className="form-horizontal" onSubmit={handleSubmit}>
                    <div className="content">

                        <div className="form-group">
                            <label className="col-sm-3 control-label">
                                Número de factura
                            </label>
                            <div className="col-sm-9">
                                <Field
                                    type="text"
                                    name="number"
                                    required={true}
                                    input={{
                                        name: "number",
                                        onChange: onInputChange
                                    }}
                                    options={users}
                                    component={renderField}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                                <label className="col-sm-3 control-label">Comentarios</label>
                            <div className="col-sm-9">
                            <textarea
                                    className={"form-control"}
                                    name="invoiceComment"
                                    id="invoiceComment"
                                    required={true}
                                    onKeyUp={onInputChange}
                                />
                            </div>
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
        <div className='col-md-3'></div>
    </div>
);

export default reduxForm({form:"InsuranceForm",validate})(InsuranceForm);