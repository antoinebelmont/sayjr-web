import React from "react";
import { Field, reduxForm } from "redux-form";
import renderField from "components/FormInputs/renderField";

const StatusAttendant = ({ catalogs, onInputChange }) => {
    if(catalogs.dataMatrix.id === ''){
        return (<div></div>)
    }
    return (
        <div>
            <div className="form-group">
                <label className="col-sm-3 control-label">
                    Técnico asignado 
                </label>
                <div className="col-sm-9">
                    <Field
                        type="select"
                        name="user_assigned_id"
                        input={{
                            name: "user_assigned_id",
                            value: catalogs.dataMatrix.user_assigned_id,
                            onChange: value => onInputChange(value, "type_id")
                        }}
                        required={true}
                        component={renderField}
                        options={catalogs.users}
                    />
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-3 control-label">
                    Status
                </label>
                <div className="col-sm-9">
                    <Field
                        type="select"
                        name="status"
                        input={{
                            name: "status",
                            value: catalogs.dataMatrix.status,
                            onChange: value => onInputChange(value, "status")
                        }}
                        required={true}
                        component={renderField}
                        options={catalogs.statuses}
                    />
                </div>
            </div>
        </div>
    );
};

export default StatusAttendant;
