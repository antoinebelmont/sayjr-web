import React from 'react';
import { Field, reduxForm } from "redux-form";
import renderField from "components/FormInputs/renderField";
import DatetimePicker from "react-datetime-picker";

const validate = values => {};

const ExternalPaymentForm = ({handleSubmit,onInputChange,calendarChanged,users}) => (
    <div className="row">
        <div className='col-md-3'></div>
        <div className="col-md-6">
            <div className="card">
                <div className="header">
                    <h4>Registrar pago directo</h4>
                </div>
                <form className="form-horizontal" onSubmit={handleSubmit}>
                    <div className="content">

                    <div className="form-group">
                            <label className="col-sm-3 control-label">
                                Fecha
                            </label>
                            <div className="col-sm-9">
                                <DatetimePicker
                                    name="first_contact_date"
                                    onChange={calendarChanged}
                                />
                            </div>
                    </div>

                        <div className="form-group">
                            <label className="col-sm-3 control-label">
                                Recibe servicio
                            </label>
                            <div className="col-sm-9">
                                <Field
                                    type="select"
                                    name="user_contact_id"
                                    required={true}
                                    input={{
                                        name: "user_contact_id",
                                        onChange: e =>onInputChange
                                    }}
                                    options={users}
                                    component={renderField}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-9">
                                <label>Comentarios</label>
                            <textarea
                                    className={"form-control"}
                                    name="paymentComment"
                                    id="paymentComment"
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

export default reduxForm({form:"ExternalPaymentForm",validate})(ExternalPaymentForm);