import React from 'react';
import styles from './FormControls.module.css'


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