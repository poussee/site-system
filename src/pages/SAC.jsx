import Image from 'next/dist/client/image';
import Head from 'next/head';

import Banner from '../components/Banners/Banner';
import CustomerComments from '../components/CustomerComments';
import Form from '../components/Form';
import SolutionBlock from '../components/SolutionBlock';
import CarouselUniqueServices from '../components/CarouselUniqueServices';

const CustomerCommentsBackground = '/assets/sac/Bg_Depoimento.png';
import bannerBackground from '../../public/assets/banners/banner-sac.png';
import SolutionImage from '/public/assets/sac/Imagem_Excelencia.png';
import FormImage from '../../public/assets/Imagem_Quero-um-orcamento.png';
import SelectionImage from '/public/assets/sac/Icone_Selecao.png';
import TrainamentImage from '/public/assets/sac/Icone_Treinamento.png';
import AgilityImage from '/public/assets/sac/Icone_Agilidade.png';
import CreationImage from '/public/assets/sac/Icone_Cariacao.png';
import InterationImage from '/public/assets/sac/Icone_Interacoes.png';
import IntegrationImage from '/public/assets/sac/Icone_Integracao.png';
import ChatBotImage from '/public/assets/sac/Icone_Chatbot.png';
import NPSImage from '/public/assets/sac/Icone_NPS.png';
import FotoDepoimento from '/public/assets/cobranca/Foto_Depoimento.png';

import * as S from '../styles/servicesCommonStyle';

export default function QuemSomos() {
	return (
		<>
			<Head>
				<title>System | SAC</title>
			</Head>
			<Banner
				className="banner"
				background={bannerBackground}
				title="SAC"
				subtitle="Gerenciamento da resolução de problemas e reclamações em múltiplos canais de atendimento."
				service={true}
			/>
			<SolutionBlock
				color="#0182b0"
				image={SolutionImage}
				title={'EXCELENCIA EM SUPORTE AO CLIENTE'}
				subtitle="A eficiência que os consumidores buscam ao contatar sua empresa."
				text="SAC é a sigla para Serviço de Atendimento ao Consumidor. Trata-se de um serviço prestado pelas empresas para atender aos seus clientes, resolvendo chamados técnicos, esclarecendo dúvidas e informando detalhes sobre produtos e serviços."
				listItems={[
					'Oferecemos atendimento regulamentado e transacional, abrangendo todos os principais canais da atualidade.',
					'Integramos os diferentes meios de contato, como e-mail, chat e telefone, para proporcionar maior fluidez e comodidade na jornada do cliente.',
					'Geramos relatórios gerenciais visando garantir visibilidade durante todo o processo.',
					'Realizamos análises em tempo real e utilizamos os dados para oferecer ao cliente exatamente o que ele precisa, no momento certo.',
				]}
				titleWidth={'auto'}
			/>
			<CarouselUniqueServices
				firstImage={SelectionImage}
				firstDescription={
					'Seleção de profissionais com o auxílio de tecnologias avançadas'
				}
				secondImage={TrainamentImage}
				secondDescription={'Treinamentos customizados para os agentes'}
				thirdImage={AgilityImage}
				thirdDescription={'Agilidade na resolução de dúvidas dos clientes'}
				fourthImage={CreationImage}
				fourthDescription={
					'Criação, atualização e envio de relatórios gerenciais'
				}
				fifthImage={InterationImage}
				fifthDescription={
					'Interações personalizadas de acordo com o perfil do cliente'
				}
				sixthImage={IntegrationImage}
				sixthDescription={'Integração dos canais de atendimento'}
				seventhImage={ChatBotImage}
				seventhDescription={'Possibilidade de automação por meio de chatbots'}
				eighthImage={NPSImage}
				eighthDescription={'NPS acima da média do mercado'}
			/>
			{/* <CustomerComments
				BackgroundImage={CustomerCommentsBackground}
				authorName={'ALBERTO PEREIRA'}
				authorJob={'Diretor de produção'}
				authorEnterprise={'Empresa X'}
				authorFoto={FotoDepoimento}
			/> */}
			<S.FormContainer>
				<S.FormContent>
					<div className="form-image">
						<Image src={FormImage} alt="Homem falando ao telefone" />
					</div>
					<div className="form-holder">
						<Form
							title="QUERO UM ORÇAMENTO"
							subtitle="Envie sua mensagem e aguarde nosso retorno."
							padding={true}
						/>
					</div>
				</S.FormContent>
			</S.FormContainer>
		</>
	);
}
