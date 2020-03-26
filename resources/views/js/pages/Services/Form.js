import React from "react";
import { Field, reduxForm } from "redux-form";
import renderField from "components/FormInputs/renderField";
import DatetimePicker from "react-datetime-picker";
import _ from "lodash";
import GoogleMap from "pages/MapsPage/GoogleMap";
import PlacesAutocomplete from "react-places-autocomplete";
import StatusAttendant from './StatusAttendant';

const validate = values => {};

const Form = ({
    handleSubmit,
    onSubmit,
    catalogs,
    calendarChanged,
    calendarServiceChanged,
    handleChange,
    handleSelect,
    handleDrag,
    onInputChange,
    onChangeHandle
}) => (
    <div className="row">
        <div className="col-md-12">
            <div className="card">
                <div className="header">
                    <h4>{catalogs.formType} servicio</h4>
                </div>
                <form className="form-horizontal" onSubmit={handleSubmit}>
                    <div className="content">
                        <div className="form-group">
                            <label className="col-sm-3 control-label">
                                Servicio
                            </label>
                            <div className="col-sm-9">
                                <Field
                                    type="text"
                                    name="title"
                                    input={{
                                        name: "title",
                                        value: catalogs.dataMatrix.title,
                                        onChange: value =>
                                            onInputChange(value, "title")
                                    }}
                                    required={true}
                                    component={renderField}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-sm-3 control-label">
                                Cliente
                            </label>
                            <div className="col-sm-9">
                                <Field
                                    type="text"
                                    name="client_name"
                                    input={{
                                        name: "client_name",
                                        defaultValue:
                                            catalogs.dataMatrix.client_name
                                    }}
                                    required={true}
                                    component={renderField}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-sm-3 control-label">
                                Tipo de Servicio
                            </label>
                            <div className="col-sm-9">
                                <Field
                                    type="select"
                                    name="select"
                                    required={true}
                                    input={{
                                        name: "type_id",
                                        value: catalogs.dataMatrix.type_id,
                                        onChange: value =>
                                            onInputChange(value, "type_id")
                                    }}
                                    options={catalogs.types}
                                    component={renderField}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-sm-3 control-label">
                                Reporte
                            </label>
                            <div className="col-sm-9">
                                <textarea
                                    className={"form-control"}
                                    defaultValue={
                                        catalogs.dataMatrix.description
                                    }
                                    name="description"
                                    required={true}
                                    onChange={() => {}}
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
                                        onChange: value => {
                                            onChangeHandle(value),
                                                onInputChange(
                                                    value,
                                                    "insurance_id"
                                                );
                                        }
                                    }}
                                    options={catalogs.insurances}
                                    component={renderField}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-sm-3 control-label">
                                Cobertura
                            </label>
                            <div className="col-sm-9">
                                <Field
                                    type="select"
                                    name="select"
                                    required={true}
                                    input={{
                                        name: "account_coverage_id",
                                        value:
                                            catalogs.dataMatrix
                                                .account_coverage_id,
                                        onChange: value =>
                                            onInputChange(
                                                value,
                                                "account_coverage_id"
                                            )
                                    }}
                                    options={catalogs.accountCoverages}
                                    component={renderField}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-sm-3 control-label">
                                Dirección
                            </label>
                            <div className="col-sm-9">
                                <PlacesAutocomplete
                                    value={catalogs.address}
                                    onChange={handleChange}
                                    onSelect={handleSelect}
                                >
                                    {({
                                        getInputProps,
                                        suggestions,
                                        getSuggestionItemProps,
                                        loading
                                    }) => (
                                        <div>
                                            <input
                                                {...getInputProps({
                                                    placeholder: "",
                                                    className:
                                                        "location-search-input form-control"
                                                })}
                                                value={catalogs.address}
                                                name="address"
                                                required={true}
                                            />
                                            <div className="autocomplete-dropdown-container">
                                                {loading && (
                                                    <div>Loading...</div>
                                                )}
                                                {suggestions.map(suggestion => {
                                                    const className = suggestion.active
                                                        ? "suggestion-item--active"
                                                        : "suggestion-item";
                                                    // inline style for demonstration purpose
                                                    const style = suggestion.active
                                                        ? {
                                                              backgroundColor:
                                                                  "#red",
                                                              cursor: "pointer"
                                                          }
                                                        : {
                                                              backgroundColor:
                                                                  "#blue",
                                                              cursor: "pointer"
                                                          };
                                                    return (
                                                        <div
                                                            {...getSuggestionItemProps(
                                                                suggestion,
                                                                {
                                                                    className,
                                                                    style
                                                                }
                                                            )}
                                                        >
                                                            <span>
                                                                {
                                                                    suggestion.description
                                                                }
                                                            </span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </PlacesAutocomplete>
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
                                        value:
                                            catalogs.dataMatrix.user_contact_id,
                                        onChange: value =>
                                            onInputChange(
                                                value,
                                                "user_contact_id"
                                            )
                                    }}
                                    options={catalogs.users}
                                    component={renderField}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-sm-3 control-label">
                                Primer contacto
                            </label>
                            <div className="col-sm-9">
                                <DatetimePicker
                                    name="first_contact_date"
                                    value={catalogs.firstContact}
                                    onChange={calendarChanged}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-sm-3 control-label">
                                Cita
                            </label>
                            <div className="col-sm-9">
                                <DatetimePicker
                                    name="service_date"
                                    value={catalogs.serviceDate}
                                    onChange={calendarServiceChanged}
                                />
                            </div>
                        </div>
                        <StatusAttendant catalogs={catalogs} statuses={catalogs.statuses} onInputChange={onInputChange}/>
                        <div className="form-group">
                            <label className="col-sm-3 control-label">
                                Ubicación
                            </label>
                            <div className="col-sm-9">
                                <GoogleMap
                                    handleDrag={handleDrag}
                                    lat={catalogs.lat}
                                    lon={catalogs.lon}
                                    zoom={catalogs.zoom}
                                    draggable={true}
                                />
                            </div>
                            <input
                                type="hidden"
                                name="latitude"
                                value={catalogs.lat}
                            />
                            <input
                                type="hidden"
                                name="longitude"
                                value={catalogs.lon}
                            />
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
);

export default reduxForm({
    form: "Form",
    validate
})(Form);
