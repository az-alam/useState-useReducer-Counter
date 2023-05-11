import React, { useReducer } from 'react'

const initialState=0;
const reducer=(state, action)=>{
    switch(action){
        case "Inc" :
            return state+1;
        case "Dec" :
            return state-1;
        default :
            return state;
    }
}

function Reducer() {
    const [count, dispatch]=useReducer(reducer, initialState)
  return (
    <div>
        <p>Count = {count}</p>
        <div>
            <button onClick={()=>dispatch("Inc")}>Inc</button>
            <button onClick={()=>dispatch("Dec")}>Dec</button>
        </div>
    </div>
  )
}

export default Reducer