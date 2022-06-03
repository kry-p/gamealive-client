import React, { useEffect, useState, lazy } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { koKR } from '@mui/material/locale';
import { CssBaseline } from '@mui/material';

import withSplitting from './modules/withSplitting';

const SearchDatePage = withSplitting(() => import('./pages/SearchDatePage'));
const SearchKeywordPage = withSplitting(() =>
  import('./pages/SearchKeywordPage'),
);
const LicensesPage = withSplitting(() => import('./pages/LicensesPage'));

const lightMaterialTheme = createTheme(
  {
    palette: {
      mode: 'light',
      background: {
        default: '#fff',
      },
    },
    typography: {
      fontFamily: 'SUIT-Regular',
      fontSize: 12,
    },
    overrides: {
      MuiTableCell: {
        root: {
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
      fontFamily: 'SUIT-Regular',
      fontSize: 12,
    },
    overrides: {
      MuiTableCell: {
        root: {
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
          <Route component={SearchDatePage} path="/search/date" exact />
          <Route component={SearchKeywordPage} path="/search/keyword" exact />
          <Route component={SearchKeywordPage} path="/" exact />
          <Route component={LicensesPage} path="/licenses" exact />
        </BrowserRouter>
      </ThemeProvider>
    </StyledThemeProvider>
  );
};

export default App;
