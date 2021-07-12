import styled from "styled-components";

export const ContainerBody = styled.body`
    width: 100%;
    border: 1px red solid;
    box-sizing: border-box;
`

export const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    justify-items: center;
    padding: 10px;
    width: 100%;
`

export const ContainerText = styled.div`
    border: 1px red solid;
    width: 100%;
`