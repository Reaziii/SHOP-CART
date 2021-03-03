import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ItemInCart from '../itemInCart/ItemInCart';
import './cart-dropdown.scss'
class Cart_dropdown extends Component {

    render() {
        const {items,history,hid} = this.props;
        return (
            hid?
            <div className="cart-dropdown">
                {
                    items.length?
                    <div className="scrol-cart-drop">
                        {items.map((data,i)=>(
                            <ItemInCart key={i} data={data}/>
                        ))}
                    </div>
                    :
                    <div className="empty-cart">
                        Your cart is empty
                    </div>
            
            
                }
                <button onClick={()=>history.push('/checkout')} className="btn btn-danger extra">CHECK OUT NOW</button>
            </div>
            :
            null
        )
    }
}

const get = (state) =>({
    items : state.add_to_cart.added_list,
    hid : state.add_to_cart.init_hid
})


export default connect(get,null)(withRouter(Cart_dropdown))
