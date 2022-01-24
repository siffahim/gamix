import React from 'react';
import Banner from '../Banner/Banner';
import Collection from '../Collection/Collection';
import JoinGame from '../JoinGame/JoinGame';
import Products from '../Products/Products';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Banner />
            <Collection />
            <Products />
            <JoinGame />
            <Subscribe />
        </div>
    );
};

export default Home;