import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import styles from './Navigation.module.css';
import {Routes} from '../models';


export function Navigation() {

    return (
        <header id="header" className={`${styles.header} ${styles.fixedTop} ${styles.shadow}`}>
            <div className={`${styles.containerFluid} d-flex justify-content-between align-items-center`}>
                <div className="d-flex justify-content-start align-items-center">
                    <h1 className={`${styles.logo} me-auto me-lg-0`}>
                        <img className={`mx-4 ${styles.logo}`} src="/logo_prop.webp" alt="Logo de la página" />
                    </h1>
                    <nav id="navbar" className={`${styles.navbar} order-last order-lg-0`}>
                        <ul>
                            <li>
                                <Link href={Routes.HOME}>Inicio</Link>
                            </li>
                            <li>
                                <Link href={Routes.MAPA}>Mapa</Link>
                            </li>
                            <li>
                                <Link href={Routes.FAVORITO}>Favoritos</Link>
                            </li>
                            <li>
                                <Link href={Routes.INFO}>Información</Link>
                            </li>
                        </ul>
                        <i className={`${styles.mobiles}bi bi-list`}></i>
                    </nav>
                </div>
                <div className={` d-flex ${styles.movil}`}>
                    <Link href="/publicar">
                        <button className={`${styles.publicar}`}>Publicar</button>
                    </Link>
                    <a href="https://www.propmexico.com/administrador/" className={`${styles.linkButton}`}>
                        <button className={`${styles.sesion}`}>Login</button>
                    </a>
                </div>
            </div>
        </header>
    )
}