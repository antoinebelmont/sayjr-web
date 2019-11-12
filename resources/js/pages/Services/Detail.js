import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
    getServiceDetail,
    createComment,
    getServiceComments,
    getCatalogs
} from "stores/actions/services_actions";
import DetailCard from "./elements/DetailCard";
import { Tabs, Tab } from "react-bootstrap";
import CommentForm from "./elements/CommentForm";
import CommentsList from './elements/CommentsList';
import ExternalPaymentForm from './elements/ExternalPaymentForm';

class CreateForm extends Component {
    state = {
        service: {},
        comment: "",
        comments:[],
        users: []
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
        this.props.getServiceComments(this.props.match.params.id).then(action => {
            if (action.payload.status === 200) {
                ctx.setState({
                    comments: action.payload.comments 
                });
                console.log(ctx.state.comments)
            }
        });
    }

    handlePaymentSubmit = e =>{
        e.preventDefault();
        console.log('form enviado');
    }

    onPaymentInputChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(this.state);
    }

    handleSubmit = e => {
        e.preventDefault();
        let ctx  = this;
        this.props
            .createComment(this.state.comment, this.state.service.id)
            .then(action => {
                if (action.payload.status === 200) {
                    console.log(action.payload.comments);
                    ctx.setState({
                        comments:  action.payload.comments,
                        comment: ""
                    });
                    // e.target.value = '';
                    document.getElementById('commentForm').value = '';
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
                            <h4 className="title">Tabs &amp; Icons</h4>
                            <p className="category">
                                Tabs with icons and full width
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
                                    <DetailCard service={service} />
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
                                    <CommentsList comments={this.state.comments} />
                                    
                                </Tab>
                                <Tab
                                    eventKey={3}
                                    title={
                                        <span>
                                            <i className="fa fa-cube"></i> Style
                                        </span>
                                    }
                                >
                                    <ExternalPaymentForm 
                                        handleSubmit={this.handlePaymentSubmit}
                                        onInputChange={this.onPaymentInputChange}
                                        users={this.state.users}
                                    />
                                </Tab>
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
    return bindActionCreators({ 
        getCatalogs,getServiceDetail, createComment,getServiceComments }, dispatch);
}
export default withRouter(
    connect(
        mapStateToProps,
        mapActionsToprops
    )(CreateForm)
);
