import { type } from '@testing-library/user-event/dist/type';
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

import clientAxios from 'axios';

import Swal from 'sweetalert2';

export function createNewProduct(product){
    return async (dispatch) =>{
        dispatch(makeProduct());
        try{
            await clientAxios.post('/productos', product);
            dispatch(successCreateProduct(product));
             // Alerta
             Swal.fire(
                'Correcto', 
                'El producto se agregó correctamente',
                'success'
            ); 
        }catch(error){
            console.log(error);
            dispatch(errorCreateProduct(true));
             // alerta de error
             Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            })
        }
    }
}

const makeProduct = () =>({
    type:AGREGAR_PRODUCTO,
    payload:true,
});

const successCreateProduct = product =>({
    type:AGREGAR_PRODUCTO_EXITO,
    payload:product
});

const errorCreateProduct = state =>({
    type:AGREGAR_PRODUCTO_ERROR,
    payload:state
});