import React, { Component } from 'react';
import Switch from "components/Switch";
import { bindActionCreators } from "redux";
import { getAccounts,changeAccountStatus } from 'stores/actions/insurance_coverages_actions';
import {connect} from 'react-redux';

class AccountCoveraje extends Component {

    state = { items:[] }

    componentDidMount(){
        const ctx = this;
        this.props.getAccounts().then((action) => {
            if(action.payload.status === 200){
                ctx.setState({items:action.payload.accounts});
            }
        });
    }

    toggleActive = itemId => {
        var status;
        this.setState({
            items: this.state.items.map(item => {
                if(item.id === itemId){
                    item.status = !item.status;
                    status = item.status;
                }
                return item;
            })
        });
        this.props.changeAccountStatus({id:itemId,status:status});
    };

    
    render() {
        let { items } = this.state;
        return (
            <div className="card">
                <div className="header">
                    <h4 className="title">
                        Cuentas bancarias y cobertura
                    </h4>
                </div>
                <div className="content table-responsive table-full-width">
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Cuenta</th>
                                <th>Monto</th>
                                <th>Aseguradora</th>
                                <th>Estatus</th>
                            </tr>
                        </thead>
                        {/* <TablePagination
                            itemsperpage={this.state.itemsperpage}
                            nocolumns={this.state.nocolumns}
                            items={this.state.items}
                            pagesspan={4}
                        /> */}
                        <tbody>
                            {items.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.bank}</td>
                                    <td>$ {item.coverage}</td>
                                    <td>{item.insuranceAccount}</td>
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
    return bindActionCreators({getAccounts,changeAccountStatus},dispatch)
}

export default connect(mapStateToProps,mapActionsToProps)(AccountCoveraje);