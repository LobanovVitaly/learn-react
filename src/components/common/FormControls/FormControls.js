import React from 'react';
import styles from './FormControls.module.css'
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";


const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return(
        <div className={styles.formControls + " " + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            <div>
                {hasError && <span>{meta.error}</span> }
            </div>
        </div>
    );
}

export const Textarea = (props) => {
    const {input, ...restProps} = props;
    return( <FormControl {...props}> <textarea {...input} {...restProps} /></FormControl>);
}

export const Input = (props) => {
    const {input, ...restProps} = props;
    return( <FormControl {...props}> <input {...input} {...restProps} /></FormControl>);
}

export const createField = (component, name, placeholder, validators={}, props={}, text="") => {
    return (
        <div>
            <Field component={component}
                  name={name}
                  placeholder={placeholder}
                  validate={validators}
                   {...props}
            /> {text}
        </div>
    )
}