// components/SearchBar.js
import 'bootstrap/dist/css/bootstrap.css';
import styles from './Filter.module.css';

const Filter = () => (
  <div className={`container-fluid ${styles['fondo-img']}`}>
    <div className="row justify-content-center align-items-center">
      <h1 className={`text-center col-md-12 mt-5 p-5 ${styles.h1}`}>Busca tu Hogar</h1>
      <div className="col-md-4 col-12 align-items-center py-3 text-center form-element-container">
        <div className={`select-container mt-2 ${styles['select-container']}`}>
          <select name="estados" className={`form-element ${styles['form-element']}`}>
            <option value="casa">Queretaro</option>
            <option value="departamento">Departamentos</option>
          </select>
          <select name="tipoPropiedad" className={`form-element mx-2 ${styles['form-element']}`}>
            <option value="venta">Venta</option>
            <option value="renta">Renta</option>
            <option value="preventa">Preventa</option>
          </select>
          <select name="tipoPropiedad" className={`form-element ${styles['form-element']}`}>
            <option value="casa">Casas</option>
            <option value="departamento">Departamentos</option>
          </select>
        </div>
      </div>
      <div className={`col-md-5 py-3 form-element-container ${styles['form-element-container']} `}>
        <input
          className={`form-control ${styles['form-control']} ${styles['form-element']}`}
          type="text"
          placeholder="Ingresa ubicaciones o características (ej: alberca)"
        />
      </div>
      <div className="col-12 col-md-2 mx-2 justify-content-md-start d-flex justify-content-center form-element-container">
        <button className={`btn btn-primary form-element ${styles['btn-primary']} ${styles['form-element']}`}>
          Buscar
        </button>
      </div>
    </div>
    <div className="col-12 my-5 py-5"></div>
  </div>
);

export default Filter;

