import '../styles/globals.css';
import '../../public/assets/fontawesome-free-5.15.2-web/css/all.min.css';

import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cookies from '../components/Cookies';

import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
	const Router = useRouter();

	return (
		<>
			<Head></Head>
			<Cookies />
			<Header />
			<Component {...pageProps} />
			{Router.pathname != '/trabalhe-conosco' && <Footer />}
		</>
	);
}

export default MyApp;
