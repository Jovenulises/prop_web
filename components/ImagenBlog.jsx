"use client"
import { useRouter } from 'next/navigation'
import React from 'react';
export default function ImagenBlog({ inmuble }) {
  //  console.log(inmuble);
  
  const router = useRouter()

  const handleLogoClick = () => {
    router.push(`/detalle/${inmuble.id}/#galeria`)
    
  }
    return (
                <div className="">
                
                        {inmuble.images.map((item, index) => (
                            <img
                                className="img-fluid"
                                src={item.image}
                                alt={`Imagen ${index + 1}`}
                                key={index}

                                onClick={handleLogoClick}
                            />
                        ))}
                    
                </div>
          
    )
}
