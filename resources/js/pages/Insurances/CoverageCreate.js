import _ from "lodash";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {createCoverage,getCoverage,getInsurances} from 'stores/actions/insurance_coverages_actions';
import CoverageForm from "./CoverageForm";
import { withRouter } from "react-router-dom";

class CreateForm extends Component {
    state = { dataMatrix:{
            id:'',
            bank:'',
            insurance_id:'',
            coverage:''
        },
        insurances:[]
    };
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
            this.props.createCoverage(this.state.dataMatrix).then(action => {
                if (action.payload.status === 200) {
                    ctx.props.history.push('/insurance/coverages');
                    ctx.props.history.replace('/insurance/coverages');
                }
            });
        }
    };
    componentDidMount() {
        const ctx = this;
        this.props.getInsurances().then(action => {
            if (action.payload !== null) {
                ctx.setState({
                    insurances: action.payload.insurances
                });
                console.log(ctx.state.insurances);
            }
        });
        this.props.getCoverage(this.props.coverageId).then(action => {
            if (action.payload.status === 200) {
                if (action.payload !== null) {
                    ctx.setState({
                        dataMatrix: { ...action.payload}
                    });
                }
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
            <CoverageForm 
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
        { createCoverage,getCoverage,getInsurances },
        dispatch
    );
}
export default withRouter(
    connect(
        mapStateToProps,
        mapActionsToprops
    )(CreateForm)
);