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
			<S.Container background="#cf3884">
				<S.Together>
					<div className="text-handler">
						<div className="title">
							<h2>
								RESPEITAMOS AS DIFERENÇAS E APOIAMOS AS EXPRESSÕES INDIVIDUAIS
								<S.Divisor maxWidth="60px" color="white" />
							</h2>
						</div>
						<p>
							A System Interacts é composta por pessoas. Pessoas de todas as
							idades, de todas as crenças, de todas as vivências, de todas as
							cores.
						</p>
						<p>
							Valorizamos cada forma de viver. Pois é por meio da diversidade
							que ficaremos mais fortes.
						</p>
						<div className="image"></div>
					</div>
					<div className="image-handler"></div>
				</S.Together>
			</S.Container>
			<S.Container background="url('')">
				<S.Life>
					<div className="image-handler"></div>
					<div className="text-handler">
						<div className="title">
							<h2>
								A VIDA PODE SER PLENA
								<S.Divisor maxWidth="60px" color="black" />
							</h2>
						</div>
						<p>
							Para Aristóteles, a função do trabalho é garantir a plenitude do
							ser humano. Aqui na System, nós acreditamos que a qualidade de
							vida vem em primeiro lugar.
						</p>
						<p>
							O bem-estar é primordial. E nossa cultura preza pela saúde física
							e mental de todos os profissionais.
						</p>
					</div>
				</S.Life>
			</S.Container>
			<S.Container background="#F8C304">
				<S.Specialist>
					<div className="text-handler">
						<div className="title">
							<h2>SEJA UM ESPECIALISTA EM INTERAÇÕES DATA-DRIVEN</h2>
							<S.Divisor maxWidth="60px" color="#cf3884" />
						</div>
						<p>
							Se você também deseja ser protagonista na construção do futuro da
							experiência do cliente, faça parte do nosso time!
						</p>
						<Link href="/contato">
							<a>Trabalhe conosco</a>
						</Link>
					</div>
					<div className="image-handler"></div>
				</S.Specialist>
			</S.Container>
			<S.FooterContainer background="#5c5c5c">
				<S.FooterContent>
					<div className="main-content">
						<div className="information">
							<div className="location">
								<div className="title">
									<h4>ONDE ESTAMOS</h4>
									<S.Divisor maxWidth="60px" color="white" />
								</div>
								<p>Galpões 1, 2 e 19, Jardim Santa Fé</p>
								<p>Osasco - São Paulo</p>
								<p>CEP 06278-010</p>
							</div>
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
