import React from 'react';
import { logout } from '../../stores/actions/auth_actions';

import { bindActionCreators } from "redux";
import { connect} from "react-redux";

class Logout extends React.Component {
    componentDidMount(){
        const ctx = this;
        this.props.logout().then(action => {
            setInterval(() => {
                
                window.location.reload();
            }, 1000);
        })
    }

    render (){
        return (
            <div>Cerrando sesión</div>
        );
    }
}

function mapStateToProps(state){
    return {};
}

function mapActionsToProps(dispatch){
    return bindActionCreators({logout},dispatch);
}

export default connect(mapStateToProps,mapActionsToProps)(Logout)