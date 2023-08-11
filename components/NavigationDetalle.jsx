import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import styles from './Navigation.module.css';
import { Routes } from '../models';


export default function NavigationDetalle() {

    return (
        <header id="header" className={`${styles.headerr} ${styles.fixedTop} ${styles.shadow}`}>
            <div className={`${styles.containerFluid} d-flex justify-content-between align-items-center`}>
                <div className="d-flex justify-content-start align-items-center">
                    <h1 className={`${styles.logo} me-auto me-lg-0`}>
                    </h1>
                    <nav id="navbar" className={`${styles.navbar} order-last order-lg-0`}>
                        <ul>
                            <li><a href="#galeria">Galeria</a></li>
                            <li><a href="#informacion">Información</a></li>
                            <li><a href="#modelos">Modelos</a></li>
                            <li><a href="#mapa">Mapa</a></li>
                        </ul>
                        <i className={`${styles.mobiles}bi `}></i>
                    </nav>
                </div>
            </div>
        </header>
    )
}