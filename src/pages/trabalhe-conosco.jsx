import Image from 'next/image';

import Banner from '../components/Banners/Banner';
import GoogleMaps from '../components/Map';

import bannerBackground from '../../public/assets/banners/banner-trabalhe-conosco.png';
import teamSystem from '../../public/assets/trabalhe-conosco/time.png';
import systemVideo from '../../public/assets/trabalhe-conosco/Video.png';

import * as S from '../styles/trabalhe-conosco';

export default function TrabalheConosco() {
	return (
		<>
			<Banner
				className="banner"
				background={bannerBackground}
				title="Venha fazer parte da empresa pioneira em interações "
				subtitle="Se o seu sonho é trabalhar em uma empresa morderna e focada em inovação, faça parte do nosso time!"
				workWithUs={true}
			/>
			<S.Container background="#fff">
				<S.TeamSystemContent>
					<div>
						<h2>
							VALORIZAMOS TODOSOS PROFISSIONAIS, POIS SABEMOS QUE OS RESULTADOS
							SURGEM QUANDO INVESTIMOS EM PESSOAS
						</h2>
						<div className="divisor"></div>
					</div>
					<div className="Wrapper">
						<div className="text-handler">
							<p>
								Acreditamos que ao impulsionar talentos, criamos as condições
								perfeitas para que eles cresçam e se desenvolvam em todos os
								aspectos de suas vidas.
							</p>
							<p>
								Sendo assim, atuamos com humanização, propósito e diversidade.
								São os nossos esforços para construir ambientes inspiradores.
							</p>
							<div className="text-image">
								<Image src={teamSystem} quality={100} />
							</div>
						</div>
						<a href="#" className="image-handler">
							<Image src={systemVideo} quality={100} />
						</a>
					</div>
				</S.TeamSystemContent>
			</S.Container>
		</>
	);
}
