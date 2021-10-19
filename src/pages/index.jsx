import Head from 'next/head';
import Link from 'next/link';
import LinkButton from '../components/LinkButton';
import Image from 'next/dist/client/image';

import CarouselSegments from '../components/CarouselSegments';
import CarouselSolutions from '../components/CarouselSolutions';
import Form from '../components/Form';

import formImage from '../../public/assets/Imagem_formulario-min.png';
import relationsImage from '../../public/assets/Imagem_Especialistas-em-relacoes-humanas.png';

import * as S from '../styles/home';

export default function Home() {
	return (
		<>
			<Head>
				<title>System | Home</title>
			</Head>
			<S.MainContainer>
				<S.BannerContainer>
					<S.ColumnContent>
						<h2 className="whiteText">
							Descubra novas possibilidades
							<br /> na interação com clientes
						</h2>
						<p className="whiteText text-400">
							Desenvolvemos relacionamentos sólidos aliando personalização,
							tecnologia e inteligência de dados.
						</p>
						<LinkButton className={'yellowButton'} link={'/contato'}>
							Fale com um especialista
						</LinkButton>
					</S.ColumnContent>
				</S.BannerContainer>
				<S.Container>
					<S.ColumnContent>
						<div className="intelligent-solutions">
							<div className="intelligent-solutions-wrapper">
								<h2>SOLUÇÕES INTELIGENTES</h2>
								<div></div>
							</div>
							<p className="text-550 solutions-text">
								Mais do que recursos tecnológicos, oferecemos serviços
								inovadores que elevam os resultados a níveis inéditos.
							</p>
							<div>
								<CarouselSolutions />
							</div>
						</div>
					</S.ColumnContent>
				</S.Container>
				<S.RelationsContainer>
					<div className="relations-content">
						<h2 className="whiteText">ESPECIALISTAS EM RELAÇÕES HUMANAS</h2>
						<div className="relations-wrapper">
							<div>
								<div>
									<h4 className="whiteText">
										Mais de 20 anos inovando na forma
										<br /> de se comunicar com pessoas.
									</h4>
								</div>
								<p className="whiteText">
									Respeito ao cliente aliado às amplas possibilidades da
									tecnologia: esse é o jeito System de redefinir os
									relacionamentos entre marcas e consumidores.
								</p>
								<p className="whiteText">
									Somos pioneiros no uso de análise de dados e automação no
									atendimento. Com personalização e foco em resultados, criamos
									soluções para atender às necessidades de cada empresa.
								</p>

								<LinkButton className={'yellowButton'} link={'#'}>
									Conheça nossa história
								</LinkButton>
							</div>
							<div className="relations-img-holder">
								<Image
									src={relationsImage}
									alt="Especialistas em relações humanas."
								/>
							</div>
						</div>
					</div>
				</S.RelationsContainer>
				<S.Container>
					<CarouselSegments />
				</S.Container>
				<S.Container>
					<S.formContent>
						<div className="form-image">
							{/* <Image
								src={formImage}
								alt="Rapaz em contato telefonico."
								quality={100}
							/> */}
							<img
								src="/assets/Imagem_formulario-min.png"
								alt="Rapaz em contato telefonico."
								style={{ width: '100%', height: '100%', objectFit: 'cover' }}
							/>
						</div>
						<div className="form-content">
							<Form
								title="ENTRE EM CONTATO"
								subtitle="Converse com os nossos especialistas e descubra como podemos
								reinventar a sua comunicação com o consumidor."
							/>
						</div>
					</S.formContent>
				</S.Container>
			</S.MainContainer>
		</>
	);
}
