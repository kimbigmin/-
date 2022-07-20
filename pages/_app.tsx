import "../styles/globals.css";
import { combineReducers } from "@reduxjs/toolkit";
import { createStore, applyMiddleware, Store } from 'redux';
import { HYDRATE } from "next-redux-wrapper";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import data from '../store/Data';
import view from '../store/View';
import queryString from "query-string";
import hp from '../core/Hp';
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
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;