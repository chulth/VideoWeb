import React from 'react';
import '../assets/styles/components/Carrusel.scss'
const Carrusel = ({ children }) => ( 
    <section className="carrusel">
        <div className="carrusel_container">
            {children}
            </div> 
    </section>
);

export default Carrusel;