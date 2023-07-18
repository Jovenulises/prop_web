import styles from './Detalle.module.css';
import TipoInmueble from './TipoInmueble';

class Inmueble {
    constructor(nombre, precio, desc, cuartos, banos, tipo, autos, construccion, area, paseo, pisos) {
        this.nombre = nombre;
        this.precio = precio;
        this.desc = desc;
        this.cuartos = cuartos;
        this.banos = banos;
        this.tipo = tipo;
        this.autos = autos;
        this.construccion = construccion;
        this.area = area;
        this.paseo = paseo;
        this.pisos = pisos;
    }
}

export default function ModeloInmueble(inmuebleId) {
    const inmuebleIdData = inmuebleId.inmuebleId;

    const modeloUno = new Inmueble(
        inmuebleIdData.modelo_nombre_uno,
        inmuebleIdData.modelo_precio_uno,
        inmuebleIdData.modelo_desc_uno,
        inmuebleIdData.modelo_cuart_uno,
        inmuebleIdData.modelo_bano_uno,
        inmuebleIdData.modelo_tipo_uno,
        inmuebleIdData.modelo_auto_uno,
        inmuebleIdData.modelo_const_uno,
        inmuebleIdData.modelo_area_uno,
        inmuebleIdData.modelo_paseo_uno,
        inmuebleIdData.modelo_pisos_uno
    );

    const modeloDos = new Inmueble(
        inmuebleIdData.modelo_nombre_dos,
        inmuebleIdData.modelo_precio_dos,
        inmuebleIdData.modelo_desc_dos,
        inmuebleIdData.modelo_cuart_dos,
        inmuebleIdData.modelo_bano_dos,
        inmuebleIdData.modelo_tipo_dos,
        inmuebleIdData.modelo_auto_dos,
        inmuebleIdData.modelo_const_dos,
        inmuebleIdData.modelo_area_dos,
        inmuebleIdData.modelo_paseo_dos,
        inmuebleIdData.modelo_pisos_dos
    );

    const modeloTres = new Inmueble(
        inmuebleIdData.modelo_nombre_tres,
        inmuebleIdData.modelo_precio_tres,
        inmuebleIdData.modelo_desc_tres,
        inmuebleIdData.modelo_cuart_tres,
        inmuebleIdData.modelo_bano_tres,
        inmuebleIdData.modelo_tipo_tres,
        inmuebleIdData.modelo_auto_tres,
        inmuebleIdData.modelo_const_tres,
        inmuebleIdData.modelo_area_tres,
        inmuebleIdData.modelo_paseo_tres,
        inmuebleIdData.modelo_pisos_tres
    );

    const modeloCuatro = new Inmueble(
        inmuebleIdData.modelo_nombre_cuatro,
        inmuebleIdData.modelo_precio_cuatro,
        inmuebleIdData.modelo_desc_cuatro,
        inmuebleIdData.modelo_cuart_cuatro,
        inmuebleIdData.modelo_bano_cuatro,
        inmuebleIdData.modelo_tipo_cuatro,
        inmuebleIdData.modelo_auto_cuatro,
        inmuebleIdData.modelo_const_cuatro,
        inmuebleIdData.modelo_area_cuatro,
        inmuebleIdData.modelo_paseo_cuatro,
        inmuebleIdData.modelo_pisos_cuatro
    );

    const modeloCinco = new Inmueble(
        inmuebleIdData.modelo_nombre_cinco,
        inmuebleIdData.modelo_precio_cinco,
        inmuebleIdData.modelo_desc_cinco,
        inmuebleIdData.modelo_cuart_cinco,
        inmuebleIdData.modelo_bano_cinco,
        inmuebleIdData.modelo_tipo_cinco,
        inmuebleIdData.modelo_auto_cinco,
        inmuebleIdData.modelo_const_cinco,
        inmuebleIdData.modelo_area_cinco,
        inmuebleIdData.modelo_paseo_cinco,
        inmuebleIdData.modelo_pisos_cinco
    );

    const modeloSeis = new Inmueble(
        inmuebleIdData.modelo_nombre_seis,
        inmuebleIdData.modelo_precio_seis,
        inmuebleIdData.modelo_desc_seis,
        inmuebleIdData.modelo_cuart_seis,
        inmuebleIdData.modelo_bano_seis,
        inmuebleIdData.modelo_tipo_seis,
        inmuebleIdData.modelo_auto_seis,
        inmuebleIdData.modelo_const_seis,
        inmuebleIdData.modelo_area_seis,
        inmuebleIdData.modelo_paseo_seis,
        inmuebleIdData.modelo_pisos_seis
    );

    const modelos = [modeloUno, modeloDos, modeloTres, modeloCuatro, modeloCinco, modeloSeis];

    //console.log(modeloUno);
    //console.log(modeloDos);
    //console.log(modeloTres);

    //console.log(inmuebleId)
    //console.log(Object.keys(inmuebleId));

    // ... (el resto de tu código sigue aquí) ...





    return (
        <div>
            {modelos.map((modelo, i) => (

                <div className="col-12 col-md-7 my-3 p-1" key={i}>
                    {modelo.nombre &&

                        <h2 className="h4">Modelo {modelo.nombre}</h2>
                    }
                    {modelo.precio &&

                        <>
                            <div className="d-flex">
                                <TipoInmueble modelo_tipo_uno={modelo.tipo} />
                                <span className='mx-3 px-3'> $ {Number(modelo.precio).toLocaleString()} MXN</span>
                            </div>

                        </>
                    }

                    {modelo.cuartos &&
                        <div className="d-flex justify-content-between text-center mt-3 pt-4 border-top">

                            {modelo.cuartos &&
                                <div className="gift-m d-flex flex-column align-items-center">
                                    <p className="">Cuartos</p>
                                    <div className="d-flex align-items-center">
                                        <img className={` ${styles['small-image']}`} src="/ic_bed.png" alt="Icono de habitaciones" />
                                        <span>{modelo.cuartos}</span>
                                    </div>
                                </div>
                            }
                            {modelo.banos &&
                                <div className="gift-m d-flex flex-column align-items-center">
                                    <p className="">Baños</p>
                                    <div className="d-flex align-items-center">
                                        <img className={` ${styles['small-image']}`} src="/bano.png" alt="Icono de baños" />
                                        <span>{modelo.banos}</span>
                                    </div>
                                </div>
                            }
                            {modelo.autos &&
                                <div className="gift-m d-flex flex-column align-items-center">
                                    <p className="">Cochera</p>
                                    <div className="d-flex align-items-center">
                                        <img className={` ${styles['small-image']}`} src="/estacionamiento.png" alt="Icono de estacionamiento" />
                                        <span>{modelo.autos}</span>
                                    </div>
                                </div>
                            }

                        </div>
                    }
                    <br />

                    {modelo.cuartos &&
                        <div className="d-flex justify-content-between text-center mt-3 pt-4 border-top">

                            {modelo.pisos &&
                                <div className="gift-m d-flex flex-column align-items-center">
                                    <p className="">Pisos</p>
                                    <div className="d-flex align-items-center">
                                        <img className={` ${styles['small-image']}`} src="/construccion.png" alt="Icono de construcción" />
                                        <span>{modelo.pisos}</span>
                                    </div>
                                </div>
                            }

                            {modelo.construccion &&
                                <div className="gift-m d-flex flex-column align-items-center">
                                    <p className="">Construcción</p>
                                    <div className="d-flex align-items-center">
                                        <img className={` ${styles['small-image']}`} src="/construccion.png" alt="Icono de construcción" />
                                        <span>{modelo.construccion}</span>
                                    </div>
                                </div>
                            }
                            {modelo.area &&
                                <div className="gift-m d-flex flex-column align-items-center">
                                    <p className="">Predio</p>
                                    <div className="d-flex align-items-center">
                                        <img className={` ${styles['small-image']}`} src="/area_total.png"
                                            alt="Icono de área" />
                                        <span>{modelo.area} mts²</span>
                                    </div>
                                </div>
                            }

                        </div>
                    }
                    {modelo.desc &&
                        <>
                            <h2 className="h3 text-center mt-5 py-4  border-top">Descripción</h2>
                            <p className="text-justify"> {modelo.desc} </p>
                        </>
                    }

                    {modelo.paseo &&
                        <div className={`my-2 pt-2 text-center  ${styles['margenboto']}`}>
                            <a href={modelo.paseo}>
                                <button className={` ${styles['rounded-button-paseo']}`}>Paseo Virtual</button>
                            </a>
                        </div>
                    }
                </div>


            ))}
        </div>
    );
}
