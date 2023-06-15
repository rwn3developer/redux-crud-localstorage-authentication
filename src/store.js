import { createStore } from "redux";
import rootReducer from "./redux/reduceres";

const store = createStore(rootReducer);

export default store;