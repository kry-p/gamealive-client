import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import MainPage from './pages/MainPage';
import SearchDatePage from './pages/SearchDatePage';
import SearchKeywordPage from './pages/SearchKeywordPage';
import MenuPage from './pages/MenuPage';

import { useSelector } from 'react-redux';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { koKR } from '@mui/material/locale';

import styled, {
  ThemeProvider as StyledThemeProvider,
} from 'styled-components';
import theme from 'styled-theming';

export const backgroundColor = theme('theme', {
  light: '#fff',
  dark: '#000',
});

const lightMaterialTheme = createTheme(
  {
    typography: {
      fontFamily: 'TmoneyRoundWindRegular',
      fontSize: 11,
    },
    overrides: {
      MuiTableCell: {
        root: {
          //This can be referred from Material UI API documentation.
          padding: '6px 6px',
        },
      },
    },
  },
  koKR,
);

const darkMaterialTheme = createTheme(
  {
    palette: {
      mode: 'dark',
    },
    typography: {
      fontFamily: 'TmoneyRoundWindRegular',
      fontSize: 11,
    },
    overrides: {
      MuiTableCell: {
        root: {
          //This can be referred from Material UI API documentation.
          padding: '6px 6px',
        },
      },
    },
  },
  koKR,
);

const BodyStyle = styled.body`
  background-color: ${backgroundColor};
  height: 100%;
`;

const App = () => {
  const option = useSelector((state) => state.option);
  const [currentMaterialTheme, setCurrentMaterialTheme] =
    useState(lightMaterialTheme);

  useEffect(() => {
    if (option.darkmode) setCurrentMaterialTheme(darkMaterialTheme);
    else setCurrentMaterialTheme(lightMaterialTheme);
  }, [option]);
  return (
    <BodyStyle>
      <StyledThemeProvider theme={{ theme: 'dark' }}>
        <ThemeProvider theme={currentMaterialTheme}>
          <BrowserRouter>
            {/* <Route component={MainPage} path="/" exact /> */}
            <Route component={SearchDatePage} path="/search/date" exact />
            <Route component={SearchKeywordPage} path="/search/keyword" exact />
            <Route component={SearchKeywordPage} path="/" exact />
            <Route component={MenuPage} path="/menu" exact />
          </BrowserRouter>
        </ThemeProvider>
      </StyledThemeProvider>
    </BodyStyle>
  );
};

export default App;
