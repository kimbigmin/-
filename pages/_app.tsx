import "../styles/globals.css";
import { combineReducers } from "@reduxjs/toolkit";
import { createStore, applyMiddleware, Store } from 'redux';
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import data from '../store/Data';
import view from '../store/View';
import hp from '../core/Hp';
import AlertManager from '../core/AlertManager';
import LoadingManager from '../core/LoadingManager';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  const rootReducer = combineReducers({
    data,
    view 
  })

  const store: Store = createStore(
    rootReducer
  )

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
