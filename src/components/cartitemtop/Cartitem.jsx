import React, { Component } from 'react'
import { connect } from 'react-redux';
import {iconpack} from '../../asset/fonts'
import Cart_dropdown from '../cart-dropdown/Cart_dropdown'
import './Cartitem.scss'
import {toggle} from '../../redux/addtocart/addtocart.actions'
class Cartitem extends Component {

    change=()=>{
        this.props.change();
        
    }
    
    render() {
        
        return (
            <div>
                <div onClick={this.change} style={{fontSize:'25px'}} className="cartbutton">
                    {iconpack.cart}
                    <div className="countercart"><p>{this.props.quantity}</p></div>
                </div>
                <Cart_dropdown/>

            </div>
        )
    }
}

const get=state=>({
    quantity : state.add_to_cart.quantity,
    toggle : state.add_to_cart.init_hid
})
const set=(dispatch)=>({
    change : ()=> dispatch(toggle())
})
export default connect(get,set)(Cartitem)