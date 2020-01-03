import _ from "lodash";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Form from "./Form";
import { withRouter } from "react-router-dom";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

class CreateForm extends Component {
    state = {}
    render(){
        return(<div>aaa</div>)
    }
}

function mapStateToProps(state) {
    return {};
}

function mapActionsToprops(dispatch) {
    return bindActionCreators(
        {  },
        dispatch
    );
}
export default withRouter(
    connect(
        mapStateToProps,
        mapActionsToprops
    )(CreateForm)
);