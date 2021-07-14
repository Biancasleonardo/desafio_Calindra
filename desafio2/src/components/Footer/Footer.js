import React from 'react';
import { ContactSection, ContainerFooter, FollowSection } from './style';
import Facebook from '../../assets/facebook.svg'
import Twitter from '../../assets/twitter.svg'
import Youtube from '../../assets/youtube.svg'

const Footer = () => {
    return (
        <ContainerFooter>
            <FollowSection>
                <h5>Follow Us</h5>
                <div>
                    <img src={Facebook} />
                    <img src={Twitter} />
                    <img src={Youtube} />
                </div>
            </FollowSection>
            <ContactSection>
                <h5>Contact</h5>
                <p>2490 Leisure Lane San Luis Obispo California</p>
            </ContactSection>
        </ContainerFooter>
    );
};

export default Footer;