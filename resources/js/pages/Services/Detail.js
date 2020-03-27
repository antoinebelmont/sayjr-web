import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
    getServiceDetail,
    createComment,
    getServiceComments,
    getCatalogs,
    createPayment,
    getServiceExtraPayments,
    createInvoice
} from "stores/actions/services_actions";
import DetailCard from "./elements/DetailCard";
import { Tabs, Tab } from "react-bootstrap";
import CommentForm from "./elements/CommentForm";
import CommentsList from "./elements/CommentsList";
import PaymentsList from "./elements/PaymentsList";
import ExternalPaymentForm from "./elements/ExternalPaymentForm";
import InsuranceForm from "./elements/InvoiceForm";

class CreateForm extends Component {
    state = {
        service: {},
        comment: "",
        comments: [],
        users: [],
        serviceId: this.props.match.params.id,
        pay_date: new Date(),
        payments: [],
        invoice: {}
    };
    calendarChanged = date => {
        this.setState({ pay_date: date });
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
        this.props.getServiceDetail(this.props.match.params.id).then(action => {
            if (action.payload.status === 200) {
                ctx.setState({
                    service: { ...action.payload.service }
                });
            }
        });
        this.props
            .getServiceExtraPayments(this.props.match.params.id)
            .then(action => {
                if (action.payload.status === 200) {
                    ctx.setState({
                        payments: action.payload.payments
                    });
                }
            });
        this.props
            .getServiceComments(this.props.match.params.id)
            .then(action => {
                if (action.payload.status === 200) {
                    ctx.setState({
                        comments: action.payload.comments
                    });
                }
            });
    }

    handleInvoiceSubmit = e => {
        e.preventDefault();
        let ctx = this;
        let data = {
            service_id: this.state.serviceId,
            closing_number: this.state.closing_number,
            number: this.state.number,
            status: 1,
            comments: this.state.invoiceComment
        };
        this.props.createInvoice(data).then(action => {
            if (action.payload.status === 200) {
                ctx.setState({
                    invoice: action.payload.invoice
                });
            }
            console.log(ctx.state.invoice);
        });
    };

    handlePaymentSubmit = e => {
        e.preventDefault();
        let ctx = this;
        let data = {
            service_id: this.state.serviceId,
            pay_date: this.state.pay_date,
            authorized_by: this.state.authorized_by,
            receiver_id: this.state.receiver_id,
            comments: this.state.paymentComment,
            amount: this.state.amount
        };
        this.props.createPayment(data).then(action => {
            if (action.payload.status === 200) {
                ctx.setState({
                    payments: action.payload.payments
                });
                // e.target.value = '';
                //document.getElementById('commentForm').value = '';
            }
        });
    };

    onPaymentInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onInvoiceInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        let ctx = this;
        this.props
            .createComment(this.state.comment, this.state.service.id)
            .then(action => {
                if (action.payload.status === 200) {
                    ctx.setState({
                        comments: action.payload.comments,
                        comment: ""
                    });
                    // e.target.value = '';
                    document.getElementById("commentForm").value = "";
                }
            });
    };
    onInputChange = e => {
        this.setState({
            comment: e.target.value
        });
    };

    render() {
        let service = this.state.service;
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="header">
                            <h4 className="title">Servicio </h4>
                            <p className="category">
                                
                            </p>
                        </div>
                        <div className="content content-full-width">
                            <Tabs defaultActiveKey={1} id="tab-with-icons">
                                <Tab
                                    eventKey={1}
                                    title={
                                        <span>
                                            <i className="fa fa-info"></i> Info
                                        </span>
                                    }
                                >
                                    <DetailCard
                                        service={service}
                                        invoice={this.state.invoice}
                                    />
                                </Tab>
                                <Tab
                                    eventKey={2}
                                    title={
                                        <span>
                                            <i className="fa pe-7s-chat"></i>{" "}
                                            Comentarios
                                        </span>
                                    }
                                >
                                    <CommentForm
                                        handleSubmit={this.handleSubmit}
                                        onInputChange={this.onInputChange}
                                    />
                                    <CommentsList
                                        comments={this.state.comments}
                                    />
                                </Tab>
                                <Tab
                                    eventKey={3}
                                    title={
                                        <span>
                                            <i className="fa fa-cube"></i> Pago
                                            extra
                                        </span>
                                    }
                                >
                                    <ExternalPaymentForm
                                        handleSubmit={this.handlePaymentSubmit}
                                        onInputChange={
                                            this.onPaymentInputChange
                                        }
                                        calendarChanged={this.calendarChanged}
                                        pay_date={this.state.pay_date}
                                        users={this.state.users}
                                    />

                                    <PaymentsList
                                        payments={this.state.payments}
                                    />
                                </Tab>
                                { this.state.invoice.number === undefined && 
                                        <Tab
                                            eventKey={4}
                                            title={
                                                <span>
                                                    <i className="fa fa-cube"></i>
                                                    Factura
                                                </span>
                                            }
                                        >
                                            <InsuranceForm
                                                handleSubmit={
                                                    this.handleInvoiceSubmit
                                                }
                                                onInputChange={
                                                    this.onInvoiceInputChange
                                                }
                                                users={this.state.users}
                                            />
                                        </Tab>
                                        }
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {};
}

function mapActionsToprops(dispatch) {
    return bindActionCreators(
        {
            getCatalogs,
            getServiceDetail,
            createComment,
            getServiceComments,
            createPayment,
            getServiceExtraPayments,
            createInvoice
        },
        dispatch
    );
}
export default withRouter(
    connect(mapStateToProps, mapActionsToprops)(CreateForm)
);
