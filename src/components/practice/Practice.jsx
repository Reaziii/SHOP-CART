import React,{useState,useEffect} from 'react';

const Practice = () => {
    const [name,setName] = useState("Reaz Ahammed Chowdhury");
    const [what,setWhat] = useState(0);

    useEffect(()=>{
        console.log("hello");
    },[what])
    return (
        <div>
        {console.log("fired")}
            <button onClick={()=>setName(name+"r")}>{name}</button>
            
        </div>
    );
};

export default Practice;