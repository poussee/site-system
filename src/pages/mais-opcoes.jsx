import Image from 'next/dist/client/image';
import { useState, useEffect } from 'react';

import Banner from '../components/Banners/Banner';
import CustomerComments from '../components/CustomerComments';
import Form from '../components/Form';
import CarouselUniqueServices from '../components/CarouselUniqueServices';
import CarouselServicesDesktop from '../components/CarouselServicesDesktop';
import CarouselServicesMobile from '../components/CarouselServicesMobile';

const CustomerCommentsBackground = '/assets/mais-opcoes/Bg_Depoimento.png';
import bannerBackground from '../../public/assets/banners/banner-mais-opcoes.png';
import SolutionImage from '/public/assets/mais-opcoes/Imagem_O-momento.png';
import FormImage from '../../public/assets/Imagem_Quero-um-orcamento.png';
import FotoDepoimento from '/public/assets/cobranca/Foto_Depoimento.png';

import * as S from '../styles/servicesCommonStyle';
import * as T from '../styles/mais-opcoes';

export default function QuemSomos() {
	const [screenWidth, setScreenWidth] = useState(null);

	function handleResize() {
		setScreenWidth(window.screen.width);
	}

	useEffect(() => {
		handleResize();
	}, []);

	return (
		<>
			<Banner
				className="banner"
				background={bannerBackground}
				title="Soluções interativas de relacionamento"
				subtitle="Uma ampla gama de produtos e serviços para transformar seus contatos em oportunidades."
				service={true}
			/>
			<T.SolutionContainer>
				<T.SolutionContent>
					<div className="solutions-information">
						<div className="solutions-texts">
							<p className="solution-title">
								O momento de inovar é agora.
								<br />
								Reinvente sua comunicação.
							</p>
							<p>
								O mundo mudou e, com ele, as formas de se conectar aos clientes.
								Os avanços tecnológicos trouxeram incríveis possibilidades para
								as interações entre empresas e consumidores, elevando a
								eficiência das respostas a um novo patamar.
							</p>
							<p>
								Não faltam opções para sua empresa otimizar a experiência do
								cliente. Aliando as possibilidades da tecnologia à empatia nas
								relações, oferecemos variadas ferramentas para negócios que
								entendem o valor de colocar o consumidor em primeiro lugar.
							</p>
							<p className="solution-subtitle">
								Conheça nossas soluções inovadoras e potencialize seus
								resultados.
							</p>
						</div>
					</div>
					<div className="solutions-image">
						<Image src={SolutionImage} alt="Homem falando ao telefone" />
					</div>
				</T.SolutionContent>
			</T.SolutionContainer>
			{screenWidth > 768 ? (
				<CarouselServicesDesktop />
			) : (
				<CarouselServicesMobile />
			)}
			<CustomerComments
				BackgroundImage={CustomerCommentsBackground}
				dif={true}
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
