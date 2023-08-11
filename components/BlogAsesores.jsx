"use client"
import { useRouter } from 'next/navigation'
import 'bootstrap/dist/css/bootstrap.css';
import styles from './Inmueble.module.css';
import numeral from 'numeral';
import TipoInmuebleBanner from './TipoInmuebleBanner';
import ImagenBlog from './ImagenBlog'




function BlogAsesores({ asesor, estados, municipios }) {
  // console.log(inmueble)
  if (!asesor || !estados || !municipios) {
    return null; // Manejar el caso en el que los datos sean nulos o no estén disponibles
  }

  const router = useRouter()

  return (
    <div className='container'>
      <div className='row'>

        {asesor.map((asesor) => {
          const estado = estados.find((estado) => estado.id === asesor.direccion_estado);
          const municipio = municipios.find((municipio) => municipio.id === asesor.direccion_municipio);
          const handleLgoClick = () => {
            router.push(`/asesores/${asesor.id}`)

          }


          return (
            <div className='col-6 col-md-3 mb-5 pb-5' key={asesor.id_inmueble}>
              <div className={`container  py-1 my-1 property-card ${styles['property-card']}`}>
                <div className="row my-3 bordere-blog list-group-item-action">
                  <div className="col-12 col-md-12 bordere-img-blog">
                    <ImagenBlog inmuble={asesor} />
                  </div>
                 <div className="col-12 col-md-12 manita"
                    onClick={handleLgoClick}>
                    <div className={`d-flex mt-3 ${styles['location']}`}>
                     <h2 className="h6 mt-2">{asesor.nombre_desarrollo  }</h2>
                    </div>
                    <div className='mb-3 pb-3'>
                    </div>
                  </div>  
                </div>
              </div>
            </div>
          );
        })}


      </div>
    </div>
  );
};


export default  BlogAsesores;
