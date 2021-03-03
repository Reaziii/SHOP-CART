import React, { Component } from 'react';
import AddToCart from '../addtocart/AddToCart';
import './collections.css'
import {firestore} from '../../firebase/firebase.utilis'
import Waitloader from '../waitloader/Waitloader';

class Collections extends Component{
    constructor(){
        super();
        this.state = {
            items : [],
            found : true,
        }
    }
    collectlistt = async () =>{
        const a = firestore.collection("SHOP_DATA").doc(this.props.title.toUpperCase()).collection("items");
        var temppp = [];
        await a.get().then(shot=>{
            shot.docs.map(async (value,i)=>{
                temppp[i] = {...value.data()}
            })
            
    
        })

        this.setState({items : temppp})
        if(this.state.items.length==0) this.setState({found : false})

        return 0;
    }
    componentDidMount(){
        this.collectlistt();
    }

    render(){

        return (
            <div className="collection">
                <h1>{this.props.title}</h1>
                {
                    this.state.found?
                        this.state.items.length==0?
                            <Waitloader/>

                        :
                        this.state.items.map((value,i)=>(
                            
                            i<4?
                                <div key={i} className="hh"><AddToCart key={i} {...value}></AddToCart></div>
                            
                            :null
                        ))
                    :
                    null



                }
            </div>
        );
    }
};

export default Collections;