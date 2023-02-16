// import {createStore} from 'redux';
import { loginReducer } from './reducers/loginReducer';
import { legacy_createStore as createStore } from 'redux';

const store = createStore(loginReducer);

export default store;