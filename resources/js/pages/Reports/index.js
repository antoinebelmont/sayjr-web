import React, { Component } from "react";
import { CSVLink, CSVDownload } from "react-csv";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {} from "stores/actions/services_actions";
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
        checkboxes: OPTIONS.reduce(
            (options, option) => ({
                ...options,
                [option]: false
            }),
            {}
        )
    };
    componentDidMount() {
    }

    handleCheckboxChange = changeEvent => {
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
            label={option}
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

    render() {
        return (
            <div>
                
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="header">
                                <h4>Agregar comentario</h4>
                            </div>
                            <form className="form-horizontal" onSubmit={this.handleFormSubmit}>
                                <div className="content">
                                    <div className="form-group">
                                        <div className="col-sm-9">
                                            {this.createCheckboxes()}
                                            <textarea
                                                className={"form-control"}
                                                name="description"
                                                id="commentForm"
                                                required={true}
                                                onKeyUp={this.onInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <CSVLink data={this.state.csvData}
                                onClick={() => {
                                    let keys = [];
                                    keys = Object.keys(this.state.checkboxes)
                                        .filter(checkbox => this.state.checkboxes[checkbox]);
                                    return false;
                                }}>Download me</CSVLink>
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
    return bindActionCreators({}, dispatch);
}
export default withRouter(connect(mapStateToProps, mapActionsToprops)(Report));
