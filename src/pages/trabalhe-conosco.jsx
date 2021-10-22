import Image from 'next/image';
import Link from 'next/dist/client/link';

import Banner from '../components/Banners/Banner';
import GoogleMaps from '../components/Map';

import bannerBackground from '../../public/assets/banners/banner-trabalhe-conosco.png';
import teamSystem from '../../public/assets/trabalhe-conosco/time.png';
import systemVideo from '../../public/assets/trabalhe-conosco/Video.png';
import logoRodape from '../../public/assets/Logo-Rodape.png';

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
				button="Trabalhe conosco"
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
			<S.FooterContainer background="#5c5c5c">
				<S.FooterContent>
					<div className="main-content">
						<div className="information">
							<div className="socials-container">
								<h4>Conecte-se</h4>
								<div className="footer-socials-wrapper">
									<a
										target="_blank"
										rel="noreferrer"
										href="https://www.facebook.com/SystemInteractBR"
									>
										<i className="fab fa-facebook-f"></i>
									</a>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://www.instagram.com/oficialsystem/"
									>
										<i className="fab fa-instagram"></i>
									</a>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://www.linkedin.com/company/system-interact/"
									>
										<i className="fab fa-linkedin-in"></i>
									</a>
								</div>
							</div>
							<div className="img-container">
								<Image
									src={logoRodape}
									alt="Logo rodapé"
									layout="responsive"
									quality={100}
								/>
							</div>
						</div>
						<div className="map-container">
							<GoogleMaps />
						</div>
					</div>
					<div className="company-rights">
						<p>
							© System Interact 2021. Todos os direitos reservados. Desenvolvido
							por <a href="https://www.poussee.com.br">Agência Poussée</a>.
						</p>
						<div>
							<Link href="/politica-de-privacidade">
								<a>Política de privacidade</a>
							</Link>
						</div>
					</div>
				</S.FooterContent>
			</S.FooterContainer>
		</>
	);
}
