"use client"
import { useRouter } from 'next/navigation'
import 'bootstrap/dist/css/bootstrap.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Inmueble.module.css';
import numeral from 'numeral';
import TipoInmuebleBanner from './TipoInmuebleBanner'

import ImagenBanner from './ImagenBanner'




function InmubleFiltrado({ inmueblesFiltrados, estados }) {
  // console.log(inmueblesFiltrados)


  if (!inmueblesFiltrados || !estados) {
    return null; // Manejar el caso en el que los datos sean nulos o no estén disponibles
  }


  const router = useRouter()

  return (
    <div className={`container  py-1 my-1 property-card ${styles['property-card']}`}>
      {inmueblesFiltrados.length > 0 ?
        inmueblesFiltrados.map((inmuble) => {
          const estado = estados.find((estado) => estado.id === inmuble.direccion_estado);
          //   const municipio = municipios.find((municipio) => municipio.id === inmuble.direccion_municipio);
          const handleLogoClick = () => {
            router.push(`/detalle/${inmuble.id}/#galeria`)
          }


          return (
            <div className="row mx-1 my-3 bordere list-group-item-action" key={inmuble.id_inmueble}>
              <div className="col-12 col-md-4 bordere-img">
                <ImagenBanner inmuble={inmuble} />
              </div>


              <div className="col-12 col-md-8 manita"
                onClick={handleLogoClick}>
                <div className={`d-flex mt-3 ${styles['location']}`}>
                  <img className={` ${styles['small-image']} img-fluid`} src="/ic_map_new.png" alt="Icono de ubicación" />
                  <p className="h6 mt-2">{estado && estado.nombre}.</p>
                  {inmuble.premio_inmueble && (
                    <img className={`img-fluid ${styles['small-image']} ml-auto d-block`} src="/ic_gift_banner.png" alt={inmuble.premio_inmueble} />
                  )}
                </div>
                <div>
                  <h2 className={`h4 m-1 ${styles['property-title']}`}>{inmuble.nombre_desarrollo}</h2>
                  <TipoInmuebleBanner modelo_tipo_uno={inmuble.modelo_tipo_uno} modelo_tipo_dos={inmuble.modelo_tipo_dos}  />
                  <span className={`h4 ${styles['property-price']}`}>
                    $ {numeral(inmuble.precio).format('0,0').replace(',', ',')} MXN
                  </span>
                </div>
                <div className="row">
                  <div className="col-12 col-md-9 pt-2 d-flex flex-column text-center">
                    <div className="row justify-content-between">
                      {inmuble.modelo_cuart_uno &&
                        <div className={`col-4 col-md-2 gift-m d-flex flex-column align-items-center property-detail ${styles['property-detail']}`}>
                          {/*  <p className="parrafo">Cuartos</p> */}
                          <div className="d-flex align-items-center">
                            <img className={` ${styles['small-image']}`} src="/ic_bed.png" alt="Icono de habitaciones" />
                            {/*   <span> {inmuble.modelo_cuart_uno}</span> */}
                          </div>
                          <p className='parrafo'>dorm  <span> {inmuble.modelo_cuart_uno}</span> </p>
                        </div>
                      }

                      {inmuble.modelo_bano_uno &&
                        <div className={`col-4 col-md-2 gift-m d-flex flex-column align-items-center property-detail ${styles['property-detail']}`}>
                          {/*   <p className="parrafo">Baños</p> */}
                          <div className="d-flex align-items-center">
                            <img className={` ${styles['small-image']}`} src="/bano.png" alt="Icono de baños" />
                            {/*    <span>{inmuble.modelo_bano_uno}</span> */}
                          </div>
                          <p className='parrafo'>bañ <span>{inmuble.modelo_bano_uno}</span></p>
                        </div>
                      }

                      {inmuble.modelo_auto_uno &&
                        <div className={`col-4 col-md-2 gift-m d-flex flex-column align-items-center property-detail ${styles['property-detail']}`}>
                          {/*   <p className="parrafo">Cochera</p> */}
                          <div className="d-flex align-items-center">
                            <img className={` ${styles['small-image']}`} src="/estacionamiento.png" alt="Icono de estacionamiento" />
                            {/*     <span>{inmuble.modelo_auto_uno}</span> */}
                          </div>
                          <p className='parrafo'>coch <span>{inmuble.modelo_auto_uno}</span></p>
                        </div>
                      }

                      {inmuble.modelo_pisos_uno &&
                        <div className={`col-4 col-md-2 gift-m d-flex flex-column align-items-center property-detail  ${styles['top-m']} ${styles['property-detail']}`}>
                          {/*          <p className="parrafo">pisos</p> */}
                          <div className="d-flex align-items-center">
                            <img className={` ${styles['small-image']}`} src="/piso_planta_detalle.png" alt="Icono de estacionamiento" />
                            {/*   <span>{inmuble.modelo_pisos_uno}</span> */}
                          </div>
                          <p className='parrafo'>pi <span>{inmuble.modelo_pisos_uno}</span></p>
                        </div>
                      }

                      {inmuble.modelo_const_uno &&
                        <div className={`col-4 col-md-2 gift-m d-flex flex-column align-items-center property-detail  ${styles['top-m']} ${styles['property-detail']}`}>
                          {/*        <p className="parrafo">Construcción</p> */}
                          <div className="d-flex align-items-center">
                            <img className={` ${styles['small-image']}`} src="/construccion.png" alt="Icono de estacionamiento" />
                            {/*   <span>{inmuble.modelo_const_uno} mts²</span> */}
                          </div>
                          <p className='parrafo'>cont. <span>{inmuble.modelo_const_uno} mts²</span></p>
                        </div>
                      }

                      {inmuble.modelo_area_uno &&
                        <div className={`col-4 col-md-2 gift-m d-flex flex-column align-items-center property-detail  ${styles['top-m']} ${styles['property-detail']}`}>
                          {/*                  <p className="">Predio</p> */}
                          <div className="d-flex align-items-center">
                            <img className={` ${styles['small-image']}`} src="/area_total.png" alt="Icono de estacionamiento" />
                            {/* <span>{inmuble.modelo_area_uno} mts²</span> */}
                          </div>
                          <p className='parrafo'>pred. <span>{inmuble.modelo_area_uno} mts²</span></p>

                        </div>
                      }

                    </div>
                  </div>

                  {inmuble.informacion_extra &&
                    <div className='px-3'>
                      <p className='parrafo'>
                        {inmuble && inmuble.informacion_extra ? inmuble.informacion_extra.substring(0, 110) : ''}...
                      </p>
                    </div>
                  }
                  <div className={`border-top  mb-1 col-12 col-md-12 justify-content-between ${styles['margen']}`}>
                    <div className="justify-content-end d-flex">
                      <div className={`my-2 mx-1 pt-2 property-action ${styles['margenboton']} ${styles['property-action']}`}>
                        <button className={` ${styles['button-heart']} ${styles['property-button']}`}>
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
                      <div className={`my-2 mx-1 pt-2 ${styles['margenboton']}`}>
                        <a href={`https://wa.me/52${inmuble.telefono_contacto}`} target="_blank">
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
                      <div className={`my-2 mx-1 pt-2 ${styles['margenboton']}`}>
                        <a href={`tel:+52${inmuble.telefono_contacto}`}>
                          <button className={`${styles['rounded-button']}`}>Llamar</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }) // Aquí estaba la llave adicional que sobraba.
        :

        <div></div>
      }
    </div>
  );
}

export default InmubleFiltrado;
