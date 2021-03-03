import React, { Component } from 'react'
import {firestore} from '../../firebase/firebase.utilis'
import {SHOP_DATA} from '../../asset/shopdata'
export default class Practice extends Component {
    constructor(){
        super();
        this.state = {
            name : 'reaz'
        }
    }


    
    
    
    render() {
        SHOP_DATA.map((value,i)=>{
            const title = value.title;
            firestore.collection("SHOP_DATA").doc(value.title.toUpperCase()).set(
                {
                    id : value.id,
                    title : value.title,
                    routerName : value.routeName,
                    imageUrl : value.imageUrl

                }
            )

            value.items.map((svalue,i)=>{
                firestore.collection("SHOP_DATA").doc(value.title.toUpperCase()).collection("items").doc(svalue.name.toUpperCase()).set(
                    {
                        id : svalue.id,
                        name : svalue.name,
                        imageUrl : svalue.imageUrl,
                        price : svalue.price
                    }
                )
            })

        })
        return (
            <div>
                {this.state.name}
                <br></br>
                <button onClick={this.func}>click</button>
                
            </div>
        )
    }
}
