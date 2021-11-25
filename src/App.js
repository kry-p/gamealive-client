import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SearchDatePage from './pages/SearchDatePage';
import SearchKeywordPage from './pages/SearchKeywordPage';
import MenuPage from './pages/MenuPage';

import { useSelector } from 'react-redux';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { koKR } from '@mui/material/locale';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import LicensesPage from './pages/LicensesPage';
import { CssBaseline } from '@mui/material';

const lightMaterialTheme = createTheme(
  {
    palette: {
      mode: 'light',
      background: {
        default: '#fff',
      },
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

const darkMaterialTheme = createTheme(
  {
    palette: {
      mode: 'dark',
      background: {
        default: '#151515',
      },
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

const App = () => {
  const option = useSelector((state) => state.option);
  const [currentMaterialTheme, setCurrentMaterialTheme] =
    useState(lightMaterialTheme);
  const [currentGlobalTheme, setCurrentGlobalTheme] = useState('light');

  useEffect(() => {
    if (option.darkmode) {
      setCurrentMaterialTheme(darkMaterialTheme);
      setCurrentGlobalTheme('dark');
    } else {
      setCurrentMaterialTheme(lightMaterialTheme);
      setCurrentGlobalTheme('light');
    }
  }, [option]);
  return (
    <StyledThemeProvider theme={{ theme: currentGlobalTheme }}>
      <ThemeProvider theme={currentMaterialTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Route component={MainPage} path="/main" exact />
          <Route component={SearchDatePage} path="/search/date" exact />
          <Route component={SearchKeywordPage} path="/search/keyword" exact />
          <Route component={SearchKeywordPage} path="/" exact />
          <Route component={MenuPage} path="/menu" exact />
          <Route component={LicensesPage} path="/licenses" exact />
        </BrowserRouter>
      </ThemeProvider>
    </StyledThemeProvider>
  );
};

export default App;
