import React from 'react';
import '../assets/styles/components/Categories.scss'
const Categories = ({ children }) => ( 
    <section className="categories">
        <h3 className="categories_title"> My List </h3>
        {children}
    </section>
);

export default Categories;