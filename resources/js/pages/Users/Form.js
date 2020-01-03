import React from "react";
import { Field, reduxForm } from "redux-form";
import renderField from "components/FormInputs/renderField";
import _ from "lodash";

const Form = ({}) => (<div>aaaaa</div>)
const validate = values => {};
export default reduxForm({
    form: "Form",
    validate
})(Form);




