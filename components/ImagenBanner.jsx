"use client"
import React from 'react';
import Carousel from "nuka-carousel";

export default function ImagenBanner({ inmuble }) {
  //  console.log(inmuble);

    return (
                <div className="img-container text-center">
                    <Carousel>
                        {inmuble.images.map((item, index) => (
                            <img
                                className="img-fluid"
                                src={item.image}
                                alt={`Imagen ${index + 1}`}
                                key={index}
                            />
                        ))}
                    </Carousel>
                </div>
          
    )
}
