import styled from "styled-components";

export const ContainerMain = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;

`

export const ContainerMeasuring = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 0 60px;

    background-color: #E9E9E9;
    color: #716565;

    @media(max-width: 720px){
        flex-direction: column;
        height: 568px;
    }

    img{
        mix-blend-mode: multiply;
        width: 682px;
        height: 335px;

        @media(max-width: 720px){
            width: 285px;
            height: 140px;
    }
    }

    div {
        display: flex;
        text-align: end;

        h2{
        font-style: normal;
        font-weight: bold;
        font-size: 82.2px;

        @media(max-width: 720px){
            font-size: 53.2px;
    }
    }
    }

   
`

export const ContainerTapes = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 820px;

    color: #FFFFFF;
    background-color: #506FA9;

    @media(max-width: 720px){
        height: 568px;
        flex-direction: column;
    }

    img{
        width: 1038px;
        height: 689px;
        mix-blend-mode: multiply;

        @media(max-width: 720px){
            width: 259px;
            height: 172px;
            position: absolute;
            bottom: 0;
            right: 0;
    }
    }

    h3{
        font-style: normal;
        font-weight: bold;
        font-size: 69.2px;

        @media(max-width: 720px){
            font-size: 41.2px;
        }
    }

    p{
        font-style: normal;
        font-weight: 300;
        font-size: 48.2px;
        margin: 0;

        @media(max-width: 720px){
            font-size: 26.2px;
        }
    }
`

export const ContainerImage = styled.div`
    width: 55%;

    @media(max-width: 720px){
            width: 100%;
        }
`

export const ContainerDescription = styled.div`
    position: absolute;
    width: 40%;
    bottom: 100px;
    left: 100px;

    @media(max-width: 720px){
            width: 85%;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            bottom: 0;
            left: 0;
            margin-bottom: 160px;
        }
`