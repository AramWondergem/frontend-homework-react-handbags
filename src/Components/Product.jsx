import React from 'react';
// import handbag1 from '../assets/bag_1.png'

function Product({productTag, srcPath, nameProduct, price}) {
    return (
        <article>
            <span>{productTag}</span>
            <img src={require(`../assets/${srcPath}`).default} alt={nameProduct}/>
            <p>{nameProduct}</p>
            <h4>€{price},-</h4>
        </article>
    );
}

export default Product;

