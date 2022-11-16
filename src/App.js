import React from 'react';
import './App.css';
import Button from "./Components/Button";
import Product from "./Components/Product";
import Tile from "./Components/Tile";




function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button nameButton="To the collection" disabled={false}/>
                <Button nameButton="Shop all bags" disabled={false}/>
                <Button nameButton="Pre-orders" disabled={true}/>
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
            <footer>
                <Tile>
                    <h2>The brand</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, inventore suscipit. Aliquid asperiores perspiciatis tenetur.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ducimus itaque nemo nisi, nulla quasi?</p>
                </Tile>
                <Tile>
                    <img src={require("./assets/brand.png").default} alt="brand logo"/>
                </Tile>
                <Tile>
                    <img src={require("./assets/our_story.png").default} alt="the two designers huging"/>
                </Tile>
                <Tile>
                    <h2>Our story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur distinctio eos, eveniet impedit ipsam minima, nihil nisi recusandae tenetur unde, voluptates voluptatibus voluptatum. A animi cumque dolorem est facilis incidunt maxime, neque placeat, quasi, reprehenderit similique totam veritatis voluptates!</p>
                </Tile>


            </footer>
        </>

    );
}

export default App;



//todo opzoeken hoe je een src element kan doorgeven
