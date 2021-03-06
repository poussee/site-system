import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

import Image from 'next/dist/client/image';
import LinkButton from '../LinkButton';

import * as S from './styles';

import HomeOffice from '/public/assets/mais-opcoes/Icone_Gestao_Home.png';
import Research from '/public/assets/mais-opcoes/Icone_Pesquisa.png';
import Chatbot from '/public/assets/mais-opcoes/Icone_Chatbot.png';
import CRM from '/public/assets/mais-opcoes/Icone_CRM.png';
import DoorToDoor from '/public/assets/mais-opcoes/Icone_door-to-door.png';
import Chat from '/public/assets/mais-opcoes/Icone_Chat.png';
import Retention from '/public/assets/mais-opcoes/Icone_Retencao.png';
import Support from '/public/assets/mais-opcoes/Icone_Suporte.png';
import Ura from '/public/assets/mais-opcoes/Icone_URA.png';
import Infrastructure from '/public/assets/mais-opcoes/Icone_Infraestrutura.png';
import Ux from '/public/assets/mais-opcoes/Icone_Ux.png';
import Webview from '/public/assets/mais-opcoes/Icone_Webview.png';
import Wpp from '/public/assets/mais-opcoes/Icone_whatsapp.png';
import VideoCall from '/public/assets/mais-opcoes/Icone_Via-video.png';
import Bodyshop from '/public/assets/mais-opcoes/Icone_Bodyshop.png';
import email from '/public/assets/mais-opcoes/Icone_gerenciador-email.png';
import DigitalAgent from '/public/assets/mais-opcoes/Icone_Agente-digital.png';
import Backoffice from '/public/assets/mais-opcoes/Icone_BAckOffice.png';
import SpecialProjects from '/public/assets/mais-opcoes/Icone_Projetos-especiais.png';
import HumanPersona from '/public/assets/mais-opcoes/Icone_Human-persona.png';
import SocialCare from '/public/assets/mais-opcoes/Icone_Social-Care.png';
import SocialPlatform from '/public/assets/mais-opcoes/Icone_Plataforma-social.png';

export default class CarouselServicesDesktop extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const settings = {
			className: 'center',
			centerMode: true,
			infinite: true,
			dots: true,
			centerPadding: 0,
			slidesToShow: 1,
			autoplay: true,
			speed: 500,
			initialSlide: 1,
			afterChange: () =>
				this.setState((state) => ({ updateCount: state.updateCount + 1 })),
			beforeChange: (current, next) => this.setState({ slideIndex: next }),
			customPaging: (i) => (
				<div className="ft-slick__dots--custom">
					<p>
						{i < 9 ? 0 : ''}
						{i + 1}
					</p>
					<span className="arrow">???</span>
				</div>
			),
		};
		return (
			<S.Container>
				<S.CarouselContainer>
					<Slider ref={(slider) => (this.slider = slider)} {...settings}>
						<S.ItemContainer>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>Gest??o home office</h3>
										<div className="divisor"></div>
									</div>
									<p>
										Essa solu????o, que atende aos mais elevados padr??es de
										seguran??a de dados, permite que os agentes realizem os
										atendimentos em casa, por meio de tecnologias que
										redirecionam as chamadas. Provemos os recursos para
										atividades home based de forma integral, incluindo os
										profissionais, ou parcial, fornecendo somente as
										ferramentas.
									</p>
								</div>
								<div className="image-handler">
									<Image src={HomeOffice} quality={100} />
								</div>
							</div>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>Pesquisa</h3>
										<div className="divisor"></div>
									</div>
									<p>Atuamos com Experian h?? mais de 10 anos.</p>
								</div>
								<div className="image-handler">
									<Image src={Research} quality={100} />
								</div>
							</div>
						</S.ItemContainer>
						<S.ItemContainer>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>Reten????o</h3>
										<div className="divisor"></div>
									</div>
									<p>
										A reten????o de clientes que entram em contato para cancelar
										servi??os, convencendo-os a readequ??-los, ?? uma a????o
										estrat??gica com grande impacto na lucratividade de um
										neg??cio. Por isso, treinamos agentes para realizar ofertas
										atrativas, fidelizando os consumidores.
									</p>
								</div>
								<div className="image-handler">
									<Image src={Retention} quality={100} />
								</div>
							</div>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>BackOffice</h3>
										<div className="divisor"></div>
									</div>
									<p>
										A express??o ???back office???, em uma tradu????o literal,
										significa ???por tr??s do escrit??rio???, e essa ?? justamente a
										proposta desse tipo de gest??o. Nossos analistas fazem a
										tratativa de retaguarda das opera????es e s??o respons??veis por
										dar andamento a todas as demandas que chegam para a equipe
										de atendimento.
									</p>
								</div>
								<div className="image-handler">
									<Image src={Backoffice} quality={100} />
								</div>
							</div>
						</S.ItemContainer>
						<S.ItemContainer>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>Suporte t??cnico</h3>
										<div className="divisor"></div>
									</div>
									<p>
										Essencial para um p??s-vendas efetivo, esse servi??o fornece
										assist??ncia ??gil para a resolu????o de quest??es t??cnicas. As
										intera????es abrangem diferentes canais e s??o realizadas por
										agentes treinados para solucionar demandas de variadas
										complexidades.
									</p>
								</div>
								<div className="image-handler">
									<Image src={Support} quality={100} />
								</div>
							</div>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>Bodyshop</h3>
										<div className="divisor"></div>
									</div>
									<p>
										Com os constantes avan??os tecnol??gicos, as empresas precisam
										se atualizar continuamente. Sabendo disso, realizamos a
										terceiriza????o de m??o de obra capacitada para implantar novas
										solu????es no local e preparar profissionais para dar
										continuidade e sustenta????o a elas.
									</p>
								</div>
								<div className="image-handler">
									<Image src={Bodyshop} quality={100} />
								</div>
							</div>
						</S.ItemContainer>
						<S.ItemContainer>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>Infraestrutura</h3>
										<div className="divisor"></div>
									</div>
									<p>
										Oferecemos posi????es de atendimento para a execu????o das
										opera????es com suporte 24x7, contingenciado em local seguro e
										monitorado. Podemos fornecer o espa??o f??sico com mesa,
										cadeiras, computadores e perif??ricos e a infraestrutura
										t??cnica, que compreende equipamentos como DAC, gravador e
										PABX.
									</p>
								</div>
								<div className="image-handler">
									<Image src={Infrastructure} quality={100} />
								</div>
							</div>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>Human Persona</h3>
										<div className="divisor"></div>
									</div>
									<p>
										Metodologia desenvolvida para gerar empatia e responsividade
										na comunica????o, incorporando atributos humanos, como
										personalidade, voz, apar??ncia f??sica e outras
										caracter??sticas. Ao reproduzir e aplicar o DNA da marca em
										v??rias vertentes, possibilita uma interven????o mais
										humanizada.
									</p>
								</div>
								<div className="image-handler">
									<Image src={HumanPersona} quality={100} />
								</div>
							</div>
						</S.ItemContainer>
						<S.ItemContainer>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>UX, CX e CS</h3>
										<div className="divisor"></div>
									</div>
									<p>
										Nossos especialistas atuam na identifica????o de oportunidades
										e gaps de implementa????o de solu????es que enrique??am a
										experi??ncia do cliente, seja em um novo canal,
										autoatendimento ou otimiza????o de processos.
									</p>
								</div>
								<div className="image-handler">
									<Image src={Ux} quality={100} />
								</div>
							</div>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>Social Care</h3>
										<div className="divisor"></div>
									</div>
									<p>
										Aliamos sua presen??a digital ao suporte e relacionamento com
										o cliente nas principais plataformas de comunica????o da
										atualidade. Temos uma superintend??ncia especializada em
										atendimento nas redes sociais, que gerencia opera????es para
										empresas de diversos setores.
									</p>
								</div>
								<div className="image-handler">
									<Image src={SocialCare} quality={100} />
								</div>
							</div>
						</S.ItemContainer>
						<S.ItemContainer>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>Door to Door</h3>
										<div className="divisor"></div>
									</div>
									<p>
										Atuamos no desenvolvimento e execu????o de estrat??gias de
										vendas em campo. Selecionamos os melhores profissionais para
										as abordagens porta a porta e realizamos o constante
										acompanhamento dos resultados para aprimorar a solu????o.
									</p>
								</div>
								<div className="image-handler">
									<Image src={DoorToDoor} quality={100} />
								</div>
							</div>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>Software de CRM</h3>
										<div className="divisor"></div>
									</div>
									<p>
										Nossa plataforma SaaS permite o acesso a informa????es
										atualizadas sobre os clientes. Identificamos e armazenamos
										as informa????es de cada comprador, inclusive interesses
										pessoais e ??ltimas compras. Assim, ?? poss??vel oferecer um
										atendimento individualizado.
									</p>
								</div>
								<div className="image-handler">
									<Image src={CRM} quality={100} />
								</div>
							</div>
						</S.ItemContainer>
						<S.ItemContainer>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>Plataforma Social</h3>
										<div className="divisor"></div>
									</div>
									<p>
										O Volt Digital ?? ideal para empresas que buscam oferecer um
										atendimento omnichannel de excel??ncia. Centraliza todas as
										intera????es com o consumidor, promovendo a produtividade da
										equipe. Com an??lises em tempo real e relat??rios gerenciais,
										favorece a otimiza????o da experi??ncia do cliente.
									</p>
								</div>
								<div className="image-handler">
									<Image src={SocialPlatform} quality={100} />
								</div>
							</div>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>Chatbot</h3>
										<div className="divisor"></div>
									</div>
									<p>
										Os rob??s capazes de interagir com os consumidores por meio
										de chats s??o excelentes para maximizar a agilidade e
										disponibilidade do atendimento. Podem ser baseados em regras
										ou intelig??ncia artificial, de acordo com a estrat??gia de
										comunica????o adotada.
									</p>
								</div>
								<div className="image-handler">
									<Image src={Chatbot} quality={100} />
								</div>
							</div>
						</S.ItemContainer>
						<S.ItemContainer>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>Agente Digital</h3>
										<div className="divisor"></div>
									</div>
									<p>
										Sistema de intelig??ncia cognitiva que substitui a intera????o
										humana por m??quina, pois tem a capacidade de aprender e
										aplicar novas linguagens e abordagens. Com ele, ?? poss??vel
										reduzir o custo da opera????o, al??m de garantir alta
										disponibilidade ??? pode ficar online 24 horas por dia, 7 dias
										por semana.
									</p>
								</div>
								<div className="image-handler">
									<Image src={DigitalAgent} quality={100} />
								</div>
							</div>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>URA</h3>
										<div className="divisor"></div>
									</div>
									<p>
										A Unidade de Resposta Aud??vel ?? uma tecnologia que oferece
										servi??os autom??ticos para os clientes que ligam para o call
										center, como responder d??vidas e fornecer informa????es, sem
										que haja a interven????o de um atendente humano. Pode ser
										utilizada para diversas finalidades.
									</p>
								</div>
								<div className="image-handler">
									<Image src={Ura} quality={100} />
								</div>
							</div>
						</S.ItemContainer>
						<S.ItemContainer>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>WhatsApp</h3>
										<div className="divisor"></div>
									</div>
									<p>
										O aplicativo de mensagens mais popular do mundo coloca a
										empresa ao alcance do consumidor. Com integra????o oficial e
										elevada seguran??a de dados, nossa solu????o foi idealizada
										para gerar aproxima????o, ao mesmo tempo em que facilita a
										gest??o e potencializa a produtividade das opera????es.
									</p>
								</div>
								<div className="image-handler">
									<Image src={Wpp} quality={100} />
								</div>
							</div>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>Chat</h3>
										<div className="divisor"></div>
									</div>
									<p>
										Esse canal se destaca por permitir uma comunica????o em tempo
										real e v??rias intera????es simult??neas. Direto, pr??tico e sem
										burocracia, possibilita um atendimento r??pido, mas ao mesmo
										tempo humanizado. Trata-se de uma das ferramentas mais
										tradicionais e com melhor aceita????o do mercado.
									</p>
								</div>
								<div className="image-handler">
									<Image src={Chat} quality={100} />
								</div>
							</div>
						</S.ItemContainer>
						<S.ItemContainer>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>Gerenciador de e-mail</h3>
										<div className="divisor"></div>
									</div>
									<p>
										O e-mail ?? um excelente recurso que auxilia na gest??o de
										Customer Experience. Para aproveitar ao m??ximo o seu
										potencial, criamos uma plataforma que otimiza as intera????es
										por esse canal. Com as principais features do mercado,
										permite o controle de todas as demandas, dando ao usu??rio
										total autonomia.
									</p>
								</div>
								<div className="image-handler">
									<Image src={email} quality={100} />
								</div>
							</div>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>Atendimento via v??deo</h3>
										<div className="divisor"></div>
									</div>
									<p>
										Em busca de um suporte personalizado e eficiente? O
										videoatendimento ?? uma ??tima op????o. Afinal, quando o
										consumidor v?? o atendente mostrando detalhes do produto ou
										resolvendo face a face um problema t??cnico, a chance de
										haver algum erro de comunica????o ?? muito menor. A resolu????o
										ocorre j?? na primeira chamada.
									</p>
								</div>
								<div className="image-handler">
									<Image src={VideoCall} quality={100} />
								</div>
							</div>
						</S.ItemContainer>
						<S.ItemContainer>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>Webview</h3>
										<div className="divisor"></div>
									</div>
									<p>
										A comunica????o via SMS contendo um link que leva a uma
										landing page pode ser utilizada para v??rias finalidades,
										como: encaminhar os clientes ao melhor canal de atendimento,
										gerar leads para contatos futuros e solicitar servi??os
										r??pidos. Totalmente customiz??vel, essa solu????o interativa
										possibilita impactar at?? 100% dos usu??rios mobile.
									</p>
								</div>
								<div className="image-handler">
									<Image src={Webview} quality={100} />
								</div>
							</div>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>Projetos especiais</h3>
										<div className="divisor"></div>
									</div>
									<p>
										Customizamos nossos servi??os de acordo com a demanda do seu
										projeto. Utilizamos intelig??ncia, tecnologia avan??ada e
										excel??ncia para atingir todos os objetivos de sua empresa.
										Do planejamento ?? execu????o, estamos preparados para
										atend??-la.
									</p>
								</div>
								<div className="image-handler">
									<Image src={SpecialProjects} quality={100} />
								</div>
							</div>
						</S.ItemContainer>
					</Slider>
				</S.CarouselContainer>
			</S.Container>
		);
	}
}
