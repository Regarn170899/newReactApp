import React from "react";
import s from'./Login.module.css';
import {Field, reduxForm} from "redux-form";
import {newInput} from "../common/FormsControl/FormsControl";
import {maxLengthCreator, requiredField} from "../../utils/validation/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/authReduser";
import { Navigate } from "react-router-dom";


const maxLength40= maxLengthCreator(40)

const LoginForm=(props)=>{
    return(
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={'email'} validate={[requiredField,maxLength40]} placeholder={'Login'} component={newInput}/>
                </div>
                <div>
                    <Field type="password"  name={'password'} validate={[requiredField,maxLength40]} placeholder={'Password'} component={newInput}/>
                </div>
                <div>
                    <Field component={newInput} name={'rememberMe'} type='checkbox'/>Remember me
                </div>
                {props.error && <div className={s.formSummaryError}>
                    {props.error}
                </div>}
                <div>
                    <button >Login</button>
                </div>
            </form>
    );

}
const LoginReduxForm=reduxForm({
    form:'login'
})(LoginForm)

let  Login=(props)=>{
    const onSubmit=(formData)=>{
        console.log(formData)
        props.login(formData.email,formData.password,formData.rememberMe);
    }
    if (props.isAuth===true){
        return <Navigate to={'/profile'}/>
    }

    return(
        <div className={s.allLogin}>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>);

}
const mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth
})
export default connect(mapStateToProps,{login}) (Login);