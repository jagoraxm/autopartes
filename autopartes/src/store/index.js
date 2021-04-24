import { createStore } from 'redux';
import { usuario } from '../reducers/usuario';

const initialState = {
    usuario: ''
};

export const store = createStore(usuario, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
