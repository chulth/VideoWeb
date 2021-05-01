import React from 'react';
import Carrusel from '../components/Carrusel';
import CarruselItem from '../components/CarruselItem';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carrusel from '../components/Carrusel'
import Search from '../components/Search'


const App= () => (
    <div ClassName = "App">
        <Header /> 
        <Search/>
        < Categories>
            <Carrusel>
                <CarruselItem/>
                <CarruselItem/>
                <CarruselItem/>
                <CarruselItem/>

            </Carrusel>
        </Categories>    
    </div>
)