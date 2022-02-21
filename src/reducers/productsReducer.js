import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

//cade reducer tiene su propio state

const initialState = {
    products:[],
    error:null,
    loading:false
}

export default function (state = initialState, action){
    switch(action.type){
        case AGREGAR_PRODUCTO:
            return{
                ...state,
                loading:action.payload
            }
        case AGREGAR_PRODUCTO_EXITO:
            return{
                ...state,
                loading:false,
                products:[...state.products, action.payload]
            }
        case AGREGAR_PRODUCTO_ERROR:
                return{
                    ...state,
                    loading:false,
                    products:action.payload
                }
        default:
            return state;
    }
}