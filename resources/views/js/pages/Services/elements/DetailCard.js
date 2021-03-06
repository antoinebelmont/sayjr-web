import React from 'react';
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import GoogleMap from "pages/MapsPage/GoogleMap";

const DetailCard = (props) =>(
    <div className="card card-plain">
                {/* <div className="header">

                    <div className="category align-right-elements">
                        <div className="content buttons-with-margin">
                            <a className="btn btn-default btn-fill btn-wd" href={`/service/edit/${props.service.id}`}>Editar</a>
                            <button className="btn btn-primary btn-fill btn-wd">Comentar</button>
                            <button className="btn btn-info btn-fill btn-wd">Facturar</button>
                        </div>
                    </div>
                </div> */}
                <div className="content table-responsive table-full-width">
                    <table className="table table-hover">
                        <tbody>
                            <tr>
                                <td className="info col-sm-6 col-lg-3">
                                    Servicio
                                </td>
                                <td className="col-sm-6 col-lg-3">
                                    {props.service.title}
                                </td>
                                <td className="info col-sm-6 col-lg-3">
                                    Cliente
                                </td>
                                <td className="col-sm-6 col-lg-3">
                                    {props.service.client_name}
                                </td>
                            </tr>
                            <tr>
                                <td className="info col-sm-6 col-lg-3">
                                    Aseguradora
                                </td>
                                <td className="col-sm-6 col-lg-3">
                                    {props.service.insurance}
                                </td>
                                <td className="info col-sm-6 col-lg-3">
                                    Cobertura
                                </td>
                                <td className="col-sm-6 col-lg-3">
                                    {props.service.account}
                                </td>
                            </tr>
                            <tr>
                                <td className="info col-sm-6 col-lg-3">Tipo</td>
                                <td className="col-sm-6 col-lg-3">
                                    {props.service.service_type}
                                </td>
                                <td className="info col-sm-6 col-lg-3">
                                    Reporte
                                </td>
                                <td className="col-sm-6 col-lg-3">
                                    {props.service.description}
                                </td>
                            </tr>
                            <tr>
                                <td className="info col-sm-6 col-lg-3">
                                    Primer Contacto
                                </td>
                                <td className="col-sm-6 col-lg-3">
                                    {props.service.first_contact_date}
                                </td>
                                <td className="info col-sm-6 col-lg-3">Cita</td>
                                <td className="col-sm-6 col-lg-3">
                                    {props.service.service_date}
                                </td>
                            </tr>
                            <tr>
                                <td className="info col-sm-6 col-lg-3">
                                    Recibido por
                                </td>
                                <td className="col-sm-6 col-lg-3">
                                    {props.service.receptor}
                                </td>
                                <td className="info col-sm-6 col-lg-3">Técnico asignado</td>
                                <td className="col-sm-6 col-lg-3">
                                    {props.service.attendant}
                                </td>
                            </tr>
                            <tr>
                                <td className="info col-sm-6 col-lg-3">
                                    Dirección
                                </td>
                                <td className="col-sm-6 col-lg-3" colSpan="3">
                                    {props.service.address}
                                </td>
                            </tr>
                            <tr>
                                <td
                                    className="info col-sm-6 col-lg-3"
                                    colSpan="4"
                                >
                                    <GoogleMap
                                        handleDrag={() => {}}
                                        lat={props.service.lat}
                                        lon={props.service.lon}
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

export default DetailCard;