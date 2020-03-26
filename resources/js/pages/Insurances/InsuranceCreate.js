import _ from "lodash";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {createInsurance,getInsurance} from 'stores/actions/insurance_coverages_actions';
import Form from "./Form";
import { withRouter } from "react-router-dom";

class CreateForm extends Component {
    state = { dataMatrix:{
        id:'',
        name:''
    }};
    formatFormData = data => {
        const ctx = this;
        let dataMatrix = this.state.dataMatrix;
        ctx.complete = true;
        _.forEach(this.state.dataMatrix, (value, attr) => {
            let v = data.get(attr);
            dataMatrix[attr] = v;
            v == "" ? attr != "id" && (ctx.complete = false) : {};
        });

        if (ctx.complete === false) {
            alert("faltan campos");
        } else {
            console.log(this.state.dataMatrix)
            this.props.createInsurance(this.state.dataMatrix).then(action => {
                if (action.payload.status === 200) {
                    ctx.props.history.push('/insurance/insurances');
                    ctx.props.history.replace('/insurance/insurances');
                }
            });
        }
    };
    componentDidMount() {
        const ctx = this;
        this.props.getInsurance(this.props.insuranceId).then(action => {
            if (action.payload.status === 200) {
                if (action.payload !== null) {
                    ctx.setState({
                        dataMatrix: { ...action.payload}
                    });
                }
                console.log(action.payload)
            }
        });
    }
    _onInputChange = (event, key) => {
        let dataMatrix = { ...this.state.dataMatrix };
        dataMatrix[key] = event.target.value;
        this.setState({ dataMatrix });
    };
    render(){
        return(
            <Form 
            handleSubmit= {e =>{
                e.preventDefault();
                    this.formatFormData(new FormData(e.target));
            }}
            onSubmit={e => {
                e.preventDefault;
            }}
            onToggle={this._onToggle}
            onInputChange={this._onInputChange}
            catalogs={this.state}
            />
            );
    };
}

function mapStateToProps(state) {
    return {};
}

function mapActionsToprops(dispatch) {
    return bindActionCreators(
        { createInsurance,getInsurance },
        dispatch
    );
}
export default withRouter(
    connect(
        mapStateToProps,
        mapActionsToprops
    )(CreateForm)
);