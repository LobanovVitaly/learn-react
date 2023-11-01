import React from 'react';
import {Field, reduxForm} from "redux-form";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";
import {createField, CreateField, Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {Navigate} from "react-router-dom";
import style from './../common/FormControls/FormControls.module.css'


//const LoginForm = (props) => {
const LoginForm = ({handleSubmit, error}) => { // деструктурируем props сразу на нужные аргументы
    return (
        <form onSubmit={handleSubmit}>
            {createField(Input, "email", "Email", [required])}
            {createField(Input, "password", "Password", [required], {type: "password"})}
            {createField(Input, "rememberMe", null, null, {type: "checkbox"}, "remember me")}

            {   error &&
                <div className={style.formSummaryError}>
                    {error}
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