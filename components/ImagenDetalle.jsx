"use client"
import React from 'react';
import Carousel from "nuka-carousel";

export default function ImagenDetalle({ inmuebleId }) {
 //   console.log(inmuebleId);

    return (
        <div className='row '>
            <div className='col-12 col-md-8'>
                <div className="img-container shadow  list-group-item-action p-3 text-center">
                    <Carousel>
                        {inmuebleId.images.map((item, index) => (
                            <img
                                className="img-fluid"
                                src={item.image}
                                alt={`Imagen ${index + 1}`}
                                key={index}
                            />
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
