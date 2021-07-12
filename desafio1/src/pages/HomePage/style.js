import styled from "styled-components";

export const ContainerBody = styled.body`
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 10px;
    background-color: white;
`

export const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    justify-items: center;
    padding: 10px 0;
    width: 100%;
`
