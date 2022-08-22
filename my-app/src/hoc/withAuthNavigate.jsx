import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";


let mapStateToPropsForNavigate = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthNavigate=(Compomnent)=>{
    class NavigateCmponent extends React.Component{
        render(){
            if(this.props.isAuth=== false){return <Navigate to="/login"/>}
            return <Compomnent {...this.props}/>

        }
    }




    let ConnectedAuthNavigateComponent=connect(mapStateToPropsForNavigate)(NavigateCmponent)

    return ConnectedAuthNavigateComponent;

}