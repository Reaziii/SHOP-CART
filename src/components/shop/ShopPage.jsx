import React, { Component } from 'react';
// import {SHOP_DATA} from '../../asset/shopdata'
import Collections from '../collection/Collections';
import './shoppage.css'
import {firestore} from '../../firebase/firebase.utilis'
import { connect } from 'react-redux';
import { GET_ITEMS } from '../../redux/collectlist/collectlist.actions';

var temppp= new Array();
export const collectlistt = async () =>{
    const a = firestore.collection("SHOP_DATA");
    var temp;
    let ddd = await a.get().then(shot=>{
        shot.docs.map(async (value,i)=>{
            temppp[i] = {...value.data()}
        })
        

    })
    temp = ddd;
}


class ShopPage extends Component {
    mufunc = async ()=>{
        await collectlistt();
        this.props.set_data(temppp)
        // console.log(temppp)
    }
    componentDidMount(){
        this.mufunc();
    }
    render(){
        const {SHOP_DATA} = this.props;
        return (
            <div className="shoppage">
                <h2>Collections</h2>

                {
                    SHOP_DATA.map(({...SHOP_DATA},i)=>(
                        <Collections key={i} {...SHOP_DATA}></Collections>

                    ))

                }
                
            </div>
        );
    }
};

const set = (dis) => ({
    set_data : (values) => dis(GET_ITEMS(values))
})

const get = (state) => ({
    SHOP_DATA : state.shop_data_add.shop_data,
})

export default connect(get,set)(ShopPage);