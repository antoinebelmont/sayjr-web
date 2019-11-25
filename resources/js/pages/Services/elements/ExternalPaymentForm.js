import React from 'react';
import { Field, reduxForm } from "redux-form";
import renderField from "components/FormInputs/renderField";
import DatetimePicker from "react-datetime-picker";

const validate = values => {};

const ExternalPaymentForm = ({handleSubmit,onInputChange,calendarChanged,users,pay_date}) => (
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
                                    name="pay_date"
                                    value={pay_date}
                                    onChange={calendarChanged}
                                    required={true}
                                />
                            </div>
                    </div>

                        <div className="form-group">
                            <label className="col-sm-3 control-label">
                                Monto
                            </label>
                            <div className="col-sm-9">
                                <Field
                                    type="number"
                                    name="amount"
                                    required={true}
                                    input={{
                                        name: "amount",
                                        step:".01",
                                        onChange: onInputChange
                                    }}
                                    options={users}
                                    component={renderField}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-sm-3 control-label">
                                Recibe pago
                            </label>
                            <div className="col-sm-9">
                                <Field
                                    type="select"
                                    name="receiver_id"
                                    required={true}
                                    input={{
                                        name: "receiver_id",
                                        onChange: onInputChange
                                    }}
                                    options={users}
                                    component={renderField}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-sm-3 control-label">
                                Autoriza
                            </label>
                            <div className="col-sm-9">
                                <Field
                                    type="select"
                                    name="authorized_by"
                                    required={true}
                                    input={{
                                        name: "authorized_by",
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