import '../styles/globals.css';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Store } from 'redux';
import logger from 'redux-logger';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';
import data from '../store/Data';
import view from '../store/View';
import hp from '../core/Hp';
import CustomAlert from '../components/Material/CustomAlert';
import CustomLoading from '../components/Material/CustomLoading';
import { Provider } from 'react-redux';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../src/aws-exports';

Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }: AppProps) {
    const rootReducer = combineReducers({
        data,
        view,
    });

    const store: Store = configureStore({
        reducer: rootReducer,
        devTools: process.env.NODE_ENV === 'development', // 이 외에 정보 더 생기면 gitignore에 추가해서 푸쉬 안하도록 설정해야됨
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: false,
            }).concat(logger),
    });

    hp.init(store);

    return (
        <>
            <Provider store={store}>
                <Header />
                <div>
                    <CustomAlert />
                    <CustomLoading />
                    <Component {...pageProps} />
                </div>
            </Provider>
        </>
    );
}

export default MyApp;
