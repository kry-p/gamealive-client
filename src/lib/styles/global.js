import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import theme from 'styled-theming';

export const backgroundColor = theme('theme', {
  light: '#fff',
  dark: '#121212',
});

export const mainTextColor = theme('theme', {
  light: '#000',
  dark: '#fff',
});

export const GlobalStyle = createGlobalStyle`
    ${reset}
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    @font-face {
        font-family: 'TmoneyRoundWindExtraBold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindExtraBold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'TmoneyRoundWindRegular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindRegular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
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
