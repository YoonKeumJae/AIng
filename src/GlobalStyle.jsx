import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    
    :root {
        --color-black: #23272E;
        --color-white: #969FAE;
        --color-red: #E85765;
        --color-green: #75A95E;
        --color-yellow: #BE7E4E;
    }

    body{
        color: var(--color-white);
        background-color: var(--color-black);
    }

    margin: 0;
    box-sizing: border-box;
    background-color: var(--color-black);

`;

export default GlobalStyle;
