import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    * {
     box-sizing: border-box;
    }


    body {
        display: flex;
        justify-content: center;
        background-color: black;
        font-family: "Work Sans", sans-serif;
    }
`;
