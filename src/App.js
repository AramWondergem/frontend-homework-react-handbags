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
                    srcPath="bag_1.png"
                    nameProduct="The handy bag"
                    price="400"/>
                <Product
                    productTag="Best seller"
                    srcPath="bag_2.png"
                    nameProduct="The stylish bag"
                    price="250"/>
                <Product
                    productTag="New collection"
                    srcPath="bag_3.png"
                    nameProduct="The simple bag"
                    price="300"/>
                <Product
                    productTag="New collection"
                    srcPath="bag_4.png"
                    nameProduct="The trendy bag"
                    price="150"/>
            </main>
        </>

    );
}

export default App;



//todo opzoeken hoe je een src element kan doorgeven
