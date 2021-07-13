import React from 'react';
import Logo from '../../assets/logo.svg'
import { HeaderContainer, LogoSection, SectionMenu } from './style';

const Header = () => {
    return (
        <HeaderContainer>
            <LogoSection>
                <img src={Logo}/>
                <div>
                    <h3>Zutterman</h3>
                    <h4>Measure Tapes</h4>
                </div>
            </LogoSection>
            <SectionMenu>
                <a href='#'>ABOUT US</a>
                <a href='#'>MODELS</a>
                <a href='#'>GUARANTEE</a>
            </SectionMenu>
        </HeaderContainer>
    );
};

export default Header;