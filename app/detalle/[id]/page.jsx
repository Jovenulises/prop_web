
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
        `https://www.propmexico.com/administrador/restApi/desarrollosPorId/${id}`,
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

async function DetallePage({ params }) {
    const inmuebleId = await getDetalle(params.id);
    
    if (!inmuebleId) {
        // Handle the case where no inmueble was found
        // This could be rendering an error message or redirecting the user, etc.
        console.error(`No se encontró ningún inmueble con el id ${params.id}`);
        return;
    }

    console.log(inmuebleId);

    return (
        <>
            <NavigationDetalle />
            <div id="galeria" className="container-fluid">
                <div className="row d-flex">

                    <ImagenDetalle inmuebleId={inmuebleId} />

                    <div className={`col-12 col-md-7  ${styles['h1']}`}>
                        <div className=' py-3 border-top '>
                            <h1 className='h3'>
                                <TipoInmueble modelo_tipo_uno={inmuebleId.modelo_tipo_uno} /> en venta en {inmuebleId.estado_name} {inmuebleId.nombre_desarrollo}</h1>
                            <p>Ubicación del inmueble en {inmuebleId.estado_name}, {inmuebleId.municipio_name}</p>
                            <div className=' pt-2 border-top'>
                                <p className="h6 fw-normal">Desde:</p>
                            </div>
                            <div className='d-flex'>
                                <span className={`h4 ${styles['property-price']}`}>
                                    $ {numeral(inmuebleId.precio).format('0,0').replace(',', ',')} MXN
                                </span>
                                {/*     <div className={`mx-4 ml-auto d-block ${styles['margenboton']}`}>
                                    <a href={`tel:+52${inmuebleId.telefono_contacto}`}>
                                        <button className={` ${styles['rounded-button']}`}>Comprar</button>
                                    </a>
                                </div> */}

                            </div>
                            <div className='d-flex border-bottom  justify-content-between'>
                                <div className=''>
                                    <p className="h6">Estado:</p>
                                    <p className='h5'>Lista para habitar</p>
                                </div>
                                <div className=''>
                                    <p className="h6">Entrega:</p>
                                    <p className='h5'>Inmediata</p>
                                </div>
                                <div>
                                    <p className="h6">ID</p>
                                    <span className="h5">{inmuebleId.id}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PublicidaDetalle />

                    <div id="informacion" className="col-12 col-md-7 ">
                        <div className={`col-12 col-md-6 justify-content-between  ${styles['margen']}`}>
                            <div className="justify-content-center d-flex">
                                {inmuebleId.toma_aerea &&
                                    <div className={` my-2 pt-2 ${styles['margenboton']}`}>
                                        <a href={inmuebleId.toma_aerea}>
                                            <button className={` ${styles['rounded-button-paseo']}`}>Presentación</button>
                                        </a>
                                    </div>
                                }
                                <div className={`my-2  mx-3 pt-2 ${styles['margenboton']}`}>
                                    <a href={`https://wa.me/52${inmuebleId.telefono_contacto}`} target="_blank">
                                        <button data-qa="CARD_WHATSAPP" className={` ${styles['button-what']}`}>
                                            <svg baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
                                                width="1em" height="1em" fill="currentColor" stroke="currentColor"
                                                color="currentColor" fontSize="25px">
                                                <path
                                                    d="M84.9 49c0 18.8-15.4 34-34.3 34-5.8 0-11.5-1.4-16.6-4.2l-19 6 6.2-18.3C18 61.3 16.3 55.2 16.3 49c0-18.8 15.4-34 34.3-34s34.3 15.2 34.3 34zM50.6 20.4c-15.9 0-28.8 12.8-28.8 28.6 0 6.3 2 12.1 5.5 16.8l-3.6 10.6 11.1-3.5c4.7 3.1 10.2 4.7 15.9 4.7 15.9 0 28.8-12.8 28.8-28.6-.1-15.7-13-28.6-28.9-28.6zm17.3 36.5c-.2-.3-.8-.6-1.6-1s-5-2.4-5.7-2.7c-.8-.3-1.3-.4-1.9.4-.6.8-2.2 2.7-2.7 3.3-.5.6-1 .6-1.8.2-.8-.4-3.6-1.3-6.8-4.1-2.5-2.2-4.2-4.9-4.7-5.8-.5-.8 0-1.3.4-1.7.4-.4.8-1 1.3-1.5.4-.5.6-.8.8-1.4.3-.6.1-1-.1-1.5-.2-.4-1.9-4.5-2.6-6.2-.7-1.7-1.4-1.4-1.9-1.4s-1.1-.1-1.6-.1c-.9 0-1.7.4-2.2 1-.8.8-2.9 2.9-2.9 7s3 8.1 3.4 8.6 5.8 9.3 14.4 12.6c8.6 3.3 8.6 2.2 10.1 2.1 1.5-.1 5-2 5.7-4 .6-1.8.6-3.5.4-3.8z">
                                                </path>
                                            </svg>
                                        </button>
                                    </a>
                                </div>
                                <div className={` my-2 pt-2 ${styles['margenboton']}`}>
                                    <a href={`tel:+52${inmuebleId.telefono_contacto}`}>
                                        <button className={` ${styles['rounded-button']}`}>Llamar</button>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className=" col-md-7 col-12">
                        {inmuebleId.informacion_extra &&
                            <div>
                                <div className='d-flex mt-4'>
                                    <img className={`  ${styles['small-image']}`} src="/descripcion_ic.png" alt="Icono de ubicación" />
                                    <h2 className="h4">Información</h2>
                                </div>

                                <p className="text-justify  mt-2 pt-2 border-top">{inmuebleId.informacion_extra}</p>
                            </div>
                        }

                        {inmuebleId.amenidades &&
                            <div>
                                <div className='d-flex mt-4'>
                                    <img className={`  ${styles['small-image']}`} src="/amenidades_ic.png" alt="Icono de ubicación" />
                                    <h2 className="h4">Amenidades</h2>
                                </div>

                                <p className="text-justify mt-2 pt-2 border-top">{inmuebleId.amenidades}</p>
                            </div>
                        }
                        <div className='border-bottom mb-4'>
                            <div className='d-flex mt-4'>
                                <img className={`  ${styles['small-image']}`} src="/financiamiento.png" alt="Icono de ubicación" />
                                <h2 className="h4">Financiamiento</h2>
                            </div>
                            <p className="text-justify mt-3"><strong>{inmuebleId.financiamiento}</strong></p>
                            <p className='mt-2 pt-2 border-top'>Precios directos y pueden variar según metros o ubicación. Cambios sin previo aviso. Muebles y decoración no están incluidos.</p>
                        </div>
                        {inmuebleId.premio_inmueble &&
                            <div className='border-bottom mb-4'>
                                <div className='d-flex mt-4'>
                                    <img className={`${styles['small-image']}`} src="/ic_gift_banner.png" alt="Icono de ubicación" />
                                    <h2 className="h4">Promociòn</h2>
                                </div>
                                <p className="text-justify mt-3"><strong>{inmuebleId.premio_inmueble}</strong></p>
                            </div>
                        }

                    </div>
                </div>
                <div id="modelos" >
                    <ModeloInmueble inmuebleId={inmuebleId} />
                </div>
                <div className="col-12 col-md-8">
                    <div className="d-flex align-items-center">
                        <img className={` ${styles['small-image']}`} src="/ic_map_new.png" alt="Icono de estacionamiento" />
                        <h2 className="h4 my-4 py-1">Zona:  {inmuebleId.estado_name}, {inmuebleId.municipio_name}</h2>
                    </div>

                    <div>
                        <div id="mapa">
                            {/*       {console.log('lat:', inmuebleId.direccion_latitud, 'lng:', inmuebleId.direccion_longitud)}
                       */}      <MapComponent lat={inmuebleId.direccion_latitud} lng={inmuebleId.direccion_longitud} />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default DetallePage