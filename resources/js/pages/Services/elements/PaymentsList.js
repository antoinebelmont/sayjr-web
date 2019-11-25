import React from "react";
import { Accordion, Panel } from "react-bootstrap";

const PaymentsList = ({ payments }) => (
    <div className="card">
        <div className="header">
            <h4 className="title">Pagos Extras</h4>
            <p className="category"></p>
        </div>
        <div className="content">
            <div className="panel-group" id="accordion">
                <Accordion>
                    {payments.map((obj, index) => (
                        <Panel
                            id={obj.id}
                            header={
                                <span>
                                    {obj.receiver_id} el {obj.pay_date}
                                    <b className="caret"></b>
                                    
                                </span>
                            }
                            eventKey={obj.id}
                        >
                            <div className="card card-plain">
                                        <div className="content table-responsive table-full-width">
                                            <table className="table table-hover">
                                                <tbody>
                                                    <tr>
                                                        <td className="info col-sm-6 col-lg-3">
                                                            Fecha
                                                        </td>
                                                        <td className="col-sm-6 col-lg-3">
                                                            {
                                                                obj.pay_date
                                                            }
                                                        </td>
                                                        <td className="info col-sm-6 col-lg-3">
                                                            Recibe
                                                        </td>
                                                        <td className="col-sm-6 col-lg-3">
                                                            {
                                                                obj.receiver_id
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="info col-sm-6 col-lg-3">
                                                            Monto
                                                        </td>
                                                        <td className="col-sm-6 col-lg-3">
                                                            {
                                                                obj.amount
                                                            }
                                                        </td>
                                                        <td className="info col-sm-6 col-lg-3">
                                                            Autoriza
                                                        </td>
                                                        <td className="col-sm-6 col-lg-3">
                                                            {
                                                                obj.authorized_by
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="info col-sm-6 col-lg-3">
                                                            Comentarios
                                                        </td>
                                                        <td className="col-sm-6 col-lg-3">
                                                            {
                                                                obj.comments
                                                            }
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                        </Panel>
                    ))}
                </Accordion>
            </div>
        </div>
    </div>
);

export default PaymentsList;
