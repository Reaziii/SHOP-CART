import React from 'react';
import { connect } from 'react-redux';
import Cartitematcheckout from '../cartitematcheckout/Cartitematcheckout';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {hide} from '../../redux/addtocart/addtocart.actions'
import TakeMoney from '../stripeButton/stripeButton';
import './Checkout.scss'
const Checkout = ({items,total,quantity,total_money,change}) => {
    
    change();
    return (
        <div className="checkout">
            <div className="checkout-all-items">
                {
                    items.map((value,i)=>{

                        return <Cartitematcheckout key={i} data = {value}/>
                    })
                }

                <div style={{paddingTop:'30px'}} className="itemincart">
                <div className="row">
                    <div className="col-2 rightside">
                        
                    </div>
                    <div className="col-3 extra">
                    <h1 style={{fontSize:'20px'}} className="item-name">TOTAL :</h1>
                    </div>
                    <div className="col-3">
                    <h1 style={{fontSize:'20px'}} className="item-name">{total_money} $</h1>
                    </div>
                    <div style={{padding: '0px',margin: '0px',height: "0px"}} className="col-4 remove-buttons remove-button ">
                        <TakeMoney price={total_money}/>
                    </div>
                </div>
                
            </div>
            <div className="test-warning">
                *please test with this card details*
                <br/>
                card number : 4242 4242 4242 4242
                <br/>
                expire : 01/25
                <br/>
                CVV : 123

            
            </div>

            </div>

            
            
        </div>
    );
};

const get = (state) =>({
    items : state.add_to_cart.added_list,
    total : state.add_to_cart.total,
    quantity : state.add_to_cart.quantity,
    total_money : state.add_to_cart.total_money
})
const set = (dispatch)=>({
    change : ()=> dispatch(hide())
})
export default connect(get,set)(Checkout);