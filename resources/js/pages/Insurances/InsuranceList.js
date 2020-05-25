import React, { Component } from "react";
import Switch from "components/Switch";
import { bindActionCreators } from "redux";
import { getInsurances,changeInsuranceStatus } from 'stores/actions/insurance_coverages_actions';
import {connect} from 'react-redux';

class InsuranceList extends Component {

    state = {
        items: [],
        itemsperpage:5,
        nocolumns:0
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
        var status;
        this.setState({
            items: this.state.items.map(item => {
                if (item.id === itemId) {
                    item.status = !item.status;
                    status = item.status;
                }
                return item;
            })
        });
        this.props.changeInsuranceStatus({id:itemId,status:status});
    };

    render() {
        let { items } = this.state;
        return (
            <div className="card">
                <div className="header">
                    <h4 className="title">
                        Aseguradoras
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
                                    <td><a href={`/insurance/edit/${item.id}`}>{item.name}</a></td>
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
    return bindActionCreators({getInsurances,changeInsuranceStatus},dispatch)
}

export default connect(mapStateToProps,mapActionsToProps)(InsuranceList);
