import '../styles/globals.css';
import '../../public/assets/fontawesome-free-5.15.2-web/css/all.min.css';

import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cookies from '../components/Cookies';

// import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head></Head>
			<Cookies />
			<Header />
			{/* <WhatsAppButton /> */}
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
