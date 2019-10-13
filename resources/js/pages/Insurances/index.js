import React from 'react';
import { Route } from 'react-router-dom';
import InsuranceList from './InsuranceList';

const Insurances = ({match}) => (
    <div className="content">
        <Route exact path={`${match.url}/insurances`} component={InsuranceList} />
    </div>
);

export default Insurances;