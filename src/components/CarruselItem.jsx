import React from 'react';
import '../assets/styles/components/CarruselItem.scss'
const CarruselItem = ({ children }) => ( 
    <section className="carrusel_item">
        <div className="carrusel_item_container">
            {children}
            </div> 
    </section>
);

export default CarruselItem;