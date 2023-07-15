
import styles from '../../../components/Detalle.module.css';
import TipoInmueble from '../../../components/TipoInmueble';
import numeral from 'numeral';

import MapComponent from '../../../components/Ubicacion';


async function getDetalle(id) {
    const username = "tpTBK2QvT75a";
    const password = "9hntUZOb6fsw";

    const urls = [
        `https://www.propmexico.com/administrador/restApi/todosDesarrollos/${id}`,
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
    const data2 = await res2.json();
    const data3 = await res3.json();

    // Find the inmueble with the provided id
    const inmueble = data1.banners.find(inmueble => inmueble.id_inmueble === id);

    // If inmueble doesn't exist, log an error and return
    if (!inmueble) {
        console.error(`No se encontró ningún inmueble con el id ${id}`);
        return;
    }

    // Find the corresponding estado and municipio
    const estado = data2.estados.find(estado => estado.id === inmueble.direccion_estado);
    const municipio = data3.municipios.find(municipio => municipio.id === inmueble.direccion_municipio);

    // Add the estado and municipio names to the inmueble object
    inmueble.estado_name = estado ? estado.nombre : null;
    inmueble.municipio_name = municipio ? municipio.nombre : null;

    return inmueble;
}


async function DetallePage({ params }) {


    const inmuebleId = await getDetalle(params.id)
    //console.log(params)

    return (

        <div className="container mt-5">
           {/*  {JSON.stringify(inmuebleId)}
   */}          <div className="row border d-flex p-4">
                <div className="col-12 col-md-6 ">
                    <img className="img-fluid mt-3" src="/logo.jpg" alt="" />
                </div>

                <div className="col-12 col-md-6">
                    <div className="d-flex m-1">
                        <img className={` ${styles['small-image']}`} src="/ic_map_new.png" alt="Icono de ubicación" />
                        <p className="h5 mt-2">{inmuebleId.estado_name}, {inmuebleId.municipio_name}</p>
                    </div>
                    <h2 className="h3 m-1 mb-3">{inmuebleId.nombre_desarrollo}</h2>
                    <TipoInmueble modelo_tipo_uno={inmuebleId.modelo_tipo_uno} />
                    <p className="my-1">Desde</p>
                    <span className={`h3 m-1 ${styles['property-price']}`}>
                        $ {numeral(inmuebleId.precio).format('0,0').replace(',', ',')} MXN
                    </span>
                    <p className="mt-1 my-1">ID</p>
                    <span className="h3">{inmuebleId.id}</span>

                    <div className="row mx-4 py-4">

                        <div className={`col-12 col-md-12 justify-content-between  ${styles['margen']}`}>
                            <div className="justify-content-center d-flex">
                                <div className={`my-2  pt-2  ${styles['margenboton']}`}>
                                    <button className={` ${styles['button-heart']}`}>
                                        <svg width="1em" height="1em" viewBox="0 0 16 14" fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg" stroke="currentColor" color="currentColor"
                                            fontSize="25px" strokeWidth="0">
                                            <path
                                                d="M8 13.7c-.1 0-.3 0-.4-.1l-5.8-6a4.05 4.05 0 010-5.9C3.4.1 6.1.1 7.7 1.7l.3.4.4-.4c1.6-1.6 4.3-1.6 5.9 0 1.6 1.6 1.6 4.3 0 5.9l-5.9 5.9c-.1.1-.3.2-.4.2zM4.7 1.5c-.8 0-1.6.3-2.2.9-1.2 1.2-1.2 3.2 0 4.5L8 12.4l5.5-5.5c.6-.6.9-1.4.9-2.2 0-.8-.3-1.7-.9-2.3-1.2-1.2-3.2-1.2-4.5 0l-.6.7c-.2.2-.5.2-.7 0l-.8-.7c-.6-.6-1.4-.9-2.2-.9z"
                                                fill="#000">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                                <div className={`my-2  mx-3 pt-2 ${styles['margenboton']}`}>
                                    <a href={`https://wa.me/52${inmuebleId.telefono_contacto}`} target="_blank">                     <button data-qa="CARD_WHATSAPP" className={` ${styles['button-what']}`}>
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
                </div>
                <div className="container">
                    <div className="row">
                        <div className=" col-md-6 col-12">
                            {inmuebleId.informacion_extra &&
                                <div>
                                    <h2 className="h3 mt-4">Información</h2>
                                    <p className="text-justify">{inmuebleId.informacion_extra}</p>
                                </div>
                            }

                            {inmuebleId.amenidades &&
                                <div>
                                    <h2 className="h3 mt-4">Amenidades</h2>
                                    <p className="text-justify">{inmuebleId.amenidades}</p>
                                </div>
                            }
                            <div>
                                <h2 className="h3 mt-4">Finanzamiento</h2>
                                <p className="text-justify"><strong>{inmuebleId.financiamiento}</strong></p>
                                <p>Precios directos y pueden variar según metros o ubicación. Cambios sin previo aviso. Muebles y decoración no están incluidos.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            {inmuebleId.modelo_nombre_uno &&
                                <h2 className="h4">Modelo {inmuebleId.modelo_nombre_uno}</h2>
                            }
                            {inmuebleId.modelo_precio_uno &&
                                <>
                                    <div className="d-flex">
                                        <TipoInmueble modelo_tipo_uno={inmuebleId.modelo_tipo_uno} />
                                        <span className='mx-3'> $ {Number(inmuebleId.modelo_precio_uno).toLocaleString()} MXN</span>
                                    </div>
                                    <hr />
                                </>
                            }
                            <div className="d-flex justify-content-between text-center">
                                <div></div>
                                {inmuebleId.modelo_cuart_uno &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Cuartos</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/ic_bed.png" alt="Icono de habitaciones" />
                                            <span>{inmuebleId.modelo_cuart_uno}</span>
                                        </div>
                                    </div>
                                }
                                {inmuebleId.modelo_bano_uno &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Baños</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/bano.png" alt="Icono de baños" />
                                            <span>{inmuebleId.modelo_bano_uno}</span>
                                        </div>
                                    </div>
                                }
                                {inmuebleId.modelo_auto_uno &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Cochera</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/estacionamiento.png" alt="Icono de estacionamiento" />
                                            <span>{inmuebleId.modelo_auto_uno}</span>
                                        </div>
                                    </div>
                                }
                                <div></div>
                            </div>
                            <br />

                            <div className="my-5 py-1"></div>
                            <div className="d-flex justify-content-between text-center">
                                <div></div>
                                {inmuebleId.modelo_pisos_uno &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Pisos</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/piso_planta_detalle.png" alt="Icono de habitaciones" />
                                            <span>{inmuebleId.modelo_pisos_uno}</span>
                                        </div>
                                    </div>
                                }
                                {inmuebleId.modelo_const_uno &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Construcción</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/construccion.png" alt="Icono de baños" />
                                            <span>{inmuebleId.modelo_const_uno}</span>
                                        </div>
                                    </div>
                                }
                                {inmuebleId.modelo_area_uno &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Predio</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/area_total.png"
                                                alt="Icono de estacionamiento" />
                                            <span>{inmuebleId.modelo_area_uno} mts²</span>
                                        </div>
                                    </div>
                                }
                                <div></div>
                            </div>
                            <br />
                            {inmuebleId.modelo_desc_uno &&
                                <>
                                    <h2 className="h3 text-center mt-5 pt-4">Descripcion</h2>
                                    <p className="text-justify"> {inmuebleId.modelo_desc_uno} </p>
                                </>
                            }

                            {inmuebleId.modelo_paseo_uno &&
                                <div className={`my-2 pt-2 text-center  ${styles['margenboto']}`}>
                                    <a href={inmuebleId.modelo_paseo_uno}>
                                        <button className={` ${styles['rounded-button-paseo']}`}> Ver paseo Virtual</button>
                                    </a>
                                </div>
                            }
                        </div>

                        <div className="col-12 col-md-6">
                            {inmuebleId.modelo_nombre_dos &&
                                <h2 className="h4">Modelo {inmuebleId.modelo_nombre_dos}</h2>
                            }
                            {inmuebleId.modelo_precio_dos &&
                                <>
                                    <div className="d-flex">
                                        <TipoInmueble modelo_tipo_dos={inmuebleId.modelo_tipo_dos} />
                                        <span className='mx-3'> $ {Number(inmuebleId.modelo_precio_dos).toLocaleString()} MXN</span>
                                    </div>
                                    <hr />
                                </>
                            }
                            <div className="d-flex justify-content-between text-center">
                                <div></div>
                                {inmuebleId.modelo_cuart_dos &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Cuartos</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/ic_bed.png" alt="Icono de habitaciones" />
                                            <span>{inmuebleId.modelo_cuart_dos}</span>
                                        </div>
                                    </div>
                                }
                                {inmuebleId.modelo_bano_dos &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Baños</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/bano.png" alt="Icono de baños" />
                                            <span>{inmuebleId.modelo_bano_dos}</span>
                                        </div>
                                    </div>
                                }
                                {inmuebleId.modelo_auto_dos &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Cochera</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/estacionamiento.png" alt="Icono de estacionamiento" />
                                            <span>{inmuebleId.modelo_auto_dos}</span>
                                        </div>
                                    </div>
                                }
                                <div></div>
                            </div>
                            <br />

                            <div className="my-5 py-1"></div>
                            <div className="d-flex justify-content-between text-center">
                                <div></div>
                                {inmuebleId.modelo_pisos_dos &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Pisos</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/piso_planta_detalle.png" alt="Icono de habitaciones" />
                                            <span>{inmuebleId.modelo_pisos_dos}</span>
                                        </div>
                                    </div>
                                }
                                {inmuebleId.modelo_const_dos &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Construcción</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/construccion.png" alt="Icono de baños" />
                                            <span>{inmuebleId.modelo_const_dos}</span>
                                        </div>
                                    </div>
                                }
                                {inmuebleId.modelo_area_dos &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Predio</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/area_total.png" alt="Icono de estacionamiento" />
                                            <span>{inmuebleId.modelo_area_dos} mts²</span>
                                        </div>
                                    </div>
                                }
                                <div></div>
                            </div>
                            <br />
                            {inmuebleId.modelo_desc_dos &&
                                <>
                                    <h2 className="h3 text-center mt-5 pt-4">Descripcion</h2>
                                    <p className="text-justify"> {inmuebleId.modelo_desc_dos} </p>
                                </>
                            }

                            {inmuebleId.modelo_paseo_dos &&
                                <div className={`my-2 pt-2 text-center  ${styles['margenboto']}`}>
                                    <a href={inmuebleId.modelo_paseo_dos}>
                                        <button className={` ${styles['rounded-button-paseo']}`}> Ver paseo Virtual</button>
                                    </a>
                                </div>
                            }
                        </div>

                        <div className="col-12 col-md-6">
                            {inmuebleId.modelo_nombre_tres &&
                                <h2 className="h4">Modelo {inmuebleId.modelo_nombre_tres}</h2>
                            }
                            {inmuebleId.modelo_precio_tres &&
                                <>
                                    <div className="d-flex">
                                        <TipoInmueble modelo_tipo_tres={inmuebleId.modelo_tipo_tres} />
                                        <span className='mx-3'> $ {Number(inmuebleId.modelo_precio_tres).toLocaleString()} MXN</span>
                                    </div>
                                    <hr />
                                </>
                            }
                            <div className="d-flex justify-content-between text-center">
                                <div></div>
                                {inmuebleId.modelo_cuart_tres &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Cuartos</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/ic_bed.png" alt="Icono de habitaciones" />
                                            <span>{inmuebleId.modelo_cuart_tres}</span>
                                        </div>
                                    </div>
                                }
                                {inmuebleId.modelo_bano_tres &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Baños</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/bano.png" alt="Icono de baños" />
                                            <span>{inmuebleId.modelo_bano_tres}</span>
                                        </div>
                                    </div>
                                }
                                {inmuebleId.modelo_auto_tres &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Cochera</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/estacionamiento.png" alt="Icono de estacionamiento" />
                                            <span>{inmuebleId.modelo_auto_tres}</span>
                                        </div>
                                    </div>
                                }
                                <div></div>
                            </div>
                            <br />

                            <div className="my-5 py-1"></div>
                            <div className="d-flex justify-content-between text-center">
                                <div></div>
                                {inmuebleId.modelo_pisos_tres &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Pisos</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/piso_planta_detalle.png" alt="Icono de habitaciones" />
                                            <span>{inmuebleId.modelo_pisos_tres}</span>
                                        </div>
                                    </div>
                                }
                                {inmuebleId.modelo_const_tres &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Construcción</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/construccion.png" alt="Icono de baños" />
                                            <span>{inmuebleId.modelo_const_tres}</span>
                                        </div>
                                    </div>
                                }
                                {inmuebleId.modelo_area_tres &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Predio</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/area_total.png" alt="Icono de estacionamiento" />
                                            <span>{inmuebleId.modelo_area_tres} mts²</span>
                                        </div>
                                    </div>
                                }
                                <div></div>
                            </div>
                            <br />
                            {inmuebleId.modelo_desc_tres &&
                                <>
                                    <h2 className="h3 text-center mt-5 pt-4">Descripcion</h2>
                                    <p className="text-justify"> {inmuebleId.modelo_desc_tres} </p>
                                </>
                            }

                            {inmuebleId.modelo_paseo_tres &&
                                <div className={`my-2 pt-2 text-center  ${styles['margenboto']}`}>
                                    <a href={inmuebleId.modelo_paseo_tres}>
                                        <button className={` ${styles['rounded-button-paseo']}`}> Ver paseo Virtual</button>
                                    </a>
                                </div>
                            }
                        </div>
                        <div className="col-12 col-md-6">
                            {inmuebleId.modelo_nombre_cuatro &&
                                <h2 className="h4">Modelo {inmuebleId.modelo_nombre_cuatro}</h2>
                            }
                            {inmuebleId.modelo_precio_cuatro &&
                                <>
                                    <div className="d-flex">
                                        <TipoInmueble modelo_tipo_cuatro={inmuebleId.modelo_tipo_cuatro} />
                                        <span className='mx-3'> $ {Number(inmuebleId.modelo_precio_cuatro).toLocaleString()} MXN</span>
                                    </div>
                                    <hr />
                                </>
                            }
                            <div className="d-flex justify-content-between text-center">
                                <div></div>
                                {inmuebleId.modelo_cuart_cuatro &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Cuartos</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/ic_bed.png" alt="Icono de habitaciones" />
                                            <span>{inmuebleId.modelo_cuart_cuatro}</span>
                                        </div>
                                    </div>
                                }
                                {inmuebleId.modelo_bano_cuatro &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Baños</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/bano.png" alt="Icono de baños" />
                                            <span>{inmuebleId.modelo_bano_cuatro}</span>
                                        </div>
                                    </div>
                                }
                                {inmuebleId.modelo_auto_cuatro &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Cochera</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/estacionamiento.png" alt="Icono de estacionamiento" />
                                            <span>{inmuebleId.modelo_auto_cuatro}</span>
                                        </div>
                                    </div>
                                }
                                <div></div>
                            </div>
                            <br />

                            <div className="my-5 py-1"></div>
                            <div className="d-flex justify-content-between text-center">
                                <div></div>
                                {inmuebleId.modelo_pisos_cuatro &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Pisos</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/piso_planta_detalle.png" alt="Icono de habitaciones" />
                                            <span>{inmuebleId.modelo_pisos_cuatro}</span>
                                        </div>
                                    </div>
                                }
                                {inmuebleId.modelo_const_cuatro &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Construcción</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/construccion.png" alt="Icono de baños" />
                                            <span>{inmuebleId.modelo_const_cuatro}</span>
                                        </div>
                                    </div>
                                }
                                {inmuebleId.modelo_area_cuatro &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Predio</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/area_total.png" alt="Icono de estacionamiento" />
                                            <span>{inmuebleId.modelo_area_cuatro} mts²</span>
                                        </div>
                                    </div>
                                }
                                <div></div>
                            </div>
                            <br />
                            {inmuebleId.modelo_desc_cuatro &&
                                <>
                                    <h2 className="h3 text-center mt-5 pt-4">Descripcion</h2>
                                    <p className="text-justify"> {inmuebleId.modelo_desc_cuatro} </p>
                                </>
                            }

                            {inmuebleId.modelo_paseo_cuatro &&
                                <div className={`my-2 pt-2 text-center  ${styles['margenboto']}`}>
                                    <a href={inmuebleId.modelo_paseo_cuatro}>
                                        <button className={` ${styles['rounded-button-paseo']}`}> Ver paseo Virtual</button>
                                    </a>
                                </div>
                            }
                        </div>

                        <div className="col-12 col-md-6">
                            {inmuebleId.modelo_nombre_cinco &&
                                <h2 className="h4">Modelo {inmuebleId.modelo_nombre_cinco}</h2>
                            }
                            {inmuebleId.modelo_precio_cinco &&
                                <>
                                    <div className="d-flex">
                                        <TipoInmueble modelo_tipo_cinco={inmuebleId.modelo_tipo_cinco} />
                                        <span className='mx-3'> $ {Number(inmuebleId.modelo_precio_cinco).toLocaleString()} MXN</span>
                                    </div>
                                    <hr />
                                </>
                            }
                            <div className="d-flex justify-content-between text-center">
                                <div></div>
                                {inmuebleId.modelo_cuart_cinco &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Cuartos</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/ic_bed.png" alt="Icono de habitaciones" />
                                            <span>{inmuebleId.modelo_cuart_cinco}</span>
                                        </div>
                                    </div>
                                }
                                {inmuebleId.modelo_bano_cinco &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Baños</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/bano.png" alt="Icono de baños" />
                                            <span>{inmuebleId.modelo_bano_cinco}</span>
                                        </div>
                                    </div>
                                }
                                {inmuebleId.modelo_auto_cinco &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Cochera</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/estacionamiento.png" alt="Icono de estacionamiento" />
                                            <span>{inmuebleId.modelo_auto_cinco}</span>
                                        </div>
                                    </div>
                                }
                                <div></div>
                            </div>
                            <br />

                            <div className="my-5 py-1"></div>
                            <div className="d-flex justify-content-between text-center">
                                <div></div>
                                {inmuebleId.modelo_pisos_cinco &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Pisos</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/piso_planta_detalle.png" alt="Icono de habitaciones" />
                                            <span>{inmuebleId.modelo_pisos_cinco}</span>
                                        </div>
                                    </div>
                                }
                                {inmuebleId.modelo_const_cinco &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Construcción</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/construccion.png" alt="Icono de baños" />
                                            <span>{inmuebleId.modelo_const_cinco}</span>
                                        </div>
                                    </div>
                                }
                                {inmuebleId.modelo_area_cinco &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Predio</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/area_total.png" alt="Icono de estacionamiento" />
                                            <span>{inmuebleId.modelo_area_cinco} mts²</span>
                                        </div>
                                    </div>
                                }
                                <div></div>
                            </div>
                            <br />
                            {inmuebleId.modelo_desc_cinco &&
                                <>
                                    <h2 className="h3 text-center mt-5 pt-4">Descripcion</h2>
                                    <p className="text-justify"> {inmuebleId.modelo_desc_cinco} </p>
                                </>
                            }

                            {inmuebleId.modelo_paseo_cinco &&
                                <div className={`my-2 pt-2 text-center  ${styles['margenboto']}`}>
                                    <a href={inmuebleId.modelo_paseo_cinco}>
                                        <button className={` ${styles['rounded-button-paseo']}`}> Ver paseo Virtual</button>
                                    </a>
                                </div>
                            }
                        </div>
                        <div className="col-12 col-md-6">
                            {inmuebleId.modelo_nombre_seis &&
                                <h2 className="h4">Modelo {inmuebleId.modelo_nombre_seis}</h2>
                            }
                            {inmuebleId.modelo_precio_seis &&
                                <>
                                    <div className="d-flex">
                                        <TipoInmueble modelo_tipo_seis={inmuebleId.modelo_tipo_seis} />
                                        <span className='mx-3'> $ {Number(inmuebleId.modelo_precio_seis).toLocaleString()} MXN</span>
                                    </div>
                                    <hr />
                                </>
                            }

                            <div className="d-flex justify-content-between text-center">
                                <div></div>
                                {inmuebleId.modelo_cuart_seis &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Cuartos</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/ic_bed.png" alt="Icono de habitaciones" />
                                            <span>{inmuebleId.modelo_cuart_seis}</span>
                                        </div>
                                    </div>
                                }
                                {inmuebleId.modelo_bano_seis &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Baños</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/bano.png" alt="Icono de baños" />
                                            <span>{inmuebleId.modelo_bano_seis}</span>
                                        </div>
                                    </div>
                                }
                                {inmuebleId.modelo_auto_seis &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Cochera</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/estacionamiento.png" alt="Icono de estacionamiento" />
                                            <span>{inmuebleId.modelo_auto_seis}</span>
                                        </div>
                                    </div>
                                }
                                <div></div>
                            </div>
                            <br />

                            <div className="my-5 py-1"></div>
                            <div className="d-flex justify-content-between text-center">
                                <div></div>
                                {inmuebleId.modelo_pisos_seis &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Pisos</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/piso_planta_detalle.png" alt="Icono de habitaciones" />
                                            <span>{inmuebleId.modelo_pisos_seis}</span>
                                        </div>
                                    </div>
                                }
                                {inmuebleId.modelo_const_seis &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Construcción</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/construccion.png" alt="Icono de baños" />
                                            <span>{inmuebleId.modelo_const_seis}</span>
                                        </div>
                                    </div>
                                }
                                {inmuebleId.modelo_area_seis &&
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Predio</p>
                                        <div className="d-flex align-items-center">
                                            <img className={` ${styles['small-image']}`} src="/area_total.png" alt="Icono de estacionamiento" />
                                            <span>{inmuebleId.modelo_area_seis} mts²</span>
                                        </div>
                                    </div>
                                }
                                <div></div>
                            </div>
                            <br />
                            {inmuebleId.modelo_desc_seis &&
                                <>
                                    <h2 className="h3 text-center mt-5 pt-4">Descripcion</h2>
                                    <p className="text-justify"> {inmuebleId.modelo_desc_seis} </p>
                                </>
                            }

                            {inmuebleId.modelo_paseo_seis &&
                                <div className={`my-2 pt-2 text-center  ${styles['margenboto']}`}>
                                    <a href={inmuebleId.modelo_paseo_seis}>
                                        <button className={` ${styles['rounded-button-paseo']}`}> Ver paseo Virtual</button>
                                    </a>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-12 mb-5 ">
                    <div className="">
                        {inmuebleId.toma_aerea &&
                            <div className={`my-2 pt-2 text-center  justify-content-center ${styles['margenboto']}`}>
                                <a href={inmuebleId.toma_aerea}>
                                    <button className={` ${styles['rounded-button-paseo']}`}>Precentacion</button>
                                </a>
                            </div>
                        }
                    </div>
                </div>
                <div className="col-12 col-md-12">
                    <div className="d-flex align-items-center">
                        <img className={` ${styles['small-image']}`} src="/estacionamiento.png" alt="Icono de estacionamiento" />
                        <h2 className="h3 my-4 py-1">Zona: {inmuebleId.estado_name}, {inmuebleId.municipio_name}</h2>
                    </div>

                    <div>
                        <div id="map" style={{ height: '500px', width: '100%' }}>
                            {console.log('lat:', inmuebleId.direccion_latitud, 'lng:', inmuebleId.direccion_longitud)}
                            <MapComponent lat={inmuebleId.direccion_latitud} lng={inmuebleId.direccion_longitud} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6"></div>
            <div className="col-md-6 col-12">

            </div>
        </div >



    )
}

export default DetallePage