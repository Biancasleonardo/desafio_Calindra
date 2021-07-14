import React from 'react';
import Logo from '../../assets/logo.svg'
import MenuIcon from '../../assets/three-dots-vertical.svg'
import { HeaderContainer, LogoSection, SectionMenu, ToogleSection } from './style';

const Header = () => {
    return (
        <HeaderContainer>
            <ToogleSection>
                <button><img src={MenuIcon}/></button>
            </ToogleSection>
            <LogoSection>
                <img src={Logo} />
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