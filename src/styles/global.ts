import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{

    --color-white: #fff;
    --color-green-primary: #277475;
    --color-green-secondary: #293F47;

    --color-green-light: #1DDED8;

    --color-dark-medium: #313640;
    --color-dark: #2A2E37;

    --text-title: #FFFFFF;
}

//font-size padrao = 16px

html{
    @media (max-width: 1080px) {
        font-size: 93.75%; //15px
    }
    @media (max-width: 720px) {
        font-size: 87.5%; //16px
    }
    
}

 // 1rem = 16px

*{
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
}

body{
    background: var(--color-dark-medium);
    -webkit-font-smoothing: antialiased;
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}
`
