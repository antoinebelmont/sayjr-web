import React,{Component} from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import {
    getServices
} from "stores/actions/services_actions";
import Actions from './Actions';

class List extends Component{
    state = {
        data: [],
        options : {
            sizePerPage: 10,
            prePage: 'Anterior',
            nextPage: 'Siguiente',
            firstPage: 'Primera',
            lastPage: 'Final',
            hideSizePerPage: false,
          }
      };
    componentDidMount(){
        const ctx = this;
        this.props.getServices().then(action =>{
            if(action.payload.status === 200){
                ctx.setState({
                    data:action.payload.services
                })
            }
        });
    }

    render(){
        return(
            <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="header">
                <h4>Servicios</h4>
              </div>
              <div className="content">
                <BootstrapTable
                  data={this.state.data}
                  bordered={false}
                  striped
                  pagination={true}
                  options={this.state.options}>
                  <TableHeaderColumn
                    dataField='id'
                    isKey
                    width="50px"
                    dataSort>
                    #
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='title'
                    width="14%"
                    filter={ { type: 'TextFilter'} }
                    dataSort>
                    Servicio
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='client_name'
                    width="14%"
                    dataSort>
                    Cliente
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='status'
                    width="14%">
                    Estado
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='first_contact_date'
                    width="14%"
                    dataSort>
                    Primer contacto
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='service_date'
                    width="14%"
                    dataSort>
                    Cita
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='attendant'
                    width="14%"
                    dataSort>
                    Técnico asignado
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
      </div>
        )
    }
}
function mapStateToProps(state) {
    return {};
}

function mapActionsToprops(dispatch) {
    return bindActionCreators(
        { getServices },
        dispatch
    );
}
export default withRouter(
    connect(
        mapStateToProps,
        mapActionsToprops
    )(List)
);