import React from "react";
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Select from "./Select";

const renderField = props => (
    <div>
        {(props.type === "email" ||
            props.type === "password" ||
            props.type === "text" ||
            props.type === "hidden" ||
            props.type === "number") && <TextInput {...props} />}
        {props.type === "checkbox" && <Checkbox {...props} />}
        {props.type === "radio" && <Radio {...props} />}
        {props.type === "select" && <Select {...props} />}
    </div>
);

export default renderField;
