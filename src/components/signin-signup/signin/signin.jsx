import React, { Component } from 'react'
import './signin.css'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Signinwithgoogle,adduser, auth} from '../../../firebase/firebase.utilis'
export default class Signin extends Component {
    func = (event) => {
        event.preventDefault();
        console.log(event);
        const {email,password} = event.target.elements;
        auth.signInWithEmailAndPassword(email.value,password.value);
    }
    funct = (event) =>
    {
        event.preventDefault();
        Signinwithgoogle();
        


    }
    render() {

        return (
            <div className="sign-in">
            <h1>I have a account</h1>
            <p>Sign in with email and password</p>
                <form className="sign-form" onSubmit= {this.func}>
                    <input type="text" name="email" placeholder="email"/>
                    <input type="password" name="password" placeholder="password"/>
                    <input  type="submit" className="btn btn-danger" name="submit"/>
                    <button onClick={this.funct}  style={{width:'100%'}} className="btn btn-primary">{' '}Signin with google account{' '}</button>

                </form>
            </div>
        )
    }
}
