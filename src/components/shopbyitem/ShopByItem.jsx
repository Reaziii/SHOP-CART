import React, { Component } from 'react'
import {SHOP_DATA} from '../../asset/shopdata'
import AddToCart from '../addtocart/AddToCart';
import './shopbyitem.css'
import {firestore} from '../../firebase/firebase.utilis'
import Waitloader from '../waitloader/Waitloader';
import Practice from '../practice/Practice';
export default class ShopByItem extends Component {
    constructor({match}){
        super();
        var id= true;
        this.state = {
            found : true,
            routerName : match.params.item.toUpperCase(),
            item : [],
        }
            
    }
    async getMarkers() {
        const events = await firestore.collection('SHOP_DATA').doc(this.state.routerName).collection("items")
        events.get().then((querySnapshot) => {
            const tempDoc = querySnapshot.docs.map((doc) => {
                return {
                    ...doc.data(),
                }
            })
            this.setState({item : tempDoc})
            if(this.state.item.length==0){
                this.setState({found : false})
        
            }
        })
    }
    componentDidMount(){
        this.getMarkers();
    }

    render() {
        return (
            <div className="shop-by-item">
                {this.state.found?
                    this.state.item.length?
                    <div>
                        {
                            this.state.item.map((value,i)=>(
                                    <div key={i} className="hht"><AddToCart key={i} {...value}></AddToCart></div>
                            ))
                        }
                    </div>
                    :
                    <Waitloader/>
                    :
                    <h1>Item Not Found</h1>
                }

                <button onClick={()=>this.setState({name : this.state.name+'1'})}>click</button>

                <Practice/>
            </div>
        )
    }
}
