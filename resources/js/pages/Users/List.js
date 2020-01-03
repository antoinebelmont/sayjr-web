import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { getUsers} from "stores/actions/users_actions";
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Actions from './Actions'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class List extends Component{
    state = {
        users : []
    }
    componentDidMount(){
        console.log('mount')
        const ctx = this;
        this.props.getUsers().then(action => {
            if(action.payload.status === 200){
                ctx.setState({
                    users: action.payload.users
                })
            }
            console.log(ctx.state);
        })
    }
    render(){
        return(<div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="header">
                <h4>Servicios</h4>
              </div>
              <div className="content">
                <BootstrapTable
                  data={this.state.users}
                  bordered={false}
                  striped
                  pagination={true}
                  options={this.state.options}>
                  <TableHeaderColumn
                    dataField='id'
                    isKey
                    width="14%"
                    dataSort>
                    #
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='name'
                    width="14%"
                    filter={ { type: 'TextFilter'} }
                    dataSort>
                    Nombre
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='email'
                    width="14%"
                    dataSort>
                    Correo
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='phone'
                    width="14%">
                    Telefono
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='id'
                    width='14%'
                    dataFormat={Actions}
                    >Acciones</TableHeaderColumn>
                </BootstrapTable>
              </div>
            </div>
          </div>
        </div>
      </div>)
    }
}

function mapStateToProps(state) {
    return {};
}

function mapActionsToprops(dispatch) {
    return bindActionCreators(
        { getUsers },
        dispatch
    );
}
export default withRouter(
    connect(
        mapStateToProps,
        mapActionsToprops
    )(List)
);