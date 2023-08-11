"use client"
import { useRouter } from 'next/navigation'
import 'bootstrap/dist/css/bootstrap.css';
import styles from './Inmueble.module.css';
import ImagenBlog from './ImagenBlog'




function BlogNoticias({ inmueble, estados, municipios }) {
  // console.log(inmueble)
  if (!inmueble || !estados || !municipios) {
    return null; // Manejar el caso en el que los datos sean nulos o no estén disponibles
  }

  const router = useRouter()

  return (
    <div className='container'>
      <div className='row'>

        {inmueble.map((inmuble) => {
         
          const handleLogoClick = () => {
            router.push(`/detalle/${inmuble.id}/#galeria`)

          }


          return (
            <div className='col-6 col-md-3 mb-5 pb-5' key={inmuble.id_inmueble}>
              <div className={`container  py-1 my-1 property-card ${styles['property-card']}`}>
                <div className="row my-3 bordere-blog list-group-item-action">
                  <div className="col-12 col-md-12 bordere-img-blog">
                    <ImagenBlog inmuble={inmuble} />
                  </div>
                   <div className="col-12 col-md-12 manita"
                    onClick={handleLogoClick}>
                    <div className={`d-flex mt-3 ${styles['location']}`}>
                     <h2 className="h5 mt-2">{/* {inmuble.nombre_desarrollo  } */} ÚLTIMAS NOTICIAS</h2>
                    </div>
                    <div className='mb-3 pb-3'>
                      <p className={`h4 m-1 ${styles['property-title']}`}>{inmuble.direccion_colonia}</p>
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


export default BlogNoticias;
