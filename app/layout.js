
import "../src/styles/globals.css";
import { Navigation } from "../components/Navigation";


import Head from 'next/head';

export const metadata = {
  title: 'Venta de casas nuevas en Queretaro - Prop Inmuebles',
  description: '"Explora la renta, adquisición y venta de propiedades en México: desde casas y departamentos hasta terrenos. ¡Encuentra tu hogar ideal en Prop Inmuebles"',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300&family=Montserrat&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Navigation />
        {children}
      </body>
    </html >
  );
}
