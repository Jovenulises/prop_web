"use client"
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import styles from './NavigationMovil.module.css';



import { Routes } from '../models';
import { slide as Menu } from 'react-burger-menu';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header id="header" className={`${styles.header} ${styles.fixedTop} ${styles.shadow}`}>
            <div className={`${styles.containerFluid} d-flex justify-content-between align-items-center`}>
                <div className="d-flex justify-content-between align-items-center" style={{ width: '100%' }}>
                    <div className="d-flex justify-content-start align-items-center">
                        <h1 className={`${styles.logo} me-auto me-lg-0`}>
                            <Link href={Routes.HOME}>  {/* Agregar esto */}
                            
                                    <img className={`mx-4 ${styles.logo}`} src="/logo_prop.webp" alt="Logo de la página" />
                                
                            </Link>  {/* Y esto */}
                        </h1>
                        <nav id="navbar" className={`${styles.navbar} order-last order-lg-0 desktop`}>
                            <ul>
                                <li><Link href={Routes.HOME}>Inicio</Link></li>
                                <li><Link href={Routes.MAPA}>Mapa</Link></li>
                                <li><Link href={Routes.FAVORITO}>Favoritos</Link></li>
                                <li><Link href={Routes.INFO}>Información</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className={`${styles.mobile} px-4 `}>
                        <FiMenu onClick={() => setIsOpen(!isOpen)} className={`${styles.burgerIcon} `} />
                        <Menu right isOpen={isOpen} customBurgerIcon={false} className={`${styles.mobileMenu}`} onClose={() => setIsOpen(false)}>
                            <Link onClick={() => setIsOpen(false)} href={Routes.HOME}>Inicio</Link>
                            <Link onClick={() => setIsOpen(false)} href={Routes.MAPA}>Mapa</Link>
                            <Link onClick={() => setIsOpen(false)} href={Routes.FAVORITO}>Favoritos</Link>
                            <Link onClick={() => setIsOpen(false)} href={Routes.INFO}>Información</Link>
                            <Link onClick={() => setIsOpen(false)} href="/publicar">
                                <button className={styles.publicar}>Publicar</button>
                            </Link>
                            <a onClick={() => setIsOpen(false)} href="https://www.propmexico.com/administrador/" className={styles.linkButton}>
                                <button className={styles.sesion}>Login</button>
                            </a>
                        </Menu>
                    </div>
                    <div className={styles.desktop}>
                        <Link href="/publicar">
                            <button className={styles.publicar}>Publicar</button>
                        </Link>
                        <a href="https://www.propmexico.com/administrador/" className={styles.linkButton}>
                            <button className={styles.sesion}>Login</button>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}