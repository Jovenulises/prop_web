
import MapComponent from './../../components/Google';



async function fetchDetalle() {
    // Agrega idEstado y idMunicipio como parámetros a fetchData

    const url = "https://www.propmexico.com/administrador/restApi/todosDesarrollos";

    const username = "tpTBK2QvT75a";
    const password = "9hntUZOb6fsw";

    const response = await fetch(url, {
        headers: {
            Authorization: `Basic ${btoa(`${username}:${password}`)}`,
        },
    });

    if (response.ok) {
        const data = await response.json();
        const detalle = data.banners.filter(inmuebles => inmuebles.activo === '1');

        return detalle;
    } else {
        console.error("Error en la respuesta del servidor para UBIACION:", response.status);

    }
}

async function MapaPage() {
    const detalle = await fetchDetalle();
    /* console.log(detalle) */
    return (
        <div>
            <div>
                <MapComponent
                    detalle={detalle}
                />
            </div>
        </div>
    );
};

export default MapaPage;
