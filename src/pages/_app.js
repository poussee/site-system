import '../styles/globals.css';

import Head from 'next/head';
import Header from '../components/Header';
import Home from '.';

// import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head></Head>
			<Header />
			<Home />
			{/* <GlobalStyles /> */}
			{/* <Cookies />
			<WhatsAppButton /> */}
			{/* <Component {...pageProps} /> */}
			{/* <Footer /> */}
		</>
	);
}

export default MyApp;
