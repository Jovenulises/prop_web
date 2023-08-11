import Filter from '../components/Filter';
import Inmuble from '../components/Inmueble';

import BlogVivieda from '../components/BlogVivieda';
import BlogSocios from '../components/BlogSocios'
import BlogAsesores from '../components/BlogAsesores';
import BlogNoticias from '../components/BlogNoticias';
import InmubleFiltrado from '../components/InmuebleFiltrado';


import 'swiper/css';

async function fetchData() {
  // Agrega idEstado y idMunicipio como parámetros a fetchData

  const url = "https://www.propmexico.com/administrador/restApi/todosDesarrollos///////////////////////////////";
  const url1 = "https://www.propmexico.com/administrador/restApi/todosBlogs///////////////////////////////////////////////////////////////////////////////";
  const url2 = "https://www.propmexico.com/administrador/restApi/getEstados//////";
  const url3 = "https://www.propmexico.com/administrador/restApi/traerMunicipios/////";
  /*   const url4 = "https://www.propmexico.com/administrador/restApi/traerColonias"; // Agrega la URL de colonias
   */
  const username = "tpTBK2QvT75a";
  const password = "9hntUZOb6fsw";

  const response = await fetch(url, {
    headers: {
      Authorization: `Basic ${btoa(`${username}:${password}`)}`,
    },
  });

  const response1 = await fetch(url1, {
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


    if (response1.ok) {
      const data1 = await response1.json();
      const blog = data1.banners.filter(inmuebles => inmuebles.modelo_tipo_uno === '2222' && inmuebles.destacada_solicitar === '3')
      const asesor = data1.banners.filter(inmuebles => inmuebles.modelo_tipo_uno === '3333' && inmuebles.destacada_solicitar === '3')
      const socios = data1.banners.filter(inmuebles => inmuebles.modelo_tipo_uno === '4444' && inmuebles.destacada_solicitar === '3')


      if (response2.ok) {
        const data2 = await response2.json();
        const estados = data2.estados;

        if (response3.ok) {
          const data3 = await response3.json();
          const municipios = data3.municipios;

          /*  if (response4.ok) {
             const data4 = await response4.json();
             const colonias = data4.colonias; */

          return { inmueble, blog,  asesor, socios, estados, municipios };
        } else {
          console.error("Error en la respuesta del servidor para colonias:", response3.status);
        }
      } else {
        console.error("Error en la respuesta del servidor para municipios:", response2.status);
      }
    } else {
      console.error("Error en la respuesta del servidor para estados:", response1.status);
    }
  } else {
    console.error("Error en la respuesta del servidor para municipios:", response.status);
  }
  return {};

}

async function IndexPage() {
  const { inmueble, blog, asesor, socios, estados, municipios } = await fetchData();

  console.log(asesor)
  return (
    <div>
      <div>
        <Filter
          inmueble={inmueble}
          estados={estados}
          municipios={municipios} />
      </div>

      <div>
        <InmubleFiltrado />
      </div>
      <div className='container-fluid'>
        <div className='row px-5'>
          <div className='col-12 col-md-12 pb-4'>
            <h2 className='text-center h2'>¡Encuentra las mejores propiedades en venta y alquiler!</h2>
            <p className='descrpcion-p'>Prop Inmuebles es el portal inmobiliario líder en búsqueda de propiedades e inmuebles en México.
              <br />  Si lo que quieres es alquilar o comprar un departamento, casa, local, oficina o terreno, este es el sitio para eso.</p>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row px-5'>
          <div className='col-12 col-md-12'>
            <h2 className='h2 border-bottom pb-4'> Para los desarrollos de vivienda</h2>
          </div>
        </div>
      </div>
      <div>
        <BlogVivieda
          inmueble={blog}
          estados={estados}
          municipios={municipios}
        />
      </div>
      <div className='container-fluid mt-5 pt-5'>
        <div className='row px-5'>
          <div className='col-12 col-md-12'>
            <h2 className=' h2 pt-4 border-bottom pb-4'> Para los asesores</h2>
          </div>
        </div>
      </div>
      <div>
        <BlogAsesores
          asesor={asesor}
          estados={estados}
          municipios={municipios}
        />
      </div>
      <div className='container-fluid'>
        <div className='row px-5'>
          <div className='col-12 col-md-12'>
            <h2 className=' h3'>Algunas de nuestras inmobiliarias más destacadas</h2>
          </div>
        </div>
        <BlogSocios
          inmueble={socios}
          estados={estados}
          municipios={municipios} />
      </div>
      <div className='container-fluid'>
        <div className='row pb-5'>
          <div className='col-md-12 col-12 text-center'>
            <img className='img-fluid' src="/banner-inicio.png" alt="" />
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row px-5'>
          <div className='col-12 col-md-12'>
            <h2 className=' h3'>Las últimas noticias</h2>
          </div>
        </div>
        <BlogNoticias
          inmueble={asesor}
          estados={estados}
          municipios={municipios} />
      </div>

      <div>{/* 
      <Inmuble 
          inmueble={inmueble} 
          estados={estados} 
          municipios={municipios}
        />  */}
      </div>
    </div>


  );
};

export default IndexPage
