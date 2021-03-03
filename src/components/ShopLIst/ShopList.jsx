import React, { Component } from 'react'
import './shoplist.css';
import ShopListCard from '../shoplistcard/ShopListCard';
import {SHOP_DATA} from '../../asset/shopdata'
import {firestore} from '../../firebase/firebase.utilis'
import Waitloader from '../waitloader/Waitloader';
import Practice from '../practice/Practice';


export default class ShopList extends Component {
    constructor(){
        super();
        this.state={
            inlist : [],
            name : "fuck"
        }
    }
    async getMarkers() {
        const events = await firestore.collection('SHOP_DATA')
        events.get().then((querySnapshot) => {
            const tempDoc = querySnapshot.docs.map((doc) => {
                return {
                    items : [],
                    ...doc.data(),
                }
            })
            this.setState({inlist : tempDoc})
        })
    }
    componentDidMount(){
        this.getMarkers();
    }

    render() {
        return (

            <div>
                {   this.state.inlist.length?
                    this.state.inlist.map((value,i)=>(
                        <ShopListCard key={i} cardd={value}></ShopListCard>
                        // value.title
                    ))
                    :
                    <Waitloader/>


                }

                

                
            </div>
        )
    }
}
