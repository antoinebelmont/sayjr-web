import React, { Component } from 'react';
import cx from 'classnames';

class Select extends Component{
    render(){
        let{
            input,
            label,
            options,
            onChange,
            required
        } = this.props;
        return (
            <div className={
                cx("select",{})
            }>
                {label}
                <select
                 {...input}
                  className="form-control" 
                  required={required}>
                    <option value="">---</option>
                {
                    options.map(item => (
                        <option key={item.id} value={item.id}> {item.name}</option>
                    ))
                }
                </select>
            </div>
        );
    } 
}

export default Select;