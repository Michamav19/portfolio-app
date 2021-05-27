import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    body {
        align-items: center;
        background: ${({ theme }) => theme.body} !important;
        color: ${({ theme }) => theme.text} !important;
        transition: all 0.25s linear;
    }
    a,
    .header-title {
        color: ${({ theme }) => theme.text};
    }

    .header{
        border-bottom: 2px solid ${({ theme }) => theme.text};
    }

    .vertical-divider-first,
    .horizontial-divider,
    .vertical-divider-second{
        background-image: 
        linear-gradient(${({ theme }) => theme.text}, ${({ theme }) => theme.text}), 
        linear-gradient(${({ theme }) => theme.text}, ${({ theme }) => theme.text}), 
        linear-gradient(${({ theme }) => theme.text}, ${({ theme }) => theme.text}), 
        linear-gradient(${({ theme }) => theme.text}, ${({ theme }) => theme.text}), 
        
        linear-gradient(#3fb0ac, #3fb0ac), 
        linear-gradient(#3fb0ac, #3fb0ac), 
        linear-gradient(#3fb0ac, #3fb0ac), 
        linear-gradient(#3fb0ac, #3fb0ac);
    }

    .footer-container{
        color: ${({ theme }) => theme.body};
    }

    .slick-prev:before, 
    .slick-next:before,
    .slick-dots li.slick-active button:before,
    .slick-dots li button:before{
        color: ${({ theme }) => theme.body} !important;
    }

    .slick-prev:before, 
    .slick-next:before{
        border-right: 0.15em solid ${({ theme }) => theme.body} !important;
        border-top: 0.15em solid ${({ theme }) => theme.body} !important;
    }

    .navbar-container .menu-bars svg{
        color: ${({ theme }) => theme.text} !important;
    }


    .navbar-container .nav-menu {
        background-color: ${({ theme }) => theme.body};
    }

    .navbar-container .navbar-button{
        border-bottom: 1px solid ${({ theme }) => theme.border};
    }

    .navbar-container .navbar-button:first-child{
        border-top: 1px solid ${({ theme }) => theme.border};
    }

    .social-media-container,
    .social-media-container a{
        border-color: ${({ theme }) => theme.text};
    }

    // Media Queries
    @media only screen and (max-width: 1025px) {

        .resume,
        .resume-right-info{
            background-color: ${({ theme }) => theme.secondaryBody} !important;
        }

        .slick-dots li.slick-active button:before,
        .slick-dots li button:before{
            color: ${({ theme }) => theme.text} !important;
        }

    }
`