"use client"
function TipoInmueble({ modelo_tipo_uno, modelo_tipo_dos, modelo_tipo_tres, modelo_tipo_cuatro, modelo_tipo_cinco, modelo_tipo_seis }) {
    let tipoInmueble;

    let modelo_tipo = modelo_tipo_uno || modelo_tipo_dos || modelo_tipo_tres || modelo_tipo_cuatro || modelo_tipo_cinco || modelo_tipo_seis;

    switch(modelo_tipo) {
        case 'CASA':
            tipoInmueble = 'Casa';
            break;
        case 'DEPARTAMENTO':
            tipoInmueble = 'Departamento';
            break;
        case 'RCASA':
            tipoInmueble = 'Renta Casa';
            break;
        case 'RDEPARTAMENTO':
            tipoInmueble = 'Renta Departamento';
            break;
        default:
            tipoInmueble = '';
            break;
    }

    return <strong>{tipoInmueble}</strong>;
}

export default TipoInmueble
