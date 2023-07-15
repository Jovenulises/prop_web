"use client"
import 'bootstrap/dist/css/bootstrap.css';
import styles from './Filter.module.css';
import React, { useState } from 'react';
import InmubleFiltrado from './InmuebleFiltrado';






const Filter = ({ inmueble, estados}) => {
  // console.log(inmueble)


  const [inmueblesFiltrados, setInmueblesFiltrados] = useState([]);

  
  const [municipios, setMunicipios] = useState('');
  
  const [estado, setEstado] = useState('');
  const [tipoPropiedad, setTipoPropiedad] = useState('');
  const [tipoTransaccion, setTipoTransaccion] = useState('');
  const [clave, setClave] = useState('');

  const filtrarInmuebles = () => {
    // Aplicamos los filtros a los inmuebles
    const inmueblesFiltrados = inmueble.filter(inmueble =>
      (estado === '' || inmueble.direccion_estado === estado) &&
      (tipoPropiedad === '' || inmueble.modelo_tipo_uno.includes(tipoPropiedad)) &&
      (tipoTransaccion === '' ||
        (tipoTransaccion === 'Venta' && (inmueble.modelo_tipo_uno === 'CASA' || inmueble.modelo_tipo_uno === 'DEPARTAMENTO')) ||
        (tipoTransaccion === 'Renta' && (inmueble.modelo_tipo_uno === 'RCASA' || inmueble.modelo_tipo_uno === 'RDEPARTAMENTO')) ||
        (tipoTransaccion === 'Preventa' && (inmueble.modelo_tipo_uno === 'CPREVENTA' || inmueble.modelo_tipo_uno === 'DPREVENTA'))
      ) &&
      (clave === '' || (inmueble.modelo_desc_uno && inmueble.modelo_desc_uno.toLowerCase().includes(clave.toLowerCase())))

    );

    // Aquí puedes hacer lo que quieras con los inmuebles filtrados
    //  console.log(inmueblesFiltrados);
    setInmueblesFiltrados(inmueblesFiltrados);
    setEstado(estados)
    setMunicipios(municipios)

  };




  return (
    <div>
      <div className={`container-fluid ${styles['fondo-img']}`}>
        <div className="row justify-content-center align-items-center">
          <h1 className={`text-center col-md-12 mt-5 p-5 ${styles.h1}`}>Busca tu Hogar</h1>
          <div className="col-md-4 col-12 align-items-center py-3 text-center form-element-container">
            <div className={`select-container mt-2 ${styles['select-container']}`}>
              <select
                name="estados"
                className={`form-element ${styles['form-element']}`}
                onChange={e => setEstado(e.target.value)}
              >
                <option value="">Estado</option>
                {estados.map(est => <option key={est.id} value={est.id}>{est.nombre}</option>)}
              </select>

              <select
                name="tipoPropiedad"
                className={`form-element mx-2 ${styles['form-element']}`}
                onChange={e => setTipoPropiedad(e.target.value)}
              >
                <option value="">Tipo de propiedad</option>
                <option value="CASA">Casa</option>
                <option value="DEPARTAMENTO">Departamento</option>
              </select>

              <select
                name="tipoTransaccion"
                className={`form-element ${styles['form-element']}`}
                onChange={e => setTipoTransaccion(e.target.value)}
              >
                <option value="">Tipo de transacción</option>
                <option value="Venta">Venta</option>
                <option value="Renta">Renta</option>
                <option value="Preventa">Preventa</option>
              </select>
            </div>
          </div>

          <div className={`col-md-5 py-3 form-element-container ${styles['form-element-container']} `}>
            <input
              className={`form-control ${styles['form-control']} ${styles['form-element']}`}
              type="text"
              placeholder="Ingresa ubicaciones o características (ej: alberca)"
              onChange={e => setClave(e.target.value)}
            />
          </div>

          <div className="col-12 col-md-2 mx-2 justify-content-md-start d-flex justify-content-center form-element-container">
            <button
              className={`btn btn-primary form-element ${styles['btn-primary']} ${styles['form-element']}`}
              onClick={filtrarInmuebles}
            >
              Buscar
            </button>
          </div>
        </div>
        <div className="col-12 my-5 py-5"></div>
      </div>
      <div className='container'>
        <InmubleFiltrado inmueblesFiltrados={inmueblesFiltrados}
          estados={estados}
          municipios={municipios}
        />
      </div>
    </div>
  );
};

export default Filter;
