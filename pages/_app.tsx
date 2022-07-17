import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createStore, applyMiddleware, combineReducers, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import withRedux from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import data from '../store/Data';
import view from '../store/View';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Provider } from 'react-redux';
import hp from '../core/Hp';

const rootReducer = combineReducers({
  data,
  view
})

const store: Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  )
  
}

export default withRedux(store)(MyApp);