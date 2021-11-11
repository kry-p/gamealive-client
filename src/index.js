import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { koKR } from '@mui/material/locale';

import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer, { rootSaga } from './modules';

const sagaMiddleware = createSagaMiddleware();
const theme = createTheme(
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

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
