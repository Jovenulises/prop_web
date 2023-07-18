"use client"
import styles from "../../components/Desarrollo.module.css"
import queryString from 'query-string';


const openWhatsApp = () => {
    const number = '+524424719449';
    const message = '¡ Hola ! Soy desarrollador, me gustaría subir un desarrollo a la aplicación.';
    const queryStringParams = queryString.stringify({ text: message }, { encode: false });
    const url = `https://wa.me/${number}?${queryStringParams}`;
    window.open(url);
};

const openWhatsAp = () => {
    const number = '+524424719449';
    const message = '¡ Hola Prop inmuebles ! Me gustaría informes sobre administración de condominios.';
    const queryStringParams = queryString.stringify({ text: message }, { encode: false });
    const url = `https://wa.me/${number}?${queryStringParams}`;
    window.open(url);
};

const openWhatsA = () => {
    const number = '+524424719449';
    const message = '¡ Hola ! Soy desarrollador, me gustaría cotizar paseo virtual y toma aérea.';
    const queryStringParams = queryString.stringify({ text: message }, { encode: false });
    const url = `https://wa.me/${number}?${queryStringParams}`;
    window.open(url);
};

const openWhats = () => {
    const number = '+524424719449';
    const message = '¡ Hola ! Soy desarrollador, me gustaría cotizar mobiliario urbano (bancas, botes de basura, módulos infantiles y gimnasios al aire libre).';
    const queryStringParams = queryString.stringify({ text: message }, { encode: false });
    const url = `https://wa.me/${number}?${queryStringParams}`;
    window.open(url);
};



export default function DesarrolloPage() {
    return (
        <div className="p-3 mb-2 bg-body-tertiary">
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-3 shadow mb-5 bg-body-tertiary rounded list-group-item-action">
                        <p className="mt-4 px-5 text-center">Diversas empresas especializadas impulsan tu desarrollo de vivienda. La alianza con ellas <br /> permite darte un plus en productos y servicios siempre manejando estándares de calidad <br /> además de precios justos.</p>
                        <p className={` ${styles['border-top']}`} ></p>
                        <p className="mx-5 px-5 my-5 text-center"></p>
                    </div>
                    <div className="col-6 px-5 text-center shadow mb-5 bg-body-tertiary rounded list-group-item-action"
                    onClick={openWhatsApp}>
                        <img className={` ${styles['small-image']}`} src="/ic_cloud.png" alt="" />
                        <p className={` ${styles['border-top']}`} ></p>
                        <p className="my-4">Subir <br /> desarrollo</p>
                    </div>
                    <div className="col-6 px-5 text-center shadow mb-5 bg-body-tertiary rounded list-group-item-action"
                    onClick={openWhatsAp}>
                        <img className={` ${styles['small-image']}`} src="/ic_engrane.png" alt="" />
                        <p className={` ${styles['border-top']}`} ></p>
                        <p className="my-4">Administración <br /> de condominios</p>
                    </div>
                    <div className="col-6 px-5 text-center shadow mb-5 bg-body-tertiary rounded list-group-item-action"
                    onClick={openWhatsA}>
                        <img className={` ${styles['small-image']}`} src="/ic_virtual_banner.png" alt="" />
                        <img className={` ${styles['small-image']}`} src="/ic_dron.png" alt="" />
                        <p className={` ${styles['border-top']}`} ></p>
                        <p className="my-4">Paseo virtual <br /> Toma aérea</p>
                    </div>
                    <div className="col-6 px-5 text-center shadow mb-5 bg-body-tertiary rounded list-group-item-action"
                    onClick={openWhats}>
                        <img className={` ${styles['small-image']}`} src="/mobiliario_icon.png" alt="" />
                        <p className={` ${styles['border-top']}`} ></p>
                        <p className="my-4">Mobiliario <br /> urbano</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
