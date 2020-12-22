import React, {Component} from 'react';
import {getUser} from 'stores/actions/users_actions';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class Details extends Component {
    state = {
        dataMatrix: {
            id: '',
            name: '',
            email: '',
            phone: '',
            password: '',
            confirmpassword: ''
        }
    }
    componentDidMount() {
        const ctx = this;
        this.props.getUser(this.props.match.params.id).then(action => {
            if (action.payload.status === 200) {
                if (action.payload !== null) {
                    ctx.setState({
                        dataMatrix: {
                            ...action.payload
                        }
                    });
                    console.log(action.payload)
                }
            }
        });
    }
    render() {
        return <div className="card card-plain">
            <div className="header">
                            <h4 className="title">Detalle de usuario </h4>
                            <p className="category">
                                
                            </p>
                        </div>
        <div className="content table-responsive table-full-width">
            <table className="table table-hover">
                <tbody>
                    <tr>
                        <td className="info col-sm-6 col-lg-3">Id de usuario</td>
                        <td className="col-sm-6 col-lg-3">
                            {this.state.dataMatrix.id}
                        </td>
                    </tr>
                    <tr>
                        <td className="info col-sm-6 col-lg-3">Nombre</td>
                        <td className="col-sm-6 col-lg-3">
                            {this.state.dataMatrix.name}
                        </td>
                    </tr>
                    <tr>
                        <td className="info col-sm-6 col-lg-3">Correo</td>
                        <td className="col-sm-6 col-lg-3">
                            {this.state.dataMatrix.email}
                        </td>
                    </tr>
                    <tr>
                        <td className="info col-sm-6 col-lg-3">Teléfono</td>
                        <td className="col-sm-6 col-lg-3">
                            {this.state.dataMatrix.phone}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    }
}
function mapStateToProps(state) {
    return {};
}

function mapActionsToprops(dispatch) {
    return bindActionCreators({
        getUser
    }, dispatch);
}
export default connect(mapStateToProps, mapActionsToprops)(Details);
