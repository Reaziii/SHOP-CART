import React, { Component } from 'react'
import { connect } from 'react-redux';
import './itemincart.scss'

class ItemInCart extends Component {
    render() {
        const {items,data} = this.props;
        return (
            <div className="itemincart">
                <div className="row">
                    <div className="col-4 rightside">
                        <img  src={data.imageUrl}></img>
                    </div>
                    <div className="col-8">
                        <h1 className="item-name">{data.name}</h1>
                        <p className="item-all-details">
                            {items[data.name]} X {data.price}$ = {items[data.name]*data.price}$
                        
                        
                        </p>
                    </div>
                </div>
                
            </div>
        )
    }
}

const get = (state) =>({
    items : state.add_to_cart.total,
})

export default connect(get,null)(ItemInCart)
