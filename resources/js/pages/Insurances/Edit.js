import React, { Component } from "react";
import InsuranceCreate from './InsuranceCreate';

class EditInsurance extends Component {
    state = {
        insuranceId: ""
    };
    componentDidMount(props) {
        this.setState({ insuranceId: this.props.match.params.id });
    }
    render() {
        return <InsuranceCreate insuranceId={this.props.match.params.id}/>;
    }
}

export default EditInsurance;
