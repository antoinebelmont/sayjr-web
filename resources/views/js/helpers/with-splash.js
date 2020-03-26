import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { checkIsLogged, isLoading, reloadToken } from "stores/actions/auth_actions";

class SplashScreen extends Component {
    componentDidMount() {
        const ctx = this;
        ctx.props.reloadToken();
        ctx.props.checkIsLogged().then(action => {
            setTimeout(() => {
                ctx.props.isLoading(false);
            }, 3000);
        });
    }

    render() {
        return (
            <div>
                <img src="https://i.imgur.com/T3Ht7S3.gif" />
            </div>
        );
    }
}

function mapActionsToProps(dispatch) {
    return bindActionCreators(
        {
            // acciones
            checkIsLogged,
            isLoading,
            reloadToken
        },
        dispatch
    );
}

SplashScreen = connect(
    null,
    mapActionsToProps
)(SplashScreen);

//Componente funcional que decide si ve splash o wrapper

const withSplash = WrappedComponent => {
    return connect(state => ({
        isLoadingSplash: state.Login.isLoadingSplash
    }))(
        class extends React.Component {
            render() {
                if (this.props.isLoadingSplash)
                    return <SplashScreen {...this.props}></SplashScreen>;
                return <WrappedComponent {...this.props} />;
            }
        }
    );
};

export default withSplash;
