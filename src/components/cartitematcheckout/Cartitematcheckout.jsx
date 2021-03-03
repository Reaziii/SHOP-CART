import React, { Component } from 'react'
import { connect } from 'react-redux';
import {add_to_cart,REMOVE_FROM_CARD,REMOVE_HOLE_ITEM} from '../../redux/addtocart/addtocart.actions'
import './cartitematcheckout.scss'

class ItemInCart extends Component {
    render() {
        const {items,data,additem,removeitem} = this.props;
        return (
            <div className="itemincart">
                <div className="row">
                    <div className="col-2 rightside">
                        <img  src={data.imageUrl}></img>
                    </div>
                    <div className="col-3 extra">
                        <div className="counter-buttons">
                            <button onClick={()=>this.props.removeitem({name : data.name,price : data.price})}>-</button>
                            <p> {items[data.name]} </p>
                            <button onClick={()=>this.props.additem({...data})} style={{backgroundColor: '#0ba90b'}}>+</button>
                        </div>
                    </div>
                    <div className="col-3">
                        <h1 className="item-name">{data.name}</h1>
                        <p className="item-all-details">
                            {items[data.name]} X {data.price}$ = {items[data.name]*data.price}$
                        
                        
                        </p>
                    </div>
                    <div className="col-4 remove-button">
                        <button onClick={()=>this.props.removeall({name : data.name,price : data.price})} className="btn btn-danger">REMOVE</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

const get = (state) =>({
    items : state.add_to_cart.total,
})
const set = (dispatch)=>({
    additem : (item)=> dispatch(add_to_cart(item)),
    removeitem : (name)=>dispatch(REMOVE_FROM_CARD(name)),
    removeall : (name) => dispatch(REMOVE_HOLE_ITEM(name))
})
export default connect(get,set)(ItemInCart)
