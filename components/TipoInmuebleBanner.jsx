"use client"
function TipoInmuebleBanner({ municipio, modelo_tipo_uno, modelo_tipo_dos, modelo_tipo_tres, modelo_tipo_cuatro, modelo_tipo_cinco, modelo_tipo_seis }) {
  let tipoInmueble;
  const muni = municipio
  const modelosTipo = [modelo_tipo_uno, modelo_tipo_dos, modelo_tipo_tres, modelo_tipo_cuatro, modelo_tipo_cinco, modelo_tipo_seis];

  if (modelosTipo.includes('CASA') && modelosTipo.includes('DEPARTAMENTO')) {
    tipoInmueble = 'Departamentos y Casas en';
  } else if (modelosTipo.includes('CASA')) {
    tipoInmueble = 'Casas en venta en';
  } else if (modelosTipo.includes('DEPARTAMENTO')) {
    tipoInmueble = 'Departamentos en venta en';
  } else if (modelosTipo.includes('RCASA')) {
    tipoInmueble = 'Renta Casa en';
  } else if (modelosTipo.includes('RDEPARTAMENTO')) {
    tipoInmueble = 'Renta Departamento en';
  } else if (modelosTipo.includes('CPREVENTA')) {
    tipoInmueble = 'Casas Preventa en';
  } else if (modelosTipo.includes('DPREVENTA')) {
    tipoInmueble = 'Departamentos Preventa en';
  } else {
    tipoInmueble = 'desde:';
  }

  return <p className="ms-5 m-1 parrafo-inm">{tipoInmueble} {muni}.</p>;
}

export default TipoInmuebleBanner;
