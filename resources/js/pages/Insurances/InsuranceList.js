import React, { Component } from "react";
import generateData from "pages/Tables/generateData";
import Switch from "components/Switch";
import { bindActionCreators } from "redux";
import { getInsurances } from 'stores/actions/insurance_coverages_actions';
import {connect} from 'react-redux';

class InsuranceList extends Component {

    state = {
        items: []
    };

    componentDidMount(){
        const ctx = this;
        this.props.getInsurances().then((action)=>{
            if(action.payload.status === 200){
                ctx.setState({items:action.payload.insurances});
                console.log(action.payload.insurances);
            }
        });
    }

    toggleActive = itemId => {
        this.setState({
            items: this.state.items.map(item => {
                if (item.id === itemId) {
                    item.status = !item.status;
                }
                return item;
            })
        });
    };

    render() {
        let { items } = this.state;
        return (
            <div className="card">
                <div className="header">
                    <h4 className="title">
                        Aseguradoras
                        <button
                            type="button"
                            className="btn btn-wd btn-success "
                        >
                            <span className="btn-label">
                                <i className="fa fa-check"></i>
                            </span>{" "}
                            Success
                        </button>
                    </h4>
                </div>
                <div className="content table-responsive table-full-width">
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Estatus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.items.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <Switch
                                            value={item.status}
                                            onChange={() =>
                                                this.toggleActive(item.id)
                                            }
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {}
}

function mapActionsToProps(dispatch){
    return bindActionCreators({getInsurances},dispatch)
}

export default connect(mapStateToProps,mapActionsToProps)(InsuranceList);
