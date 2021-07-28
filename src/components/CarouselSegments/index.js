import CarouselItem from 'react-elastic-carousel';

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
						<S.Img
							src="/assets/favicons/icone-Varejo_Segamentos-atendidos.png"
							alt="Icone Varejo"
						/>
						<p>Varejo</p>
					</S.ItemContainer>
					<S.ItemContainer>
						<S.Img
							src="/assets/favicons/icone-Financeiro_Segamentos-atendidos.png"
							alt="Icone Financeiro"
						/>
						<p>Financeiro</p>
					</S.ItemContainer>
					<S.ItemContainer>
						<S.Img
							src="/assets/favicons/icone-TV-por-assinatura_Segamentos-atendidos.png"
							alt="Icone TV"
						/>
						<p>TV por assinatura</p>
					</S.ItemContainer>
					<S.ItemContainer>
						<S.Img
							src="/assets/favicons/icone-utilities-Segamentos-atendidos.png"
							alt="Icone Utilidades"
						/>
						<p>Utilidades</p>
					</S.ItemContainer>
					<S.ItemContainer>
						<S.Img
							src="/assets/favicons/icone-farmaceutico_Segamentos-atendidos.png"
							alt="Icone Farmaceutico"
						/>
						<p>Farmacêuticos</p>
					</S.ItemContainer>
					<S.ItemContainer>
						<S.Img
							src="/assets/favicons/icone-comunicacao_Segamentos-atendidos.png"
							alt="Icone Comunicação"
						/>
						<p>Comunicação</p>
					</S.ItemContainer>
					<S.ItemContainer>
						<S.Img
							src="/assets/favicons/icone-alimenticio_Segamentos-atendidos.png"
							alt="Icone Alimenticios"
						/>
						<p>Alimentícios</p>
					</S.ItemContainer>
					<S.ItemContainer>
						<S.Img
							src="/assets/favicons/icone-entretenimento_Segamentos-atendidos.png"
							alt="Icone Entretenimento"
						/>
						<p>Entretenimento</p>
					</S.ItemContainer>
				</CarouselItem>
			</S.CarouselContainer>
		</S.Container>
	);
};

export default SegmentsCarousel;
