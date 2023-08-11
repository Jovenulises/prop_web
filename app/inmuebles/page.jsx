import Filter from '../../components/Filter';
import Inmuble from '../../components/Inmueble';
import InmubleFiltrado from '../../components/InmuebleFiltrado';
import NavigationBuscador from '../../components/NavigationBuscador';

import 'swiper/css';


async function fetchData() {
  // Agrega idEstado y idMunicipio como parámetros a fetchData

  const url = "https://www.propmexico.com/administrador/restApi/todosDesarrollos///////////////////////////";
  const url2 = "https://www.propmexico.com/administrador/restApi/getEstados////////////////////";
  const url3 = "https://www.propmexico.com/administrador/restApi/traerMunicipios/////////////////////////////////////////////////////////////////";
  /*   const url4 = "https://www.propmexico.com/administrador/restApi/traerColonias"; // Agrega la URL de colonias
   */
  const username = "tpTBK2QvT75a";
  const password = "9hntUZOb6fsw";

  const response = await fetch(url, {
    headers: {
      Authorization: `Basic ${btoa(`${username}:${password}`)}`,
    },
  });

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
  /* 
    const response4 = await fetch(url4, {
      headers: {
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
    }); */


  if (response.ok) {
    const data = await response.json();
    const inmueble = data.banners.filter(inmuebles => inmuebles.activo === '1' && inmuebles.destacada_solicitar === '1');

    if (response2.ok) {
      const data2 = await response2.json();
      const estados = data2.estados;

      if (response3.ok) {
        const data3 = await response3.json();
        const municipios = data3.municipios;

        /*  if (response4.ok) {
           const data4 = await response4.json();
           const colonias = data4.colonias; */

        return { inmueble, estados, municipios };
      } else {
        console.error("Error en la respuesta del servidor para colonias:", response3.status);
      }
    } else {
      console.error("Error en la respuesta del servidor para municipios:", response2.status);
    }
  } else {
    console.error("Error en la respuesta del servidor para estados:", response.status);

  }
  return {};

}

async function InmueblesPage() {
  const { inmueble, estados, municipios } = await fetchData();

  /*  console.log(inmuble, estados, municipios) */
  return (
    <div>
      <NavigationBuscador
         inmueble={inmueble}
         estados={estados}
         municipios={municipios}  />

      <div>
        <InmubleFiltrado />
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

export default InmueblesPage
