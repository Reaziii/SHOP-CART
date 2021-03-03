import React, { Component } from 'react'
import { auth, firestore } from '../../../firebase/firebase.utilis';

export default class Signup extends Component {

    func = (event) => {
        var {fname,lname,email,password,confirm_password} = event.target.elements;
        event.preventDefault();

        var displayName = fname.value+' '+lname.value;
        var created_at = new Date();
        password = password.value;
        email = email.value;
        confirm_password = confirm_password.value;
        if(password!==confirm_password){
            return;
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            const {uid} = user;
            firestore.doc("users/"+uid).set({
                displayName,
                uid,email,created_at
            })
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
    }
    render() {
        return (
            <div className="sign-in">
                <h1>I have a account</h1>
                <p>Sign in with email and password</p>
                <form className="sign-form" onSubmit={this.func}>
                    <input type="text" name="fname" placeholder="name" required/>
                    <input type="text" name="lname" placeholder="name" required/>
                    <input type="email" name="email" placeholder="email" required />
                    <input type="password" name="password" placeholder="password" required />
                    <input type="password" name="confirm_password" placeholder="confirm password" required />
                    <input onClick={this.shotpre}  type="submit" className="btn btn-success" name="submit"/>
                    
                </form>
                
            </div>
        )
    }
}
