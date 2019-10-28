import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { getServiceDetail } from "stores/actions/services_actions";
import GoogleMap from "pages/MapsPage/GoogleMap";

class CreateForm extends Component {
    state = {
        service: {}
    };
    componentDidMount() {
        let ctx = this;
        this.props.getServiceDetail(this.props.match.params.id).then(action => {
            if (action.payload.status === 200) {
                ctx.setState({
                    service: { ...action.payload.service }
                });
            }
            console.log(ctx.state.service);
        });
    }
    render() {
        let service = this.state.service;
        return (
            <div className="card card-plain">
                <div className="header">
                    <h4 className="title">Detalle de servicio
                    
                    </h4>

                    <div className="category align-right-elements">
                        <div className="content buttons-with-margin">
                            <a className="btn btn-default btn-fill btn-wd" href={`/service/edit/${service.id}`}>Editar</a>
                            <button className="btn btn-primary btn-fill btn-wd">Comentar</button>
                            <button className="btn btn-info btn-fill btn-wd">Facturar</button>
                        </div>
                    </div>
                </div>
                <div className="content table-responsive table-full-width">
                    <table className="table table-hover">
                        {/* <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Country</th>
            <th>City</th>
          </tr>
        </thead> */}
                        <tbody>
                            <tr>
                                <td className="info col-sm-6 col-lg-3">
                                    Servicio
                                </td>
                                <td className="col-sm-6 col-lg-3">
                                    {service.title}
                                </td>
                                <td className="info col-sm-6 col-lg-3">
                                    Cliente
                                </td>
                                <td className="col-sm-6 col-lg-3">
                                    {service.client_name}
                                </td>
                            </tr>
                            <tr>
                                <td className="info col-sm-6 col-lg-3">
                                    Aseguradora
                                </td>
                                <td className="col-sm-6 col-lg-3">
                                    {service.insurance}
                                </td>
                                <td className="info col-sm-6 col-lg-3">
                                    Cobertura
                                </td>
                                <td className="col-sm-6 col-lg-3">
                                    {service.account}
                                </td>
                            </tr>
                            <tr>
                                <td className="info col-sm-6 col-lg-3">Tipo</td>
                                <td className="col-sm-6 col-lg-3">
                                    {service.service_type}
                                </td>
                                <td className="info col-sm-6 col-lg-3">
                                    Reporte
                                </td>
                                <td className="col-sm-6 col-lg-3">
                                    {service.description}
                                </td>
                            </tr>
                            <tr>
                                <td className="info col-sm-6 col-lg-3">
                                    Primer Contacto
                                </td>
                                <td className="col-sm-6 col-lg-3">
                                    {service.first_contact_date}
                                </td>
                                <td className="info col-sm-6 col-lg-3">Cita</td>
                                <td className="col-sm-6 col-lg-3">
                                    {service.service_date}
                                </td>
                            </tr>
                            <tr>
                                <td className="info col-sm-6 col-lg-3">
                                    Recibido por
                                </td>
                                <td className="col-sm-6 col-lg-3">
                                    {service.receptor}
                                </td>
                                <td className="info col-sm-6 col-lg-3">Técnico asignado</td>
                                <td className="col-sm-6 col-lg-3">
                                    {service.attendant}
                                </td>
                            </tr>
                            <tr>
                                <td className="info col-sm-6 col-lg-3">
                                    Dirección
                                </td>
                                <td className="col-sm-6 col-lg-3" colSpan="3">
                                    {service.address}
                                </td>
                            </tr>
                            <tr>
                                <td
                                    className="info col-sm-6 col-lg-3"
                                    colSpan="4"
                                >
                                    <GoogleMap
                                        handleDrag={() => {}}
                                        lat={service.lat}
                                        lon={service.lon}
                                        zoom={18}
                                        draggable={false}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {};
}

function mapActionsToprops(dispatch) {
    return bindActionCreators({ getServiceDetail }, dispatch);
}
export default withRouter(
    connect(
        mapStateToProps,
        mapActionsToprops
    )(CreateForm)
);
