"use client"
function TipoInmuebleBanner({ modelo_tipo_uno, modelo_tipo_dos, modelo_tipo_tres, modelo_tipo_cuatro, modelo_tipo_cinco, modelo_tipo_seis }) {
    let tipoInmueble;
  
    const modelosTipo = [modelo_tipo_uno, modelo_tipo_dos, modelo_tipo_tres, modelo_tipo_cuatro, modelo_tipo_cinco, modelo_tipo_seis];
  
    if (modelosTipo.includes('CASA') && modelosTipo.includes('DEPARTAMENTO')) {
      tipoInmueble = 'Departamentos y Casas desde:';
    } else if (modelosTipo.includes('CASA')) {
      tipoInmueble = 'Casas desde:';
    } else if (modelosTipo.includes('DEPARTAMENTO')) {
      tipoInmueble = 'Departamentos desde:';
    } else if (modelosTipo.includes('RCASA')) {
      tipoInmueble = 'Renta Casa';
    } else if (modelosTipo.includes('RDEPARTAMENTO')) {
      tipoInmueble = 'Renta Departamento';
    } else if (modelosTipo.includes('CPREVENTA')) {
      tipoInmueble = 'Casas Preventa';
    } else if (modelosTipo.includes('DPREVENTA')) {
      tipoInmueble = 'Departamentos Preventa';
    } else {
      tipoInmueble = 'desde:';
    }
  
    return <p className="ms-5 m-1">{tipoInmueble}</p>;
  }
  
  export default TipoInmuebleBanner;
  