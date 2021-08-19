import CarouselItem from 'react-elastic-carousel';
import Image from 'next/dist/client/image';

import item1 from '../../../public/assets/quem-somos/Timeline/fatiado/1996.png';
import item2 from '../../../public/assets/quem-somos/Timeline/fatiado/2000.png';
import item3 from '../../../public/assets/quem-somos/Timeline/fatiado/2005.png';
import item4 from '../../../public/assets/quem-somos/Timeline/fatiado/2006.png';
import item5 from '../../../public/assets/quem-somos/Timeline/fatiado/2008.png';
import item6 from '../../../public/assets/quem-somos/Timeline/fatiado/2011.png';
import item7 from '../../../public/assets/quem-somos/Timeline/fatiado/2015.png';
import item8 from '../../../public/assets/quem-somos/Timeline/fatiado/2016.png';
import item9 from '../../../public/assets/quem-somos/Timeline/fatiado/2020.png';

import * as S from './styles';

const HistoryCarousel = () => {
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 311, itemsToShow: 1, itemsToScroll: 1, pagination: true },
		{ width: 312, itemsToShow: 2, itemsToScroll: 2, pagination: true },
		{ width: 660, itemsToShow: 3, itemsToScroll: 3, pagination: true },
	];

	return (
		<S.Container>
			<S.CarouselContainer>
				<CarouselItem breakPoints={breakPoints}>
					<S.ItemContainer>
						<S.ImgContainer>
							<Image src={item1} alt="Icone Varejo" />
						</S.ImgContainer>
					</S.ItemContainer>
					<S.ItemContainer>
						<S.ImgContainer>
							<Image src={item2} alt="Icone Financeiro" />
						</S.ImgContainer>
					</S.ItemContainer>
					<S.ItemContainer>
						<S.ImgContainer>
							<Image src={item3} alt="Icone TV" />
						</S.ImgContainer>
					</S.ItemContainer>
					<S.ItemContainer>
						<S.ImgContainer>
							<Image src={item4} alt="Icone Utilidades" />
						</S.ImgContainer>
					</S.ItemContainer>
					<S.ItemContainer>
						<S.ImgContainer>
							<Image src={item5} alt="Icone Farmaceutico" />
						</S.ImgContainer>
					</S.ItemContainer>
					<S.ItemContainer>
						<S.ImgContainer>
							<Image src={item6} alt="Icone Comunicação" />
						</S.ImgContainer>
					</S.ItemContainer>
					<S.ItemContainer>
						<S.ImgContainer>
							<Image src={item7} alt="Icone Alimenticios" />
						</S.ImgContainer>
					</S.ItemContainer>
					<S.ItemContainer>
						<S.ImgContainer>
							<Image src={item8} alt="Icone Entretenimento" />
						</S.ImgContainer>
					</S.ItemContainer>
					<S.ItemContainer>
						<S.ImgContainer>
							<Image src={item9} alt="Icone Entretenimento" />
						</S.ImgContainer>
					</S.ItemContainer>
				</CarouselItem>
			</S.CarouselContainer>
		</S.Container>
	);
};

export default HistoryCarousel;
