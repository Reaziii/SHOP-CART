import React, { Children, Component } from 'react'
import { connect ,useSelector,useDispatch} from 'react-redux';
import {set_user} from '../../redux/user.reducer/user.actions'
import  {firestore as db} from '../../firebase/firebase.utilis'
import HOC from './hoc'
import Cohildren from './chhhildren';
import Main from './main'
import { increement } from '../../redux/practicereducer/practicereduceractions';
const Practice = (props)=>{
        const {value,name,displayName} = useSelector(
            state=>state.practicereducer,
        );
        const dispatch = useDispatch();
        const sett = () =>{
            var a = document.getElementsByClassName("reaz")[0].value;
            // props.addddd(Number(a));
            dispatch(increement(Number(a)))
        }
        console.log("okk")
        return (
            <div>
                <input className="reaz"/>
                <button onClick={sett}>click</button>
                <br/>
                {value}<br/>
                {name}
            </div>
        )
}

export default Practice;


// const get = state => {
//     console.log("i am triggered")
//     return {
//         user : state.set_user.displayName,
//         value : state.practicereducer.value,
//     }
// }
// const set = dispatch =>({
//     change : (value)=>dispatch(set_user(value)),
//     addddd : (value)=>dispatch(increement(value))
// })
// export default connect(get,set)(Practice);

