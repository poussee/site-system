import Banner from '../components/Banners/Banner';

import bannerBackground from '../../public/assets/banners/banner-mais-opcoes.png';

import * as S from '../styles/politica-de-privacidade';

export default function politica() {
	return (
		<>
			<Banner
				className="banner"
				background={bannerBackground}
				title="Politica de privacidade"
				service={true}
			/>
			<S.Container>
				<S.Content></S.Content>
			</S.Container>
		</>
	);
}
