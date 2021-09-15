import Image from 'next/dist/client/image';

import Banner from '../components/Banners/Banner';
import HistoryCarousel from '../components/CarouselHistory';
import AwardsCarousel from '../components/CarouselAwards';
import LinkButton from '../components/LinkButton';
import Tour from '../components/Tour';

import bannerBackground from '../../public/assets/banners/banner-quem-somos.png';
import intelligentSolutions from '../../public/assets/Solucoes-inteligentes.png';
import joinUs from '../../public/assets/quem-somos/Imagem_junte_se_nos.png';
import ongAmamos from '../../public/assets/quem-somos/ONG_Amamos.png';
import larBussocaba from '../../public/assets/quem-somos/ONG_Lar_Bussocaba.png';
import exercitoDaSalvacao from '../../public/assets/quem-somos/ONG_exercito_salvacao.png';

import * as S from '../styles/quem-somos';

export default function QuemSomos() {
	return (
		<>
			<Banner
				className="banner"
				background={bannerBackground}
				title="Pioneiros em interações data-driven"
				subtitle="Criamos novas formas de potencializar o atendimento para construir relacionamentos sustentáveis."
			/>
			<S.ContainerAboutUs>
				<S.ContentAboutUs>
					<div className="about-us-content">
						<Image src={intelligentSolutions} alt="alterar" />
						<h3>
							Conectando empresas e consumidores com abordagens personalizadas.
						</h3>
						<p>
							Nossa história teve início em 1996, época em que os meios de
							comunicação passavam por uma grande transformação e os avanços
							tecnológicos se tornavam mais frequentes. Desde o início, a
							inovação fez parte de nossa cultura, assim como a valorização de
							pessoas.
						</p>
						<p>
							Motivados pela construção de relações sólidas entre marcas e
							consumidores, desenvolvemos soluções inéditas no mercado
							brasileiro. Em cada uma, buscamos a individualização pela
							automação, com o acompanhamento detalhado de todas as etapas.
						</p>
						<p>
							Hoje, contamos com uma ampla variedade de recursos que contemplam
							desde a qualificação de dados até a ativação omnichannel.
							Cobrança, SAC, vendas e produtos digitais especialmente
							desenvolvidos para atender às necessidades de cada negócio: isso
							tudo é a System.
						</p>
						<h4>Como podemos transformar seus resultados hoje?</h4>
						<div className="pink-trace"></div>
					</div>
					<div className="about-us-carousel-content">
						<h2 className="pink-text">Acompanhe nossa trajetória</h2>
						<p className="white-text">
							Este é só o começo de uma longa jornada de transformação.
						</p>
						<p className="white-text">Vamos evoluir juntos?</p>
						<HistoryCarousel />
					</div>
				</S.ContentAboutUs>
			</S.ContainerAboutUs>
			<S.Container>
				<S.AwardsContent>
					<div className="row-wrapper">
						<div className="text-wrapper">
							<div className="awards-title">
								<h2>NOSSAS CONQUISTAS</h2>
								<div className="awards-divisor"></div>
							</div>
							<p>
								O reconhecimento é consequência de uma atuação centrada no
								consumidor e guiada por dados.
							</p>
						</div>
						<div className="carousel-wrapper">
							<AwardsCarousel />
						</div>
					</div>
				</S.AwardsContent>
			</S.Container>
			<S.ContainerSocial>
				<article className="join-us-container">
					<div className="join-us-content">
						<div className="join-us-limiter">
							<div className="flex-title">
								<h2>JUNTE-SE À NÓS</h2>
								<div className="white-divisor"></div>
							</div>
							<p>
								Sabemos que os colaboradores são parte fundamental do nosso
								negócio. Por isso, acompanhamos, orientamos e desenvolvemos
								talentos durante toda a sua trajetória na empresa, estimulando
								suas realizações profissionais e pessoais.
							</p>
							<p>
								Se você também acredita no valor dos relacionamentos e quer ser
								protagonista na transformação das interações, não deixe de fazer
								parte do nosso banco de talentos. Sua carreira de sucesso começa
								aqui.
							</p>
							<div className="button-holder">
								<LinkButton link={'#'} className={'yellowButton'}>
									Vem ser System
								</LinkButton>
							</div>
						</div>
					</div>
				</article>
				<div className="joinUs-image-container">
					<div className="joinUs-image-content">
						<Image src={joinUs} alt="alterar" />
					</div>
				</div>
				<article className="social-responsibility-container">
					<div className="social-responsibility-content">
						<div className="social-responsibility-limiter">
							<div className="flex-title">
								<h2>RESPONSABILIDADE SOCIAL</h2>
								<div className="pink-divisor"></div>
							</div>
							<p>
								Com pequenas ações, é possível se tornar um agente transformador
								na sociedade. Vamos fazer a diferença?
							</p>
							<p>Conheça as instituições sociais que apoiamos.</p>
						</div>
					</div>
				</article>
			</S.ContainerSocial>
			<S.Container>
				<S.SocialAction>
					<div className="social-card amamos">
						<div className="social-image-holder">
							<Image src={ongAmamos} alt="alterar" />
						</div>
						<h3>ONG Amamos</h3>
						<p>
							Destinamos arrecadações de leite, roupas e brinquedos à ONG
							Amamos, que ampara crianças em situações de risco, vítimas de maus
							tratos ou provenientes de famílias desestruturadas.
						</p>
					</div>
					<div className="social-card bussocaba">
						<div className="social-image-holder">
							<Image src={larBussocaba} alt="alterar" />
						</div>

						<h3>Lar Bussocaba</h3>
						<p>
							Periodicamente, enviamos fraldas, produtos de higiene pessoal e
							roupas ao Lar Bussocaba, que acolhe idosos carentes ou abandonados
							pelos familiares.
						</p>
					</div>
					<div className="social-card salvacao">
						<div className="social-image-holder">
							<Image src={exercitoDaSalvacao} alt="alterar" />
						</div>

						<h3>Exército de Salvação</h3>
						<p>
							Todos os anos, convidamos nossos colaboradores a doarem agasalhos,
							que são destinados a ações beneficentes e distribuições à
							população de rua, a mais afetada pelo inverno.
						</p>
					</div>
				</S.SocialAction>
			</S.Container>
			<S.ContainerVirtualTour>
				<Tour title="JUNTE-SE À NÓS" />
			</S.ContainerVirtualTour>
		</>
	);
}
