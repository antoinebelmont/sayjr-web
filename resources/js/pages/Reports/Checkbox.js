
import React from "react";

const Checkbox = ({ label, isSelected, onCheckboxChange,key,value }) => (
  <div className="form-check">
      <input
        type="checkbox"
        name={label}
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

