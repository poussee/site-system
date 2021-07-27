import CarouselItem from 'react-elastic-carousel';

import * as S from './styles';

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 450, itemsToShow: 1, itemsToScroll: 1, pagination: true },
	{ width: 550, itemsToShow: 3, itemsToScroll: 3, pagination: true },
	{ width: 768, itemsToShow: 3, itemsToScroll: 3, pagination: true },
	{ width: 1200, itemsToShow: 3, itemsToScroll: 3, pagination: true },
];

const SolutionsCarousel = () => {
	return (
		<S.Container>
			<S.CarouselContainer>
				<CarouselItem breakPoints={breakPoints}>
					<S.ItemContainer>
						<S.Img src="/assets/mais-opcoes.png" alt="Icone Varejo" />
					</S.ItemContainer>
					<S.ItemContainer>
						<S.Img src="/assets/mais-opcoes.png" alt="Icone Varejo" />
					</S.ItemContainer>
					<S.ItemContainer>
						<S.Img src="/assets/mais-opcoes.png" alt="Icone Varejo" />
					</S.ItemContainer>
				</CarouselItem>
			</S.CarouselContainer>
		</S.Container>
	);
};

export default SolutionsCarousel;
