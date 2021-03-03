import React, { Component } from 'react'
import Signin from './signin/signin'
import Signup from './signup/signup'
import {auth} from '../../firebase/firebase.utilis'
import {withRouter} from 'react-router-dom'


 class Signin_signup extends Component {
    constructor(){
        super();
        this.state={
            user : null,
        }
        auth.onAuthStateChanged(user=>{
            if(user){
                const {history} = this.props;
                history.push('/');
            }
        })
        
    }
    
    
        
    
    render() {
        
        return (
            <div className="row">
                <div className="col-6">
                    <Signin/>
                </div>
                <div className="col-6">
                    <Signup/>

                </div>
            </div>
        )
    }
}
export default withRouter(Signin_signup);
