
import React from "react";

const Checkbox = ({ label, isSelected, onCheckboxChange,key,value,name }) => (
  <div className="form-check col-md-3">
      <input
        type="checkbox"
        name={name}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input"
        key={key}
        value={value}
      />

    <label>      
      {label}
    </label>
  </div>
);

export default Checkbox;

