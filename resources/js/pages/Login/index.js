import React from 'react'
import { getToken } from 'stores/actions/auth_actions'
import Form from './StackedForm';
import { bindActionCreators } from "redux"
import { connect } from "react-redux";

class Login extends React.Component {

    _login = (form) => {
        this.props.getToken(form).then((action) => {
            if (action.payload.status === 200) {
                // success
                
            } else {
                // error
            }
        })
    }

    render() {
        return (
            <div className="container" style={style.form}>
                <style>{".wrapper {justify-content: center;align-items: center;display: flex}"}</style>
                <Form onSubmit={this._login} />
            </div>
        )
    }
}

let style = {
    form: {
        width: "25%"
    }
}

function mapStateToProps(state) {
    return {}
}

function mapActionsToProps(dispatch) {
    return bindActionCreators({ getToken }, dispatch)
}

export default connect(mapStateToProps, mapActionsToProps)(Login)