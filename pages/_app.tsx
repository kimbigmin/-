import "../styles/globals.css";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Store } from 'redux';
import logger from 'redux-logger'
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import data from '../store/Data';
import view from '../store/View';
import hp from '../core/Hp';
import AlertManager from '../core/Alert';
import LoadingManager from '../core/Loading';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  const rootReducer = combineReducers({
    data,
    view 
  })

  const store: Store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger)
  })

  hp.init(store);
  
  return (
    <>
      <Provider store={store}>
        <Header />
        <div>
          <AlertManager/>
          <LoadingManager/>
          <Component {...pageProps} />
        </div>
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;
