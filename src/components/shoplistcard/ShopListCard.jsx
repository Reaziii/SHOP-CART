import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './shoplistcard.css'
import {withRouter} from 'react-router-dom'
const ShopListCard=({history,cardd})=>{
        const backstyle ={
            background : 'url('+cardd.imageUrl+')',
            height : '100%',
            width : '100%',
            backgroundPosition : 'center',
            backgroundSize : 'cover',

        }
        return (
            <div className="full-card">
               <div style={backstyle} className="pic-c" >
                   
                </div>
                <div className="card-shop-now">
                    <h1>{cardd.title}</h1>
                    <button onClick={()=>history.push('/shop/'+cardd.routerName)} className="btn btn-danger">SHOP NOW</button>
                </div>

                
            </div>
        )

}


export default withRouter(ShopListCard);