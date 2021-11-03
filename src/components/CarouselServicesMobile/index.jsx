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

export default class CarouselServicesMobile extends Component {
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
					<span className="arrow">⮕</span>
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
										<h3>Gestão home office</h3>
										<div className="divisor"></div>
									</div>
									<p>
										Essa solução, que atende aos mais elevados padrões de
										segurança de dados, permite que os agentes realizem os
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
						</S.ItemContainer>
						<S.ItemContainer>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>Pesquisa</h3>
										<div className="divisor"></div>
									</div>
									<p>Atuamos com Experian há mais de 10 anos.</p>
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
										<h3>Retenção</h3>
										<div className="divisor"></div>
									</div>
									<p>
										A retenção de clientes que entram em contato para cancelar
										serviços, convencendo-os a readequá-los, é uma ação
										estratégica com grande impacto na lucratividade de um
										negócio. Por isso, treinamos agentes para realizar ofertas
										atrativas, fidelizando os consumidores.
									</p>
								</div>
								<div className="image-handler">
									<Image src={Retention} quality={100} />
								</div>
							</div>
						</S.ItemContainer>
						<S.ItemContainer>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>BackOffice</h3>
										<div className="divisor"></div>
									</div>
									<p>
										A expressão “back office”, em uma tradução literal,
										significa “por trás do escritório”, e essa é justamente a
										proposta desse tipo de gestão. Nossos analistas fazem a
										tratativa de retaguarda das operações e são responsáveis por
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
										<h3>Suporte técnico</h3>
										<div className="divisor"></div>
									</div>
									<p>
										Essencial para um pós-vendas efetivo, esse serviço fornece
										assistência ágil para a resolução de questões técnicas. As
										interações abrangem diferentes canais e são realizadas por
										agentes treinados para solucionar demandas de variadas
										complexidades.
									</p>
								</div>
								<div className="image-handler">
									<Image src={Support} quality={100} />
								</div>
							</div>
						</S.ItemContainer>
						<S.ItemContainer>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>Bodyshop</h3>
										<div className="divisor"></div>
									</div>
									<p>
										Com os constantes avanços tecnológicos, as empresas precisam
										se atualizar continuamente. Sabendo disso, realizamos a
										terceirização de mão de obra capacitada para implantar novas
										soluções no local e preparar profissionais para dar
										continuidade e sustentação a elas.
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
										Oferecemos posições de atendimento para a execução das
										operações com suporte 24x7, contingenciado em local seguro e
										monitorado. Podemos fornecer o espaço físico com mesa,
										cadeiras, computadores e periféricos e a infraestrutura
										técnica, que compreende equipamentos como DAC, gravador e
										PABX.
									</p>
								</div>
								<div className="image-handler">
									<Image src={Infrastructure} quality={100} />
								</div>
							</div>
						</S.ItemContainer>
						<S.ItemContainer>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>Human Persona</h3>
										<div className="divisor"></div>
									</div>
									<p>
										Metodologia desenvolvida para gerar empatia e responsividade
										na comunicação, incorporando atributos humanos, como
										personalidade, voz, aparência física e outras
										características. Ao reproduzir e aplicar o DNA da marca em
										várias vertentes, possibilita uma intervenção mais
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
										Nossos especialistas atuam na identificação de oportunidades
										e gaps de implementação de soluções que enriqueçam a
										experiência do cliente, seja em um novo canal,
										autoatendimento ou otimização de processos.
									</p>
								</div>
								<div className="image-handler">
									<Image src={Ux} quality={100} />
								</div>
							</div>
						</S.ItemContainer>
						<S.ItemContainer>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>Social Care</h3>
										<div className="divisor"></div>
									</div>
									<p>
										Aliamos sua presença digital ao suporte e relacionamento com
										o cliente nas principais plataformas de comunicação da
										atualidade. Temos uma superintendência especializada em
										atendimento nas redes sociais, que gerencia operações para
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
										Atuamos no desenvolvimento e execução de estratégias de
										vendas em campo. Selecionamos os melhores profissionais para
										as abordagens porta a porta e realizamos o constante
										acompanhamento dos resultados para aprimorar a solução.
									</p>
								</div>
								<div className="image-handler">
									<Image src={DoorToDoor} quality={100} />
								</div>
							</div>
						</S.ItemContainer>
						<S.ItemContainer>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>Software de CRM</h3>
										<div className="divisor"></div>
									</div>
									<p>
										Nossa plataforma SaaS permite o acesso a informações
										atualizadas sobre os clientes. Identificamos e armazenamos
										as informações de cada comprador, inclusive interesses
										pessoais e últimas compras. Assim, é possível oferecer um
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
										O Volt Digital é ideal para empresas que buscam oferecer um
										atendimento omnichannel de excelência. Centraliza todas as
										interações com o consumidor, promovendo a produtividade da
										equipe. Com análises em tempo real e relatórios gerenciais,
										favorece a otimização da experiência do cliente.
									</p>
								</div>
								<div className="image-handler">
									<Image src={SocialPlatform} quality={100} />
								</div>
							</div>
						</S.ItemContainer>
						<S.ItemContainer>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>Chatbot</h3>
										<div className="divisor"></div>
									</div>
									<p>
										Os robôs capazes de interagir com os consumidores por meio
										de chats são excelentes para maximizar a agilidade e
										disponibilidade do atendimento. Podem ser baseados em regras
										ou inteligência artificial, de acordo com a estratégia de
										comunicação adotada.
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
										Sistema de inteligência cognitiva que substitui a interação
										humana por máquina, pois tem a capacidade de aprender e
										aplicar novas linguagens e abordagens. Com ele, é possível
										reduzir o custo da operação, além de garantir alta
										disponibilidade – pode ficar online 24 horas por dia, 7 dias
										por semana.
									</p>
								</div>
								<div className="image-handler">
									<Image src={DigitalAgent} quality={100} />
								</div>
							</div>
						</S.ItemContainer>
						<S.ItemContainer>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>URA</h3>
										<div className="divisor"></div>
									</div>
									<p>
										A Unidade de Resposta Audível é uma tecnologia que oferece
										serviços automáticos para os clientes que ligam para o call
										center, como responder dúvidas e fornecer informações, sem
										que haja a intervenção de um atendente humano. Pode ser
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
										empresa ao alcance do consumidor. Com integração oficial e
										elevada segurança de dados, nossa solução foi idealizada
										para gerar aproximação, ao mesmo tempo em que facilita a
										gestão e potencializa a produtividade das operações.
									</p>
								</div>
								<div className="image-handler">
									<Image src={Wpp} quality={100} />
								</div>
							</div>
						</S.ItemContainer>
						<S.ItemContainer>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>Chat</h3>
										<div className="divisor"></div>
									</div>
									<p>
										Esse canal se destaca por permitir uma comunicação em tempo
										real e várias interações simultâneas. Direto, prático e sem
										burocracia, possibilita um atendimento rápido, mas ao mesmo
										tempo humanizado. Trata-se de uma das ferramentas mais
										tradicionais e com melhor aceitação do mercado.
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
										O e-mail é um excelente recurso que auxilia na gestão de
										Customer Experience. Para aproveitar ao máximo o seu
										potencial, criamos uma plataforma que otimiza as interações
										por esse canal. Com as principais features do mercado,
										permite o controle de todas as demandas, dando ao usuário
										total autonomia.
									</p>
								</div>
								<div className="image-handler">
									<Image src={email} quality={100} />
								</div>
							</div>
						</S.ItemContainer>
						<S.ItemContainer>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>Atendimento via vídeo</h3>
										<div className="divisor"></div>
									</div>
									<p>
										Em busca de um suporte personalizado e eficiente? O
										videoatendimento é uma ótima opção. Afinal, quando o
										consumidor vê o atendente mostrando detalhes do produto ou
										resolvendo face a face um problema técnico, a chance de
										haver algum erro de comunicação é muito menor. A resolução
										ocorre já na primeira chamada.
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
										A comunicação via SMS contendo um link que leva a uma
										landing page pode ser utilizada para várias finalidades,
										como: encaminhar os clientes ao melhor canal de atendimento,
										gerar leads para contatos futuros e solicitar serviços
										rápidos. Totalmente customizável, essa solução interativa
										possibilita impactar até 100% dos usuários mobile.
									</p>
								</div>
								<div className="image-handler">
									<Image src={Webview} quality={100} />
								</div>
							</div>
						</S.ItemContainer>
						<S.ItemContainer>
							<div className="row">
								<div className="text-wrapper">
									<div className="title">
										<h3>Projetos especiais</h3>
										<div className="divisor"></div>
									</div>
									<p>
										Customizamos nossos serviços de acordo com a demanda do seu
										projeto. Utilizamos inteligência, tecnologia avançada e
										excelência para atingir todos os objetivos de sua empresa.
										Do planejamento à execução, estamos preparados para
										atendê-la.
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
