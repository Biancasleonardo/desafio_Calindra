import React from 'react';
import ProductsCard from '../../components/ProductsCard/ProductsCard';
import Search from '../../components/Search/Search';
import Suggestions from '../../components/Suggestions/Suggestions';
import { ContainerBody, ContainerCards } from './style';

const HomePage = () => {
    return (
        <ContainerBody>
            <Search />
            <Suggestions />
            <ContainerCards>
                <ProductsCard />
                <ProductsCard />
                <ProductsCard />
                <ProductsCard />
                <ProductsCard />
                <ProductsCard />
            </ContainerCards>
        </ContainerBody>
    );
};

export default HomePage;