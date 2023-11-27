import { BUY_ICECREAM } from "./iceCreameTypes";

const intialState={
    numOfIceCreams:20
}

const iceCreameReducer=(state=intialState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state,
                numOfIceCreams:state.numOfIceCreams-1
            }
        default: return state    
    }
}

export default iceCreameReducer
