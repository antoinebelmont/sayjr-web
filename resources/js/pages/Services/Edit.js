import React, { Component } from "react";
import CreateForm from './CreateForm';

class EditService extends Component {
    state = {
        serviceId: ""
    };
    componentDidMount(props) {
        this.setState({ serviceId: this.props.match.params.id });
    }
    render() {
        return <CreateForm serviceId={this.props.match.params.id}/>;
    }
}

export default EditService;
