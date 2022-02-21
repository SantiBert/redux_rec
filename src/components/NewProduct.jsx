import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createNewProduct } from '../actions/productActions';

const NewProduct = ({history}) => {

  //state del componente
  const [name, setName] = useState('');
  const [prince, setPrice] = useState(0);

  //utilizar useDispatch y te crea una función
  const dispatch = useDispatch();

  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);

  const makeProduct = (product) => dispatch(createNewProduct(product));

  const SubmitNewProduct = e=>{
    e.preventDefault();
    //validar formulario
    if(name.trim === '' || prince <= 0){
      return
    }

    //revisar que no haya errores

    //crear el nuevo producto
    makeProduct({
      name,
      prince
    });

    history.push('/');
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center md-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>
            <form
              onSubmit={SubmitNewProduct}
            >
              <div className="form-group">
                <label>Nombre del producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del producto"
                  name="nombre"
                  value={name}
                  onChange={e => setName(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Precio del producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio del producto"
                  name="precio"
                  value={prince}
                  onChange={e => setPrice(Number(e.target.value))} />
              </div>
              <button
              type="submit"
              className="btn btn-primary front-weight-bold text-uppercase d-block w-100">Agregar</button>
            </form>
            { loading ? <p>Cargando...</p> : null }
            { error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null }
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProduct