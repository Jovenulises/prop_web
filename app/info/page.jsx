"use client"
import { useRouter } from 'next/navigation'
import styles from "../../components/Desarrollo.module.css"
import queryString from 'query-string';

const openWhatsApp = () => {
    const number = '+524424719449';
    const message = '¡Hola! Prop Inmuebles, ¿podrías darme informes sobre la aplicación? Gracias.';
    const queryStringParams = queryString.stringify({ text: message }, { encode: false });
    const url = `https://wa.me/${number}?${queryStringParams}`;
    window.open(url);
};



export default function InfoPage() {

    const router = useRouter();

    const handleLogoClick = () => {
        router.push(`/servicios`)
    }

    const handleLogoClic = () => {
        router.push(`/desarrollo`)
    }


    return (

        <div className="container" >
            <div className="row">
                <div className="col-12 mt-3 shadow mb-5 bg-body-tertiary rounded list-group-item-action"
                >
                    <p className="mt-4 px-5 text-center">Encuentra proveedores directos para equipar el hogar. <br />Optimiza tiempos y gana <br />¿ Eres desarrollador de vivienda o agente ?
                        <br />  Esto también es para ti cliente.</p>
                    <p className={` ${styles['border-top']}`} ></p>
                    <p className="mx-5 px-5 text-center">Agente y Desarrollador</p>
                </div>
                <div className="col-6 px-5 text-center shadow mb-5 bg-body-tertiary rounded list-group-item-action"
                    onClick={handleLogoClick}>
                    <img className={` ${styles['small-image']}`} src="/ic_foco.png" alt="" />
                    <p className={` ${styles['border-top']}`} ></p>
                    <p className="my-4">Productos <br /> Servicios</p>
                </div>
                <div className="col-6 px-5 text-center shadow mb-5 bg-body-tertiary rounded list-group-item-action"
                    onClick={handleLogoClic}>
                    <img className={` ${styles['small-image']}`} src="/ic_worker_plano.png" alt="" />
                    <p className={` ${styles['border-top']}`} ></p>
                    <p className="my-4">Desarrollo <br />Vivienda</p>
                </div>

                <div
                    className="col-12 text-center shadow mb-5 bg-body-tertiary rounded list-group-item-action"
                    onClick={openWhatsApp}
                >
                    <img className={` ${styles['small-image']}`} src="/ic_brocker_one.png" alt="" />
                    <img className={` ${styles['small-image']}`} src="/ic_brocker_two.png" alt="" />
                    <p className={` ${styles['border-top']}`}></p>
                    <p className="my-4">Informes / Quejas</p>
                </div>


            </div>
        </div >

    )
}
