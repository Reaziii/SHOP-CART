import React, { Component } from 'react'
import ShopList from '../ShopLIst/ShopList'
import './homepage.css'
import {Route,Switch} from 'react-router-dom'
import ShopPage from '../shop/ShopPage'
import Header from '../header/Header'
import Signin_signup from '../signin-signup/signin-signup'
import Contact from '../contact/Contact'
import ShopByItem from '../shopbyitem/ShopByItem'
import Practice from '../practice/Practice'
import Waitloader from '../waitloader/Waitloader'
import Checkout from '../checkout/Checkout'
export default class Homepage extends Component {
    render() {
        return (
            <div>
            <Header/>
            <div style={{height:'100px'}}>
            </div>
                <Switch>
                    <Route exact path="/" component={ShopList}/>
                    <Route exact path="/practice" component={Practice}/>
                    <Route exact path="/checkout" component={Checkout}/>
                    <Route exact path="/shop" component={ShopPage}/>
                    <Route exact path="/signin" component={Signin_signup}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/shop/:item" component={ShopByItem} />
                </Switch>
            </div>
        )
    }
}
