import React, { Component } from "react";
import { CSVLink, CSVDownload } from "react-csv";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {getReport} from "stores/actions/services_actions";
import Checkbox from "./Checkbox";

const OPTIONS = [
    "id", 
    "client_name", 
    "title",
    "description",
    "type",
    "address",
    "first_contact",
	"insurance",
    "bank",
    "coverage",
    "contact_user",
    "attendant_user",  
    "service_date"
];

class Report extends Component {
    state = {
        csvData: [
            ["firstname", "lastname", "email", "otra cosa"],
            ["Ahmed", "Tomi", "ah@smthing.co.com"],
            ["Raed", "Labes", "rl@smthing.co.com"],
            ["Yezzi", "Min l3b", "ymin@cocococo.com"]
        ],
        data:[],
        headers: [],
        checkboxes: OPTIONS.reduce(
            (options, option) => ({
                ...options,
                [option]: false
            }),
            {}
        ),
        labels:{
                id:'#',
                client_name:'Cliente',
                title:'Servicio',
                description:'Reporte',
                type:'Tipo',
                address:'Dirección',
                first_contact:'Fecha de reporte',
                insurance:'Aseguradora',
                bank:'Banco',
                coverage:'Cobertura',
                contact_user:'Recibe',
                attendant_user:'Técnico',
                service_date:'Cita'
        }
    };
    componentDidMount() {
    }

    handleCheckboxChange = changeEvent => {
        console.log(changeEvent.target.name)
        const { name } = changeEvent.target;
    
        this.setState(prevState => ({
          checkboxes: {
            ...prevState.checkboxes,
            [name]: !prevState.checkboxes[name]
          }
        }));
      };

    createCheckbox = option => (
        <Checkbox
            label={this.state.labels[option]}
            name={option}
            isSelected={this.state.checkboxes[option]}
            onCheckboxChange={this.handleCheckboxChange}
            key={option}
        />
    );

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
    
        Object.keys(this.state.checkboxes)
          .filter(checkbox => this.state.checkboxes[checkbox])
          .forEach(checkbox => {
            console.log(checkbox, "is selected.");
          });
      };

    createCheckboxes = () => OPTIONS.map(this.createCheckbox);

    getReport = () => {
        console.log('call report')
        return false;
    }

    onClickCsv = () => {
        let ctx = this;
        let keys = [];
        let headers = [];
        keys = Object.keys(this.state.checkboxes)
            .filter(checkbox => this.state.checkboxes[checkbox]);
        keys.map(value => {
            headers.push({label:this.state.labels[value],key:value})
        })
        this.setState({
            headers
        });
        this.props.getReport(keys).then(({payload}) => {
            this.setState({
                data:payload.report
            })
            console.log(this.state.data)
            let btn = ctx.refs.csv;
            btn.link.click();
        });
    }

    selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      // BONUS: Can you explain why we pass updater function to setState instead of an object?
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };

    render() {
        return (
            <div>
                
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="header">
                                <h4>Reporte de servicios</h4>
                            </div>
                            <form className="form-horizontal" onSubmit={this.handleFormSubmit}>
                                <div className="content">
                                    <div className="form-group">
                                        <div className="col-sm-9">
                                            {this.createCheckboxes()}
                                        </div>
                                    </div>
                                </div>
                                <div className="float-right">
                                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.selectAll}
                >
                  Todos
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.deselectAll}
                >
                  Ninguno
                </button>
                                <button 
                                type="button"
                                className="btn btn-info btn-fill float-right"
                                onClick={this.onClickCsv}>Bajar reporte </button>
                                <CSVLink ref="csv" 
                                data={this.state.data} 
                                headers={this.state.headers}
                                style={{display:'none'}}/>
                                </div>
                                
                                
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        );
    }
    onInputChange = (value, key) => {
        console.log(key, value);
        this.setState({
            [key]: value
        });
    };
}

function mapStateToProps(state) {
    return {};
}

function mapActionsToprops(dispatch) {
    return bindActionCreators({getReport}, dispatch);
}
export default withRouter(connect(mapStateToProps, mapActionsToprops)(Report));
