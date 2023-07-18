import React from 'react'
import styles from './PublicidadDetalle.module.css';

export default function PublicidadDetalle() {
    return (
        <div  className={`col-md-4 ${styles['publicidadDetalle']}`} >
            <img className='img-fluid' src="/publicidad.png" alt="" />
        </div>
    )
}
