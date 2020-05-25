import React, { Component } from "react";
import CoverageCreate from './CoverageCreate';

class AccountEdit extends Component {
    state = {
        id: ""
    };
    componentDidMount(props) {
        this.setState({ id: this.props.match.params.id });
    }
    render() {
        return <CoverageCreate id={this.props.match.params.id}/>;
    }
}

export default AccountEdit;
