import _ from "lodash";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
    getCatalogs,
    changeAccountCoverages,
    createService,
    getService
} from "stores/actions/services_actions";
import Form from "./Form";
import { withRouter } from "react-router-dom";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

class CreateForm extends Component {
    state = {
        insurances: [],
        accountCoverages: [],
        users: [],
        types: [],
        users: [],
        statuses: [],
        address: "",
        address_references:'',
        firstContact: new Date(),
        serviceDate: "",
        attendedDate: "",
        lat: 20.6738686,
        lon: -103.3704326,
        zoom: 13,
        formType: "Crear",
        dataMatrix: {
            id: "",
            title: "",
            description: "",
            type_id: "",
            address: "",
            address_references:'',
            client_phone:"",
            first_contact_date: "",
            insurance_id: "",
            account_coverage_id: "",
            user_contact_id: "",
            user_assigned_id:'',
            service_date: "",
            attended_date: "",
            latitude: "",
            longitude: "",
            client_name: ""
        }
    };

    formatFormData = data => {
        const ctx = this;
        let dataMatrix = this.state.dataMatrix;
        ctx.complete = true;
        _.forEach(this.state.dataMatrix, (value, attr) => {
            let v = data.get(attr);
            dataMatrix[attr] = v;
            v == "" ? attr != "id" && attr != "service_date" && (ctx.complete = false) : {};
        });

        if (ctx.complete === false) {
            alert("faltan campos");
        } else {
            console.log(this.state.dataMatrix)
            this.props.createService(this.state.dataMatrix).then(action => {
                if (action.payload.status === 200) {
                    ctx.props.history.push('/service/list');
                    ctx.props.history.replace('/service/list');
                }
            });
        }
    };

    componentDidMount() {
        const ctx = this;
        this.props.getCatalogs().then(action => {
            if (action.payload.status === 200) {
                ctx.setState({
                    ...action.payload
                });
            }
        });

        this.props.getService(this.props.serviceId).then(action => {
            if (action.payload.status === 200) {
                if (action.payload.service !== null) {
                    ctx.setState({
                        dataMatrix: { ...action.payload.service}
                    });
                    ctx.setState({
                        formType: "Editar",
                        address: action.payload.service.address,
                        lat: action.payload.service.latitude,
                        lon: action.payload.service.longitude,
                        zoom: 18,
                        firstContact: new Date(
                            action.payload.service.first_contact_date
                        ),
                        serviceDate: new Date(action.payload.service.first_contact_date),
                        attendedDate: new Date(action.payload.service.attended_date)
                    });
                }
            }
        });
    }

    updateAccountCoverage = e => {
        const ctx = this;
        ctx.props.changeAccountCoverages(e.target.value).then(action => {
            if (action.payload.status === 200) {
                ctx.setState({
                    accountCoverages: action.payload.accountCoverages
                });
            }
        });
    };

    handleDrag = latLng => {
        const ctx = this;
        ctx.setState({
            lat: latLng.lat(),
            lon: latLng.lng(),
            zoom: 18
        });
    };

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        const ctx = this;
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                ctx.setState({
                    lat: latLng.lat,
                    lon: latLng.lng,
                    zoom: 18,
                    address: address
                });
            })
            .catch(error => console.error("Error", error));
    };

    calendarChanged = date => {
        this.setState({ firstContact: date });
    };
    calendarServiceChanged = date => this.setState({ serviceDate: date });

    calendarAttendedChanged = date => this.setState({ attendedDate: date });

    _onInputChange = (event, key) => {
        let dataMatrix = { ...this.state.dataMatrix };
        dataMatrix[key] = event.target.value;
        this.setState({ dataMatrix });
    };

    render() {
        let { accountCoverages } = this.state;
        return (
            <Form
                handleSubmit={e => {
                    e.preventDefault();
                    this.formatFormData(new FormData(e.target));
                }}
                onSubmit={e => {
                    e.preventDefault;
                }}
                catalogs={this.state}
                onChangeHandle={this.updateAccountCoverage}
                calendarChanged={this.calendarChanged}
                calendarServiceChanged={this.calendarServiceChanged}
                calendarAttendedChanged={this.calendarAttendedChanged}
                handleChange={this.handleChange}
                handleSelect={this.handleSelect}
                children={this.renderPlaces}
                handleDrag={this.handleDrag}
                onInputChange={this._onInputChange}
            />
        );
    }
}
function mapStateToProps(state) {
    return {};
}

function mapActionsToprops(dispatch) {
    return bindActionCreators(
        { getCatalogs, changeAccountCoverages, createService, getService },
        dispatch
    );
}
export default withRouter(
    connect(
        mapStateToProps,
        mapActionsToprops
    )(CreateForm)
);
// export default CreateForm;
