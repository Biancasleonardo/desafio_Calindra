import styled from "styled-components";

export const ContainerBody = styled.body`
    width: 100%;
    border: 1px red solid;
`

export const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    justify-items: center;
    padding: 10px;
    width: 100%;
`