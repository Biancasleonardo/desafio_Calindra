import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;

    background-color: #FFFFFF;
    font-family: 'Roboto Condensed';

    @media(max-width: 720px){
        flex-direction: column;
        height: auto;
    }
`

export const LogoSection = styled.section`
    display: flex;
    align-items: center;

    @media(max-width: 720px){
        flex-direction: column;
    }

    div {
        color: #846219;
        margin-left: 28px;

        h3{
            margin: 0;
            font-size: 41.2px;
            font-weight: 700;
        }

        h4{
            margin: 0;
            font-size: 17.7px;
            letter-spacing: 5.4px;
            font-weight: 300;
        }
    }
`

export const SectionMenu = styled.section`
    @media(max-width: 720px){
        display: flex;
        flex-direction: column;
        height: auto;
    }
    a{
        text-decoration: none;
        color: #846219;
        font-size: 18.98px;
        font-weight: 300;
        letter-spacing: 5.4px;
        padding: 0 0 0 100px;
    }
`