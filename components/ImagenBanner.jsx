"use client"
import { useRouter } from 'next/navigation'
import React from 'react';
import Carousel from "nuka-carousel";

export default function ImagenBanner({ inmuble }) {
  //  console.log(inmuble);
  
  const router = useRouter()

  const handleLogoClick = () => {
    router.push(`/detalle/${inmuble.id}/#galeria`)
    
  }
    return (
                <div className="">
                    <Carousel>
                        {inmuble.images.map((item, index) => (
                            <img
                                className="img-fluid bordere-img"
                                src={item.image}
                                alt={`Imagen ${index + 1}`}
                                key={index}

                                onClick={handleLogoClick}
                            />
                        ))}
                    </Carousel>
                </div>
          
    )
}
