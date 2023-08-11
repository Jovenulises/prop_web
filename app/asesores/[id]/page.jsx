
import styles from '../../../components/Detalle.module.css';
import TipoInmueble from '../../../components/TipoInmueble';
import numeral from 'numeral';
import ModeloInmueble from 'components/ModeloInmueble';
import NavigationDetalle from '../../../components/NavigationDetalle'
import MapComponent from '../../../components/Ubicacion';
import ImagenDetalle from '../../../components/ImagenDetalle';
import PublicidaDetalle from '../../../components/PublicidaDetalle';

async function getDetalle(id) {
    const username = "tpTBK2QvT75a";
    const password = "9hntUZOb6fsw";

    const urls = [
        `https://www.propmexico.com/administrador/restApi/blogsPorId//${id}////`,
        "https://www.propmexico.com/administrador/restApi/getEstados",
        "https://www.propmexico.com/administrador/restApi/traerMunicipios"
    ];

    // Use Promise.all to make all requests simultaneously
    const [res1, res2, res3] = await Promise.all(urls.map(url =>
        fetch(url, {
            headers: {
                Authorization: `Basic ${btoa(`${username}:${password}`)}`,
            },
        })
    ));

    const data1 = await res1.json();
    console.log(data1);
    const data2 = await res2.json();
    const data3 = await res3.json();

    // Get the inmueble
    // Get the inmueble
    const inmueble = data1.banner;

    if (!inmueble) {
        console.error(`No se encontró ningún inmueble con el id ${id}`);
        return;
    }

    // Find the corresponding estado and municipio
    const estado = data2.estados.find(estado => estado.id === inmueble.direccion_estado);
    const municipio = data3.municipios.find(municipio => municipio.id === inmueble.direccion_municipio);

    // ...

    // Add the estado and municipio names to the inmueble object
    inmueble.estado_name = estado ? estado.nombre : null;
    inmueble.municipio_name = municipio ? municipio.nombre : null;

    return inmueble;
}

async function AsesorPage({ params }) {
    const asesorId = await getDetalle(params.id);

    if (!asesorId) {
        // Handle the case where no inmueble was found
        // This could be rendering an error message or redirecting the user, etc.
        console.error(`No se encontró ningún inmueble con el id ${params.id}`);
        return;
    }

    console.log(asesorId);

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-9 col-12'>

                        <p>{asesorId.informacion_extra}</p>

                        {asesorId.modelo_nombre_uno &&
                            <h2>{asesorId.modelo_nombre_uno}</h2>
                        }
                        {asesorId.modelo_desc_uno &&
                            <p>{asesorId.modelo_desc_uno}</p>
                        }
                        {asesorId.modelo_nombre_dos &&
                            <h2>{asesorId.modelo_nombre_dos}</h2>
                        }
                        {asesorId.modelo_desc_dos &&
                            <p>{asesorId.modelo_desc_dos}</p>
                        }
                        {asesorId.modelo_nombre_tres &&
                            <h2>{asesorId.modelo_nombre_tres}</h2>
                        }
                        {asesorId.modelo_desc_tres &&
                            <p>{asesorId.modelo_desc_tres}</p>
                        }

                        {asesorId.modelo_nombre_cuatro &&
                            <h2>{asesorId.modelo_nombre_cuatro}</h2>
                        }
                        {asesorId.modelo_desc_cuatro &&
                            <p>{asesorId.modelo_desc_cuatro}</p>
                        }
                        {asesorId.modelo_nombre_cinco &&
                            <h2>{asesorId.modelo_nombre_cinco}</h2>
                        }
                        {asesorId.modelo_desc_cinco &&
                            <p>{asesorId.modelo_desc_cinco}</p>
                        }
                        {asesorId.modelo_nombre_seis &&
                            <h2>{asesorId.modelo_nombre_seis}</h2>
                        }
                        {asesorId.modelo_desc_seis &&
                            <p>{asesorId.modelo_desc_seis}</p>
                        }


                    </div>
                </div>
            </div>


        </div>
    )
}

export default AsesorPage;