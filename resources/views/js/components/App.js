import React, { Component} from 'react';
import ReactDOM from 'react-dom';
class App extends Component{

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Create Task</div>
                            <div className="card-body">
                                <form >
                                    <div className="form-group">
                                        
                                        <br />
                                        <button type="submit" className="btn btn-primary">
                                            Create Task
                                        </button>
                                    </div>
                                </form>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;