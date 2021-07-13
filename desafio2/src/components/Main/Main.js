import React from 'react';
import Image1 from '../../assets/Bitmap.svg'
import { MainContainer } from './style';

const Main = () => {
    return (
        <MainContainer>
            <div>
                <h2>Measuring everything</h2>
            </div>
            <div>
                <img src={Image1} />
            </div>

        </MainContainer>
    );
};

export default Main;