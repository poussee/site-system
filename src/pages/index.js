import Head from 'next/head';
import Link from 'next/link';
import Button from '../components/Buttons/Yellow-Button';
import CarouselSegments from '../components/CarouselSegments';
import CarouselSolutions from '../components/CarouselSolutions';

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
						<p className="whiteText">
							Desenvolvemos relacionamentos sólidos aliando
							<br /> personalização, tecnologia e inteligência de dados.
						</p>
						<Link href="#">
							<a className="yellowButton">Fale com um especialista</a>
						</Link>
					</S.ColumnContent>
				</S.BannerContainer>
				<S.Container>
					<S.ColumnContent>
						<div className="inteligent-solutions">
							<div className="inteligent-solutions-wrapper">
								<h2>Soluções Inteligentes</h2>
								<div></div>
							</div>
							<p>
								Mais do que recursos tecnológicos, oferecemos serviços
								<br /> inovadores que elevam os resultados a níveis inéditos.
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
								<Link href="#">
									<a className="yellowButton whiteText">
										Conheça nossa história
									</a>
								</Link>
							</div>
							<div>
								<img src="./assets/Imagem_Especialistas-em-relacoes-humanas.png" />
							</div>
						</div>
					</div>
				</S.RelationsContainer>
				<S.Container>
					<CarouselSegments />
				</S.Container>
				<S.Container>
					<S.formContent>
						<div className="form-content">
							<h2>ENTRE EM CONTATO</h2>
							<p>
								Converse com os nossos especialistas e descubra como podemos
								reinventar a sua comunicação com o consumidor.
							</p>
							<form>
								<input type="text" placeholder="Nome*"></input>
								<input type="text" placeholder="E-mail*"></input>
								<input type="text" placeholder="Telefone*"></input>
								<input
									className="home-form-textarea"
									type="textarea"
									placeholder="Mensagem*"
								></input>
								<div className="politics-form-wrapper">
									<input type="checkbox"></input>
									<label>
										Estou ciente das condições de tratamento dos meus dados
										pessoais e dou meu consentimento, quando aplicável, conforme
										descrito na
										<a> Política de Privacidade</a>.
									</label>
								</div>
								<div className="home-form-button-container">
									<button>Enviar</button>
								</div>
							</form>
						</div>
					</S.formContent>
				</S.Container>
			</S.MainContainer>
		</>
	);
}
