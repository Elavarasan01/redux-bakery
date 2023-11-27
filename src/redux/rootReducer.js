import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreameReducer from "./iceCreame/iceCreameReducer";
import reducer from "./user/UserReducer";

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCreame:iceCreameReducer,
    user:reducer
})

export default rootReducer