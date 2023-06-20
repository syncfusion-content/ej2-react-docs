import { createStore } from 'redux';
import reducer from "./reducer";
const store = new createStore(reducer);
export default store;