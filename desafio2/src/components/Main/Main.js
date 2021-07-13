import React from 'react';
import Image1 from '../../assets/Bitmap.svg'
import Image2 from '../../assets/measuring-large.svg'
import { ContainerDescription, ContainerImage, ContainerMain, ContainerMeasuring, ContainerTapes, MainContainer } from './style';

const Main = () => {
    return (
        <ContainerMain>
            <ContainerMeasuring>
                <div>
                    <h2>Measuring everything</h2>
                </div>
                <div>
                    <img src={Image1} />
                </div>
            </ContainerMeasuring>
            <ContainerTapes>
                <ContainerDescription>
                    <h3>We are Leader in Measure Tapes</h3>
                    <p>There are 5x the circumference of planet earth in metric tapes.</p>
                </ContainerDescription>
                <ContainerImage>
                    <img src={Image2} />
                </ContainerImage>
            </ContainerTapes>
        </ContainerMain>
    );
};

export default Main;