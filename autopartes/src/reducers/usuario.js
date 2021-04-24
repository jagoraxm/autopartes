import { SET_USUARIO } from '../actions/index';

export const usuario = (state = {}, action) => {
    switch (action.type) {
        case SET_USUARIO:
            return {...state, usuario: action.payload};
        default:
            return state;
    }
}