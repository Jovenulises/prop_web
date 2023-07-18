"use client"
import styles from "../../components/Desarrollo.module.css"
import queryString from 'query-string';

const openWhatsApp = () => {
  const number = '+524424719449';
  const message = '¡ Hola ! Deseo informes sobre póliza jurídica.';
  const queryStringParams = queryString.stringify({ text: message }, { encode: false });
  const url = `https://wa.me/${number}?${queryStringParams}`;
  window.open(url);
};


const openWhatsAp = () => {
    const number = '+524424719449';
    const message = '¡ Hola Prop inmuebles ! Me gustaría solicitar informes sobre Cancelería de baño además de la tarjeta gratuita de seguros y descuentos Prop Contigo.';
    const queryStringParams = queryString.stringify({ text: message }, { encode: false });
    const url = `https://wa.me/${number}?${queryStringParams}`;
    window.open(url);
  };
  
const openWhatsA = () => {
    const number = '+524424719449';
    const message = '¡ Hola ! Deseo informes sobre closet, cocina integral además de la tarjeta gratuita de seguros y descuentos Prop Contigo.';
    const queryStringParams = queryString.stringify({ text: message }, { encode: false });
    const url = `https://wa.me/${number}?${queryStringParams}`;
    window.open(url);
  };
  
const openWhats = () => {
    const number = '+524424719449';
    const message = '¡ Hola ! Deseo informes sobre impermeabilización y pintura además de la tarjeta gratuita de seguros y descuentos Prop Contigo.';
    const queryStringParams = queryString.stringify({ text: message }, { encode: false });
    const url = `https://wa.me/${number}?${queryStringParams}`;
    window.open(url);
  };

export default function ServiciosPage() {
    return (
        <div className="p-3 mb-2 bg-body-tertiary">
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-3 shadow mb-5 bg-body-tertiary rounded list-group-item-action">
                            <p className="mt-4 px-5 text-center">Súper precio y calidad para el hogar, <br />¡ Vive la experiencia con la tarjeta de seguros y <br /> descuentos Prop Contigo !</p>
                        <p className={` ${styles['border-top']}`} ></p>
                        <p className="mx-5 px-5 my-5 text-center"></p>
                    </div>
                    <div className="col-6 px-5 text-center shadow mb-5 bg-body-tertiary rounded list-group-item-action"
                     onClick={openWhatsApp}>
                        <img className={` ${styles['small-image']}`} src="/poliza_icon.png" alt="" />
                        <p className={` ${styles['border-top']}`} ></p>
                        <p className="my-4">Póliza <br />jurídica</p>
                    </div>
                    <div className="col-6 px-5 text-center shadow mb-5 bg-body-tertiary rounded list-group-item-action"
                    onClick={openWhatsAp}>
                        <img className={` ${styles['small-image']}`} src="/ic_canceleria.png" alt="" />
                        <p className={` ${styles['border-top']}`} ></p>
                        <p className="my-4">Cancelaría  <br />de baño</p>
                    </div>
                    <div className="col-6 px-5 text-center shadow mb-5 bg-body-tertiary rounded list-group-item-action"
                    onClick={openWhatsA}>
                        <img className={` ${styles['small-image']}`} src="/ic_armario.png" alt="" />
                        <p className={` ${styles['border-top']}`} ></p>
                        <p className="my-4">Clóset <br />Cocina integral</p>
                    </div>
                    <div className="col-6 px-5 text-center shadow mb-5 bg-body-tertiary rounded list-group-item-action"
                    onClick={openWhats}>
                        <img className={` ${styles['small-image']}`} src="/ic_brocha.png" alt="" />
                        <p className={` ${styles['border-top']}`} ></p>
                        <p className="my-4">Impermeable <br /> Pintura</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
