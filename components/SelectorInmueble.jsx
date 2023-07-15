import Filter from '../components/Filter';
import Inmuble from '../components/Inmueble';

async function fetchEstados() {
    // Agrega idEstado y idMunicipio como parámetros a fetchData

    const url2 = "https://www.propmexico.com/administrador/restApi/getEstados";
    const url3 = "https://www.propmexico.com/administrador/restApi/traerMunicipios";

    const username = "tpTBK2QvT75a";
    const password = "9hntUZOb6fsw";

    const response2 = await fetch(url2, {
        headers: {
            Authorization: `Basic ${btoa(`${username}:${password}`)}`,
        },
    });

    const response3 = await fetch(url3, {
        headers: {
            Authorization: `Basic ${btoa(`${username}:${password}`)}`,
        },
    });


    if (response2.ok) {
        const data2 = await response2.json();
        const estados = data2.estados;

        if (response3.ok) {
            const data3 = await response3.json();
            const municipios = data3.municipios;


            return { estados, municipios };
        } else {
            console.error("Error en la respuesta del servidor para colonias:", response3.status);
        }
    } else {
        console.error("Error en la respuesta del servidor para municipios:", response2.status);
    }

    return {};

}

async function SelectorInmueble() {
    const { estados, municipios } = await fetchEstados();

    console.log(inmueble, estados, municipios)
    return (
        <div>
            <div>
                <Filter
                    inmueble={inmueble}
                    estados={estados}
                    municipios={municipios} />
            </div>
            <div>
                <Inmuble
                    inmueble={inmueble}
                    estados={estados}
                    municipios={municipios}
                />
            </div>
        </div>

    );
};

export default SelectorInmueble
