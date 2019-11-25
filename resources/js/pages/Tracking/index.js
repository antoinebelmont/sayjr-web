import React from 'react';
import { connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getTracking} from 'stores/actions/services_actions';
import Pending from './Pending';
import Appointed from './Appointed';


class Tracking extends React.Component {
    state = {
        pending:[],
        appointed:[],
        attended:[]
    }
    componentDidMount(){
        this.refreshTracking();
        setInterval(this.refreshTracking,3000);
    }

    refreshTracking =() => {
        let ctx = this;
        this.props.getTracking().then(action =>{
            if(action.payload.status === 200){
                ctx.setState({
                    ...action.payload.tracking
                })
            }
        })
    }

    render(){
        return (
            <div className='col-md-12'>
                <div className='row'>
                    <Pending pendingServices={this.state.pending}/>
                    <Appointed appointedServices={this.state.appointed}/>
                </div>
                <div className='row'>
                    <Appointed appointedServices={this.state.appointed}/>
                    <Pending pendingServices={this.state.pending}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {};
}

function mapActionsToProps(dispatch){
    return bindActionCreators({getTracking},dispatch);
}


export default withRouter(
    connect(mapStateToProps,mapActionsToProps)(Tracking)
);