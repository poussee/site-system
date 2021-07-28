import '../styles/globals.css';

import Head from 'next/head';
import Header from '../components/Header';
import Home from '.';
import Footer from '../components/Footer';

// import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head></Head>
			<Header />
			<Home />
			<Footer />
			{/* <GlobalStyles /> */}
			{/* <Cookies />
			<WhatsAppButton /> */}
			{/* <Component {...pageProps} /> */}
			{/* <Footer /> */}
		</>
	);
}

export default MyApp;
