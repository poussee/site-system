import Image from 'next/dist/client/image';

import Banner from '../components/Banners/Banner';
import CustomerComments from '../components/CustomerComments';
import Form from '../components/Form';
import SolutionBlock from '../components/SolutionBlock';
import CarouselUniqueServices from '../components/CarouselUniqueServices';

const CustomerCommentsBackground = '/assets/vendas/Bg_Depoimento.png';
import bannerBackground from '../../public/assets/banners/banner-vendas.png';
import SolutionImage from '/public/assets/vendas/Imagem_abordagens.png';
import FormImage from '../../public/assets/Imagem_Quero-um-orcamento.png';
import HiringImage from '/public/assets/vendas/Icone_Contratacao.png';
import DataImage from '/public/assets/vendas/Icone_Uso_de_data.png';
import AgilityImage from '/public/assets/vendas/Icone_Agilidad.png';
import FollowImage from '/public/assets/vendas/Icone_acompanhamento.png';
import CreationImage from '/public/assets/vendas/Icone_Criacao.png';
import ProcessImage from '/public/assets/vendas/Icone_Processo.png';
import IntegrationImage from '/public/assets/vendas/Icone_Integracao.png';
import FotoDepoimento from '/public/assets/cobranca/Foto_Depoimento.png';

import * as S from '../styles/servicesCommonStyle';

export default function QuemSomos() {
	return (
		<>
			<Banner
				className="banner"
				background={bannerBackground}
				title="Vendas"
				subtitle="Desenvolvimento de estratégias que potencializam a geração de novos negócios."
				service={true}
			/>
			<SolutionBlock
				color="#0182b0"
				image={SolutionImage}
				title={'ABORDAGENS INTELIGENTES E PERSONALIZADAS'}
				subtitle="Tudo o que sua empresa precisa para conquistar e fidelizar clientes."
				text="Comprometidos com a qualidade das vendas, garantimos integridade e segurança em todo o processo, com áreas focadas na excelência e no monitoramento contínuo. Muito além de entregar os melhores resultados, construímos um relacionamento próximo com os consumidores, atuando inclusive no pós-venda."
				listItems={[
					'Com o auxílio de inteligência artificial, identificamos prontamente oportunidades de geração de negócios por meio de speech analytics.',
					'Atuamos com o conceito de Business Support, que inclui etapas como o planejamento, o acompanhamento de resultados e a integração tecnológica.',
					'Oferecemos treinamentos sob medida para os operadores, totalmente alinhados às soluções e necessidades dos nossos clientes.',
					'Somos especialistas em seguros: mais de 80% das nossas operações de vendas atendem grandes empresas do segmento.',
				]}
				titleWidth={'350px'}
			/>
			<CarouselUniqueServices
				firstImage={HiringImage}
				firstDescription={'Contratação de profissionais com os perfis ideais'}
				secondImage={DataImage}
				secondDescription={
					'Uso de Data Quality para potencializar carteiras de clientes'
				}
				thirdImage={AgilityImage}
				thirdDescription={'Agilidade na implantação de processos e operações'}
				fourthImage={FollowImage}
				fourthDescription={'Acompanhamento da operação em tempo real'}
				fifthImage={CreationImage}
				fifthDescription={
					'Criação, atualização e envio de relatórios gerenciais'
				}
				sixthImage={ProcessImage}
				sixthDescription={'Processo de vendas concluído em uma única chamada'}
				seventhImage={IntegrationImage}
				seventhDescription={'Integração dos diversos canais de atendimento'}
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
