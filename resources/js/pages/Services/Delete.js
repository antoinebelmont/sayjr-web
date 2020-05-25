import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
    deleteService
} from "stores/actions/services_actions";
import { withRouter,Redirect } from "react-router-dom";

class ServiceDelete extends Component {
    state = {
        serviceId: ""
    };
    componentDidMount(props) {
        this.setState({ serviceId: this.props.match.params.id });
        this.props.deleteService(this.props.match.params.id).then(action => {
            if (action.payload.status === 200) {
                ctx.props.history.push('/service/list');
                ctx.props.history.replace('/service/list');
            }
        });
    }
    render() {
        return <Redirect to='/service/list' />;
    }
}
function mapStateToProps(state) {
    return {};
}

function mapActionsToprops(dispatch) {
    return bindActionCreators(
        { deleteService },
        dispatch
    );
}
export default withRouter(
    connect(
        mapStateToProps,
        mapActionsToprops
    )(ServiceDelete)
);