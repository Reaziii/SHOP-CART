import {firestore} from '../firebase/firebase.utilis'
var temppp= new Array();
const collectsecon = async (id,j) => {
    var temp ;
    const a =  firestore.collection("SHOP_DATA").doc(id).collection("items");
    let ddd = await a.get().then(shot=>{
        const b = shot.docs.map((value,i)=>{
            return {
                ...value.data()
            }
        })
        // temppp[j] = {...temppp[j],items : b}
        
    })
    // return ddd.map();
    temp = ddd;
    return temp;
}

export const collectlist = async () =>{
    const a = firestore.collection("SHOP_DATA");
    var temp;
    let ddd = await a.get().then(shot=>{
        shot.docs.map((value,i)=>{
        temppp[i] = {...value.data()}

            
            const d = firestore.collection("SHOP_DATA").doc(value.id).collection("items");
            const eee = d.get().then(sshot=>{
                const f = sshot.docs.map((values)=>({
                    ...values.data()
                }))

                temppp[i] = {...temppp[i],items : {...f}}
            })

            temp = eee;

        })
        console.log(temppp)

    })
    // return ddd.map();
    temp = ddd;




    return temp;
}