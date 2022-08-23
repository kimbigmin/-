import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import hp from '../core/Hp';
import CustomAlert from '../components/Material/CustomAlert';
import CustomLoading from '../components/Material/CustomLoading';
import { Provider } from 'react-redux';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
import { wrapper } from '../store/store';

Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            {/* <Header /> */}

            {/* <CustomAlert />
                <CustomLoading /> */}
            <Component {...pageProps} />
        </>
    );
}

export default wrapper.withRedux(MyApp);
