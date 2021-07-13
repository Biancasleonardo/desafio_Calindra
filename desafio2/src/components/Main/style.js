import styled from "styled-components";

export const ContainerMain = styled.main`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto Condensed';

`

export const ContainerMeasuring = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1024px;
    padding: 0 60px;

    background-color: #E9E9E9;
    color: #716565;

    img{
        mix-blend-mode: multiply;
        width: 682px;
        height: 335px;
    }

    div {
        display: flex;
        text-align: end;

        h2{
        font-style: normal;
        font-weight: bold;
        font-size: 82.2px;
    }
    }

   
`

export const ContainerTapes = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 1024px;

    color: #FFFFFF;
    background-color: #506FA9;

    img{
        width: 1038px;
        height: 689px;
        mix-blend-mode: multiply;
    }

    h3{
        font-style: normal;
        font-weight: bold;
        font-size: 69.2px;
    }

    p{
        font-style: normal;
        font-weight: 300;
        font-size: 48.2px;
        margin: 0;
    }
`

export const ContainerImage = styled.div`
    width: 50%;
`

export const ContainerDescription = styled.div`
    position: absolute;
    width: 40%;
    bottom: 100px;
    left: 100px;
`