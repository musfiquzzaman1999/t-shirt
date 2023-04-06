import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData();
    return (
        <div>
            <h1>this is home pages:{tshirts.length}</h1>
        </div>
    );
};

export default Home;