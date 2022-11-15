import React from 'react';
import './App.css';
import Button from "./Components/Button";
import Product from "./Components/Product";



function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button nameButton="To the collection"/>
                <Button nameButton="Shop all bags"/>
                <Button nameButton="Pre-orders"/>
            </nav>
            <main>
                <Product
                    productTag="Best seller"
                    nameProduct="The handy bag"
                    price="400"/>
            </main>
        </>

    );
}

export default App;



//todo opzoeken hoe je een src element kan doorgeven
