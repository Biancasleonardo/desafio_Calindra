import styled from "styled-components";

export const ContainerFooter = styled.footer`
    display: flex;
    height: 226px;
    padding: 0 100px;
    align-items: center;

    background-color: #E9E9E9;
    color: #716565;

    @media(max-width: 720px){
        flex-direction: column;
        height: auto;
        text-align: center;
        }

    h5{
        font-style: normal;
        font-weight: bold;
        font-size: 27.2px;
        margin-bottom: 20px;
    }
`

export const FollowSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 30%;

    @media(max-width: 720px){
        width: 100%;
        }

    img {
        width: 38.61px;
        height: 38.61px;
        margin-right: 10px;
    }
`

export const ContactSection = styled.section`
    width: 120px;

    @media(max-width: 720px){
        width: 100%;
        }
`