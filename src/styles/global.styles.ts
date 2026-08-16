import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
    /* Box sizing rules */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        transition: all 50ms ease-in;
        transition: color 100ms ease-in;
        transition: background-color 100ms ease-in;
    }

    /* Remove default margin */
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
    margin: 0;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role='list'],
    ol[role='list'] {
    list-style: none;
    }

    /* Set core root defaults */
    html:focus-within {
    scroll-behavior: smooth;
    }

    /* Set core body defaults */
    body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
    text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img,
    picture {
    max-width: 100%;
    display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
    font: inherit;
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
    }

    :root {
        font-family: ${(props) => props.theme.font.family};

        @media screen and (max-width: 500px){
            font-size: 2.7vw;
            
        }
    }

    html {
        background-color: ${(props) => props.theme.colors.bg600};
        background-image: radial-gradient(
            ellipse at 50% 0%,
            ${(props) => props.theme.colors.bg400} 0%,
            ${(props) => props.theme.colors.bg600} 70%
        );
        background-attachment: fixed;
    }

    body {
        max-width: 100vw;
        min-height: 100vh;
        overflow: hidden;
    }

    #root {
        width: 100vw;
        height: 100vh;
    }

    .invalid {
        --invalid: red;
        animation: shake 100ms alternate
    }

    @keyframes shake {

    10%,
    90% {
      transform: translate3d(-2px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(3px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-5px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(6px, 0, 0);
    }
}
`;

export { GlobalStyle };
