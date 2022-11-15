import React from 'react';
import handbag1 from '../assets/bag_1.png'

function Product({productTag, nameProduct, price}) {
    return (
        <article>
            <span>{productTag}</span>
            <img src={handbag1} alt={nameProduct}/>
            <p>{nameProduct}</p>
            <h4>€{price}.-</h4>
        </article>
    );
}

export default Product;

