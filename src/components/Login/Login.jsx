import React from 'react';
import {Field, reduxForm} from "redux-form";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {Navigate} from "react-router-dom";
import style from './../common/FormControls/FormControls.module.css'


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
                       type={"password"}
                />
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"} /> remember me
            </div>
            {   props.error &&
                <div className={style.formSummaryError}>
                    {props.error}
                </div>
            }
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

        props.login(values);
    }

    if(props.isAuth){
        return <Navigate to="/profile"/>
    }

    return (
        <>
            <h1>Login</h1>

            <LoginReduxForm onSubmit={onSubmitHandler}/>
        </>
    );
}

let mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login);