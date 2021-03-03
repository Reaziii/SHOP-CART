import React from 'react';
import { connect } from 'react-redux';
import { add_to_cart } from '../../redux/addtocart/addtocart.actions';
import './addtocard.css'
const AddToCart = (props) => {
    const backstyle = {
        background : 'url('+props.imageUrl+')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height : '100%',
        width : '100%',

    }
    const handle=()=>{
        const {addtocart,name,price,imageUrl} = props;
        addtocart({name,price,imageUrl});
    }
    return (
        <div className="Addtocart">
            <div className="addtocart">
               <div className="pic-cc" style={backstyle}>
               </div>
               <div className="addcartbtn">
                  <p>{props.name}</p>
                  <p>{props.price}$</p>
                    <div className="buttoncart">
                         <h3 onClick={handle} className="adtocartbtn">add to cart</h3>
                  </div>
                </div>
               
            </div>

        </div>
    );
};
const set = (dispatch) =>({
    addtocart : (value)=>dispatch(add_to_cart(value)),
})
export default connect(null,set)(AddToCart);