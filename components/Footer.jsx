import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Routes } from '../models';
import Link from 'next/link';

function Footer() {
    return (

        <div id="fh5co-page">
            <footer id="fh5co-footer" role="contentinfo">

                <div className="container">
                    <div className='row'>
                        <div className="col-md-3 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
                            <h2>Ubicación</h2>
                            <p>Práxedis Guerrero 170, Colonia Ricardo Flores Mongón, c.p.76148, Querétaro, Qro. México.</p>
                            <p><a href="https://api.whatsapp.com/send?phone=524424719449&text=%C2%A1%20Hola%20!%20Quiero%20publicar%20un%20Inmueble" className="btn btn-primary btn-outline with-arrow btn-sm">Más Información<i
                                className="icon-arrow-right"></i></a></p>
                        </div>

                        <div className="col-md-3 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
                            <h2>Menú</h2>
                            <ul className="float">
                                <li><Link href={Routes.HOME}>Inicio</Link></li>
                                <li><Link href={Routes.INMU}>Inmuebles</Link></li>
                                <li><Link href={Routes.MAPA}>Mapa</Link></li>
                                <li><Link href={Routes.FAVORITO}>Favoritos</Link></li>
                                <li><Link href={Routes.INFO}>Información</Link></li>
                            </ul>
                        </div>


                        <div className="col-md-3 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
                            <h2>CONTÁCTANOS</h2>
                            <ul className="float">
                                <li><a href="mailto:Info@propinmueblesmexico.com">info@propinmueblesmexico.com</a></li>
                                <li><a href="mailto:Soporte@propinmueblesmexico.com">soporte@propinmueblesmexico.com</a></li>
                                <li><a href="tel:+524424719449">(442) 471 94 49</a></li>
                            </ul>
                        </div>

                        <div className="col-md-2 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
                            <h2>Síguenos en</h2>
                            <ul className="fh5co-social d-flex ">
                                <li><a href="https://api.whatsapp.com/send?phone=524424719449&text=%C2%A1%20Hola%20!%20Quiero%20publicar%20un%20Inmueble"><i className="bi bi-whatsapp"></i></a></li>
                                <li><a href="https://www.facebook.com/nuevohogar.nuevahistoria"><i className="bi bi-facebook px-4"></i></a></li>
                                <li><a href="https://www.instagram.com/prop_inmuebles_mx/"><i className="bi bi-instagram"></i></a></li>
                         </ul>
                    </div>


                    <div className="col-md-12 fh5co-copyright text-center">
                        <p>&copy; 2023 Prop Inmuebles. Derechos Reservados.</p>
                    </div>

                </div>
        </div>
            </footer >
        </div >

    )
}


export default Footer;