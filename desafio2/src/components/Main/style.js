import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
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
        font-family: 'Roboto Condensed';
        font-style: normal;
        font-weight: bold;
        font-size: 82.2px;
    }
    }

   
`