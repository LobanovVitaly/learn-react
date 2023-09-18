import React from 'react';
import {Field, reduxForm} from "redux-form";
import {setAuthInfo} from "../../redux/authReducer";
import {connect} from "react-redux";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"input"} name={"email"} placeholder={"Email"}/>
            </div>
            <div>
                <Field component={"input"} name={"password"} placeholder={"Password"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"} /> remember me
            </div>
            <div>
                <button type={"submit"}>Login</button>
            </div>
        </form>
    );
}

let LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmitHandler = (values) => {
        //console.log(values)

        props.setAuthInfo(values);
    }

    return (
        <>
            <h1>Login</h1>

            <LoginReduxForm onSubmit={onSubmitHandler}/>
        </>
    );
}

export default connect(()=> {}, {setAuthInfo})(Login);