import React from "react"
import { connect, bindActionCreators } from "redux"
import {setEjemplo} from "stores/actions/ejemplo_actions"
class Dummy extends React.Component {

    componentDidMount() {
        this.props.setEjemplo(100);
    }

    render() {
        return (<div>{this.props.n}</div>)
    }
}

function mapStateToProps(state) {
    return {
        n: state.Example.numero
    }
}
function mapActionsToProps(dispatch) {
    return bindActionCreators({setEjemplo},dispatch)
}

export default connect(mapStateToProps, mapActionsToProps)(Dummy)