import styled from "styled-components";

export const ContainerBody = styled.body`
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 10px;
    background-color: white;

    @media(max-width: 700px){
        min-height: auto;
    }
`

export const ContainerCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    padding: 10px 0;
    width: 100%;
`
