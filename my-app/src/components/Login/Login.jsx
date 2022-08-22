import React from "react";
import s from'./Login.module.css';
import {Field, reduxForm} from "redux-form";



const LoginForm=(props)=>{
    return(
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field type="text" name={'login'} placeholder={'Login'} component={'input'}/>
                </div>
                <div>
                    <Field type="text"  name={'password'} placeholder={'Password'} component={'input'}/>
                </div>
                <div>
                    <Field component={'input'} name={'rememberMe'} type='checkbox'/>Remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    );

}
const LoginReduxForm=reduxForm({
    form:'login'
})(LoginForm)

let  Login=(props)=>{
    const onSubmit=(formData)=>{
        console.log(formData);
    }

    return(
        <div className={s.allLogin}>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>);

}
export default Login;