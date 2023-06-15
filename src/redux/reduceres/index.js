import { combineReducers } from "redux";
import crudReducer from "./crudReducer";

const rootReducer = combineReducers({
    crudUser : crudReducer
})

export default rootReducer;