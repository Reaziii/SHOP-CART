import React, { Component } from 'react'
import logo from '../../asset/logo.png'
import {withRouter} from 'react-router-dom'
import './header.scss'
import {iconpack} from '../../asset/fonts'
import {auth,adduser, firestore} from '../../firebase/firebase.utilis'
import ProfileHeader from '../profileheader/ProfileHeader'
import { connect } from 'react-redux'
import {set_user} from '../../redux/user.reducer/user.actions'
import Cartitem from '../cartitemtop/Cartitem'
import Practice from '../practice/Practice'


class Header extends Component {
    constructor(){
        super();
        this.state={
            loading : true,
        }
    }
    fun= async (user)=>{
        await adduser(user);
        if(user){
            const {uid} = user;
            firestore.doc("users/"+uid).get()
            .then(res=>{
                if(res.data()){
                    const {displayName} = res.data();
                    this.props.set_user(user,displayName)
                    this.setState({loading : false})

                }
            })
        }


    }

    unscribeFromAuth = null;
    componentDidMount(){
        const a = async ()=>{
            this.unscribeFromAuth = await auth.onAuthStateChanged((user)=>{
                this.fun(user);
            })
        }
        a();

    }
    componentWillUnmount(){
        this.unscribeFromAuth();
    }
    signout=()=>
    {
        this.props.set_user(null,null);
        auth.signOut();
    }

    render() {
    const {history,displayName,user} = this.props;
    if(this.state.loading){
        return <div></div>
    }
    return (
        <div>

            <nav>
                <img onClick={()=>history.push('/')} alt="logo" src={logo}></img>

                <ul>
                    <li className="lii"><Cartitem/></li>
                    
                    {
                        displayName?
                        <div>
                        <li onClick={this.signout} className="lii">sign out</li>
                        <ProfileHeader username={displayName}/>
                        
                        </div>
                        :
                        <li className="lii" onClick={()=>history.push('/signin')} >sign in</li>
                    }

                    <li className="lii" onClick={()=>history.push('/contact')}>Contact</li>
                    <li className="lii" onClick={()=>history.push('/shop')} >Shop</li>
                    <li className="lii" onClick={()=>history.push('/')}>Home</li>

                </ul>
            </nav>                

            </div>

    )
    }
}

const set = dispatch => {
    console.log("trsdlkajf;lsdkjf")
    return {
        set_user : (user,displayName)=> dispatch(set_user(user,displayName))
    }
}

const get = state => ({
    displayName : state.set_user.displayName,
    user : state.set_user.user
})
export default connect(get,set)(withRouter(Header));
