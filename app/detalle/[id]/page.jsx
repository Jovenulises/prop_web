import styles from '../../../components/Detalle.module.css';


export default function DetallePage() {
    return (

        <div className="container mt-5">
            <div className="row border d-flex p-4">
                <div className="col-12 col-md-6 ">
                    <img className="img-fluid mt-3" src="/logo.jpg" alt=""/>
                </div>

                <div className="col-12 col-md-6">
                    <div className="d-flex m-1">
                        <img  className={` ${styles['small-image']}`} src="/ic_map_new.png" alt="Icono de ubicación"/>
                            <p className="h5 mt-2">ubicación</p>
                    </div>
                    <h2 className="h3 m-1 ">Guadalajara Departamentos en Renta Nomad Las Américas</h2>
                    <p className="mt-2 my-1">Renta Casa</p>
                    <p className="my-1">Desde</p>
                    <span className="h3 pt-1">$ 1,200,000 MXN</span>
                    <p className="mt-1 my-1">ID</p>
                    <span className="h3">A1234</span>

                    <div className="row mx-4 py-4">

                        <div  className={`col-12 col-md-12 justify-content-between  ${styles['margen']}`}>
                            <div className="justify-content-center d-flex">
                                <div className={`my-2  pt-2  ${styles['margenboton']}`}>
                                    <button className={` ${styles['button-heart']}`}>
                                        <svg width="1em" height="1em" viewBox="0 0 16 14" fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg" stroke="currentColor" color="currentColor"
                                            font-size="25px" stroke-width="0">
                                            <path
                                                d="M8 13.7c-.1 0-.3 0-.4-.1l-5.8-6a4.05 4.05 0 010-5.9C3.4.1 6.1.1 7.7 1.7l.3.4.4-.4c1.6-1.6 4.3-1.6 5.9 0 1.6 1.6 1.6 4.3 0 5.9l-5.9 5.9c-.1.1-.3.2-.4.2zM4.7 1.5c-.8 0-1.6.3-2.2.9-1.2 1.2-1.2 3.2 0 4.5L8 12.4l5.5-5.5c.6-.6.9-1.4.9-2.2 0-.8-.3-1.7-.9-2.3-1.2-1.2-3.2-1.2-4.5 0l-.6.7c-.2.2-.5.2-.7 0l-.8-.7c-.6-.6-1.4-.9-2.2-.9z"
                                                fill="#000">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                                <div  className={`my-2  mx-3 pt-2 ${styles['margenboton']}`}>
                                    <a href="https://wa.me/1234567890" target="_blank">
                                        <button data-qa="CARD_WHATSAPP"  className={` ${styles['button-what']}`}>
                                            <svg baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
                                                width="1em" height="1em" fill="currentColor" stroke="currentColor"
                                                color="currentColor" font-size="25px">
                                                <path
                                                    d="M84.9 49c0 18.8-15.4 34-34.3 34-5.8 0-11.5-1.4-16.6-4.2l-19 6 6.2-18.3C18 61.3 16.3 55.2 16.3 49c0-18.8 15.4-34 34.3-34s34.3 15.2 34.3 34zM50.6 20.4c-15.9 0-28.8 12.8-28.8 28.6 0 6.3 2 12.1 5.5 16.8l-3.6 10.6 11.1-3.5c4.7 3.1 10.2 4.7 15.9 4.7 15.9 0 28.8-12.8 28.8-28.6-.1-15.7-13-28.6-28.9-28.6zm17.3 36.5c-.2-.3-.8-.6-1.6-1s-5-2.4-5.7-2.7c-.8-.3-1.3-.4-1.9.4-.6.8-2.2 2.7-2.7 3.3-.5.6-1 .6-1.8.2-.8-.4-3.6-1.3-6.8-4.1-2.5-2.2-4.2-4.9-4.7-5.8-.5-.8 0-1.3.4-1.7.4-.4.8-1 1.3-1.5.4-.5.6-.8.8-1.4.3-.6.1-1-.1-1.5-.2-.4-1.9-4.5-2.6-6.2-.7-1.7-1.4-1.4-1.9-1.4s-1.1-.1-1.6-.1c-.9 0-1.7.4-2.2 1-.8.8-2.9 2.9-2.9 7s3 8.1 3.4 8.6 5.8 9.3 14.4 12.6c8.6 3.3 8.6 2.2 10.1 2.1 1.5-.1 5-2 5.7-4 .6-1.8.6-3.5.4-3.8z">
                                                </path>
                                            </svg>
                                        </button>
                                    </a>
                                </div>
                                <div className={` my-2 pt-2 ${styles['margenboton']}`}>
                                    <a href="tel:123-456-7890">
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
                            <h2 className="h3">Información</h2>
                            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore,
                                magnam rem facilis
                                itaque exercitationem repudiandae deleniti officia ipsam inventore iste sequi? Molestiae
                                assumenda hic sequi provident magni consectetur quis. Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Enim, neque fugiat assumenda nobis nam facere! Maxime
                                ducimus
                                nam inventore, laborum, animi alias perspiciatis neque at saepe tempore sit quia?
                                Perspiciatis?</p>
                            <br/>
                                <h2 className="h3 ">Amenidades</h2>
                                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore,
                                    magnam rem facilis
                                    itaque exercitationem repudiandae deleniti officia ipsam inventore iste sequi? Molestiae
                                    assumenda hic sequi provident magni consectetur quis. Lorem ipsum dolor, sit amet
                                    consectetur adipisicing elit. Enim, neque fugiat assumenda nobis nam facere! Maxime ducimus
                                    nam inventore, laborum, animi alias perspiciatis neque at saepe tempore sit quia?
                                    Perspiciatis?</p>
                                <h2 className="h3 ">Finanzamiento</h2>
                                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore,
                                    magnam rem facilis
                                    itaque exercitationem repudiandae deleniti officia ipsam inventore iste sequi? Molestiae
                                    assumenda hic sequi provident magni consectetur quis. Lorem ipsum dolor, sit amet
                                    consectetur adipisicing elit. Enim, neque fugiat assumenda nobis nam facere! Maxime ducimus
                                    nam inventore, laborum, animi alias perspiciatis neque at saepe tempore sit quia?
                                    Perspiciatis?</p>
                        </div>

                        <div className="col-12 col-md-6">
                            <h2 className="h4">Modelo Bruneo</h2>
                            <div className="d-flex">
                                <p className="me-5">Departamento</p>
                                <span>$ 1,200,000 MXN</span>
                            </div>
                            <hr/>
                                <div className="d-flex justify-content-between text-center">
                                    <div></div>
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Cuartos</p>
                                        <div className="d-flex align-items-center">
                                            <img  className={` ${styles['small-image']}`}  src="/ic_bed.png" alt="Icono de habitaciones"/>
                                                <span>10</span>
                                        </div>
                                    </div>
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Baños</p>
                                        <div className="d-flex align-items-center">
                                            <img c className={` ${styles['small-image']}`} src="/bano.png" alt="Icono de baños"/>
                                                <span>10</span>
                                        </div>
                                    </div>
                                    <div className="gift-m d-flex flex-column align-items-center">
                                        <p className="">Cochera</p>
                                        <div className="d-flex align-items-center">
                                            <img   className={` ${styles['small-image']}`}src="/estacionamiento.png"
                                                alt="Icono de estacionamiento"/>
                                                <span>10</span>
                                        </div>
                                    </div>
                                    <div></div>
                                </div>
                                <br/>
                                    <div className="my-5 py-1"></div>
                                    <div className="d-flex justify-content-between text-center">
                                        <div></div>
                                        <div className="gift-m d-flex flex-column align-items-center">
                                            <p className="">Pisos</p>
                                            <div className="d-flex align-items-center">
                                                <img  className={` ${styles['small-image']}`} src="/piso_planta_detalle.png" alt="Icono de habitaciones"/>
                                                    <span>10</span>
                                            </div>
                                        </div>
                                        <div className="gift-m d-flex flex-column align-items-center">
                                            <p className="">Construcción</p>
                                            <div className="d-flex align-items-center">
                                                <img  className={` ${styles['small-image']}`} src="/construccion.png" alt="Icono de baños"/>
                                                    <span>10</span>
                                            </div>
                                        </div>
                                        <div className="gift-m d-flex flex-column align-items-center">
                                            <p className="">Predio</p>
                                            <div className="d-flex align-items-center">
                                                <img  className={` ${styles['small-image']}`} src="/area_total.png"
                                                    alt="Icono de estacionamiento"/>
                                                    <span>10</span>
                                            </div>
                                        </div>
                                        <div></div>
                                    </div>
                                    <br/>
                                        <h2 className="h3 text-center mt-5 pt-4">Descripcion</h2>
                                        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                                            minus
                                            dignissimos aliquid
                                            officiis vitae obcaecati alias est animi! Quo aut ea molestias fugiat eaque, recusandae
                                            voluptatum minus est ad corporis.</p>
                                        <div className={`my-2 pt-2 text-center  ${styles['margenboto']}`} >
                                            <a href="#">
                                                <button className={` ${styles['rounded-button-paseo']}`}> Ver paseo Virtual</button>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-6 col-12 mb-5 ">
                                    <div className="d-flex align-items-center">
                                        <img  className={` ${styles['small-image']}`} src="/estacionamiento.png" alt="Icono de estacionamiento"/>
                                            <h2 className="h3 my-4 py-1">Presentación</h2>
                                    </div>
                                    <iframe width="100%" height="90%" src="https://www.youtube.com/embed/CfvcghgX5g4"
                                        title="YouTube video player" frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen></iframe>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="d-flex align-items-center">
                                        <img className={` ${styles['small-image']}`}  src="/estacionamiento.png" alt="Icono de estacionamiento"/>
                                            <h2 className="h3 my-4 py-1">Zona: Queretaro, San juan del Río</h2>
                                    </div>
                               

                                <div onload="initMap()">
                                <div id="map" style={{height: '500px', width: '100%'}}></div>


                                </div>
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                    <div className="col-md-6 col-12">

                    </div>
                </div>
            </div>
    

    )
}
