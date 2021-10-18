import Image from 'next/dist/client/image';

import Banner from '../components/Banners/Banner';
import CustomerComments from '../components/CustomerComments';
import Form from '../components/Form';
import SolutionBlock from '../components/SolutionBlock';
import CarouselUniqueServices from '../components/CarouselUniqueServices';

const CustomerCommentsBackground = '/assets/cobranca/Bg_Depoimento.png';
import bannerBackground from '../../public/assets/banners/banner-cobranca.png';
import SolutionImage from '/public/assets/cobranca/Imagem_Solucoes.png';
import FormImage from '../../public/assets/Imagem_Quero-um-orcamento.png';
import EmpathyImage from '/public/assets/cobranca/Icone_Empatia.png';
import PlanningImage from '/public/assets/cobranca/Icone_Planejamento.png';
import ChargeImage from '/public/assets/cobranca/Icone_Processo_cobrança.png';
import ProductionImage from '/public/assets/cobranca/Icone_Produção.png';
import AgilityImage from '/public/assets/cobranca/Icone_agilidade.png';
import CrmImage from '/public/assets/cobranca/Icone_CRM.png';
import PartnersImage from '/public/assets/cobranca/Icone_parcerias.png';
import ResultsImage from '/public/assets/cobranca/Icone_Foco_Resultados.png';
import FotoDepoimento from '/public/assets/cobranca/Foto_Depoimento.png';

import * as S from '../styles/servicesCommonStyle';

export default function QuemSomos() {
	return (
		<>
			<Banner
				className="banner"
				background={bannerBackground}
				title="Cobrança"
				subtitle="Abordagens com eficiência comprovada para todas as etapas da recuperação de crédito."
				service={true}
			/>
			<SolutionBlock
				color="#cb2378"
				image={SolutionImage}
				title={'SOLUÇÃO MULTICANAL E INTEGRADA'}
				subtitle="O passo que falta para potencializar a rentabilidade de seu negócio."
				text="A inadimplência dos consumidores pode ser um dos principais
                obstáculos à lucratividade de uma empresa. Sabendo disso,
                oferecemos soluções inteligentes com resultados comprovados para
                todas as etapas do processo de recuperação de crédito."
				listItems={[
					'Realizamos os contatos com os clientes em diversas frentes, gerenciando todas as operações com softwares específicos.',
					'O acompanhamento das métricas e a geração de relatórios garantem a constante otimização das abordagens.',
					'Todas as bases de dados dos clientes são tratadas por meio de Data Quality. Antes do início das ações de cobrança, as informações são organizadas, padronizadas e validadas.',
					'Temos um canal interativo que possibilita a realização de negociações de débitos de forma segura, rápida e flexível.',
				]}
			/>
			<CarouselUniqueServices
				firstImage={EmpathyImage}
				firstDescription={'Empatia e humanização no atendimento'}
				secondImage={PlanningImage}
				secondDescription={'Planejamento e modelagem estatística'}
				thirdImage={ChargeImage}
				thirdDescription={'Processo de cobrança inteligente e eficaz'}
				fourthImage={ProductionImage}
				fourthDescription={'Produção e gestão de informações gerenciais'}
				fifthImage={AgilityImage}
				fifthDescription={'Agilidade na implantação de processos e operações'}
				sixthImage={CrmImage}
				sixthDescription={'Conceitos de CRM aplicados à recuperação de crédito'}
				seventhImage={PartnersImage}
				seventhDescription={
					'Parcerias com outros canais de soluções e fidelização de clientes'
				}
				eighthImage={ResultsImage}
				eighthDescription={'Foco na entrega de resultados'}
			/>
			<CustomerComments
				BackgroundImage={CustomerCommentsBackground}
				authorName={'ALBERTO PEREIRA'}
				authorJob={'Diretor de produção'}
				authorEnterprise={'Empresa X'}
				authorFoto={FotoDepoimento}
			/>
			<S.FormContainer>
				<S.FormContent>
					<div className="form-image">
						<Image src={FormImage} alt="Homem falando ao telefone" />
					</div>
					<div className="form-holder">
						<Form
							title="FALE CONOSCO"
							subtitle="Envie sua mensagem e aguarde nosso retorno."
							padding={true}
						/>
					</div>
				</S.FormContent>
			</S.FormContainer>
		</>
	);
}
