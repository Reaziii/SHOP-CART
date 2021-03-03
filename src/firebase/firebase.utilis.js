import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDGy2EVFHWqZcqSexZWxewM4Z03GaP3mpY",
    authDomain: "my-first-web-1595f.firebaseapp.com",
    projectId: "my-first-web-1595f",
    storageBucket: "my-first-web-1595f.appspot.com",
    messagingSenderId: "3931409595",
    appId: "1:3931409595:web:78f8ab991b94ce8a902d9e",
    measurementId: "G-0C3QETTE1N"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provier = new firebase.auth.GoogleAuthProvider();

provier.setCustomParameters({propmt : 'select_account'});
export const Signinwithgoogle = () =>(
    auth.signInWithPopup(provier)
)


export const adduser= async (userauth)=>{
    if(userauth===null){
        return ;
    }
    else{
        const {uid,displayName,email} = userauth;
        const created_at = new Date();
        
        const event =  firestore.doc("users/"+uid)
        const event2 = await event.get();
        if(!event2.exists){
            try{
                await event.set({
                    uid,displayName,email,created_at
                })

            }catch(error){
                console.error("some thing is wrong ",error.message)
            }




        }


    }
    

}











export default firebase;