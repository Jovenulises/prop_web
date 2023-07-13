"use client"

import Mapa from './../../components/Google';

async function fetchDatos() {
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
        return data.banners.filter(inmueble => inmueble.activo === '1' && inmueble.destacada_solicitar === '1');
    } else {
        console.error("Error en la respuesta del servidor para colonias:", response.status);
    }

    return [];
}

async function MapaPage() {
    const inmuble = await fetchDatos();
    
    return (
        <div>
            <Mapa inmuble={inmuble} />
        </div>
    );
}

export default MapaPage;
