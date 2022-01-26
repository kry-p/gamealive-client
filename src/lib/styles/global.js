import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import theme from 'styled-theming';

export const mainTextColor = theme('theme', {
  light: '#000',
  dark: '#fff',
});

export const cardColor = theme('theme', {
  light: '#fff',
  dark: '#222222',
});

export const searchFormColor = theme('theme', {
  light: '#f8f9fa',
  dark: '#2c2c2c',
});

export const GlobalStyle = createGlobalStyle`
    ${reset}
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    @font-face {
        font-family: 'Montserrat Alternates';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserratalternates/v12/mFTiWacfw6zH4dthXcyms1lPpC8I_b0juU0xNIPFB7xG-GNxkg.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    @font-face {
        font-family: 'TmoneyRoundWindRegular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindRegular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    a {
        text-decoration: none;
        color: gray;
    }

    html, 
    body {
        width: 100%;
        height: 100%;
    }

    body {
        margin: 0;
        font-family: TmoneyRoundWindRegular, -apple-system, BlinkMacSystemFont,
            'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
            'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;
