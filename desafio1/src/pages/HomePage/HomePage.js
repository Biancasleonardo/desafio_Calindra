import React from 'react';
import ProductsCard from '../../components/ProductsCard/ProductsCard';
import Search from '../../components/Search/Search';
import Suggestions from '../../components/Suggestions/Suggestions';

const HomePage = () => {
    return (
        <div>
            <Search />
            <Suggestions />
            <ProductsCard />
        </div>
    );
};

export default HomePage;