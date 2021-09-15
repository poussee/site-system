import CarouselItem from 'react-elastic-carousel';
import Image from 'next/dist/client/image';

import iconeVarejo from '../../../public/assets/favicons/icone-Varejo_Segamentos-atendidos.png';
import iconeFinanceiro from '../../../public/assets/favicons/icone-Financeiro_Segamentos-atendidos.png';
import iconeTvPorAssinatura from '../../../public/assets/favicons/icone-TV-por-assinatura_Segamentos-atendidos.png';
import iconeUtilidades from '../../../public/assets/favicons/icone-utilities-Segamentos-atendidos.png';
import iconeFarmaceuticos from '../../../public/assets/favicons/icone-farmaceutico_Segamentos-atendidos.png';
import iconeComunicacao from '../../../public/assets/favicons/icone-comunicacao_Segamentos-atendidos.png';
import iconeAlimenticios from '../../../public/assets/favicons/icone-alimenticio_Segamentos-atendidos.png';
import iconeEntretenimento from '../../../public/assets/favicons/icone-entretenimento_Segamentos-atendidos.png';

import * as S from './styles';

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 450, itemsToShow: 1, itemsToScroll: 1, pagination: true },
	{ width: 550, itemsToShow: 3, itemsToScroll: 3, pagination: true },
	{ width: 768, itemsToShow: 3, itemsToScroll: 3, pagination: true },
	{ width: 1200, itemsToShow: 3, itemsToScroll: 3, pagination: true },
];

const SegmentsCarousel = () => {
	return (
		<S.Container>
			<h2>SEGMENTOS ATENDIDOS</h2>
			<h4>
				Conheça os setores que já optaram pelo apoio de nossa
				<br /> atuação estratégica na otimização de suas interações.
			</h4>

			<S.CarouselContainer>
				<CarouselItem breakPoints={breakPoints}>
					<S.ItemContainer>
						<S.ImgContainer>
							<Image
								layout="responsive"
								quality={100}
								src={iconeVarejo}
								alt="Icone Varejo"
							/>
						</S.ImgContainer>
						<p>Varejo</p>
					</S.ItemContainer>
					<S.ItemContainer>
						<S.ImgContainer>
							<Image
								layout="responsive"
								quality={100}
								src={iconeFinanceiro}
								alt="Icone Financeiro"
							/>
						</S.ImgContainer>
						<p>Financeiro</p>
					</S.ItemContainer>
					<S.ItemContainer>
						<S.ImgContainer>
							<Image
								layout="responsive"
								quality={100}
								src={iconeTvPorAssinatura}
								alt="Icone TV"
							/>
						</S.ImgContainer>
						<p>TV por assinatura</p>
					</S.ItemContainer>
					<S.ItemContainer>
						<S.ImgContainer>
							<Image
								layout="responsive"
								quality={100}
								src={iconeUtilidades}
								alt="Icone Utilidades"
							/>
						</S.ImgContainer>
						<p>Utilidades</p>
					</S.ItemContainer>
					<S.ItemContainer>
						<S.ImgContainer>
							<Image
								layout="responsive"
								quality={100}
								src={iconeFarmaceuticos}
								alt="Icone Farmaceutico"
							/>
						</S.ImgContainer>
						<p>Farmacêuticos</p>
					</S.ItemContainer>
					<S.ItemContainer>
						<S.ImgContainer>
							<Image
								layout="responsive"
								quality={100}
								src={iconeComunicacao}
								alt="Icone Comunicação"
							/>
						</S.ImgContainer>
						<p>Comunicação</p>
					</S.ItemContainer>
					<S.ItemContainer>
						<S.ImgContainer>
							<Image
								layout="responsive"
								quality={100}
								src={iconeAlimenticios}
								alt="Icone Alimenticios"
							/>
						</S.ImgContainer>
						<p>Alimentícios</p>
					</S.ItemContainer>
					<S.ItemContainer>
						<S.ImgContainer>
							<Image
								layout="responsive"
								quality={100}
								src={iconeEntretenimento}
								alt="Icone Entretenimento"
							/>
						</S.ImgContainer>
						<p>Entretenimento</p>
					</S.ItemContainer>
				</CarouselItem>
			</S.CarouselContainer>
		</S.Container>
	);
};

export default SegmentsCarousel;
