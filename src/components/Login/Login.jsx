import React from 'react';
import {Field, reduxForm} from "redux-form";
import {setAuthInfo} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}
                       name={"email"}
                       placeholder={"Email"}
                       validate={[required]}
                />
            </div>
            <div>
                <Field component={Input}
                       name={"password"}
                       placeholder={"Password"}
                       validate={[required]}
                />
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"} /> remember me
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