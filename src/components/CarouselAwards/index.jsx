import CarouselItem from 'react-elastic-carousel';
import { useRef } from 'react';
import React from 'react';
import Image from 'next/dist/client/image';

import award9 from '../../../public/assets/quem-somos/nossas-conquistas/2008.png';
import award8 from '../../../public/assets/quem-somos/nossas-conquistas/2008-02.png';
import award7 from '../../../public/assets/quem-somos/nossas-conquistas/2009.png';
import award6 from '../../../public/assets/quem-somos/nossas-conquistas/2012.png';
import award5 from '../../../public/assets/quem-somos/nossas-conquistas/2013.png';
import award4 from '../../../public/assets/quem-somos/nossas-conquistas/2015.png';
import award3 from '../../../public/assets/quem-somos/nossas-conquistas/2016.png';
import award2 from '../../../public/assets/quem-somos/nossas-conquistas/2016-02.png';
import award1 from '../../../public/assets/quem-somos/nossas-conquistas/2021.png';

import N2008 from '../../../public/assets/quem-somos/nossas-conquistas/N_2008.png';
import N2009 from '../../../public/assets/quem-somos/nossas-conquistas/N_2009.png';
import N2012 from '../../../public/assets/quem-somos/nossas-conquistas/N_2012.png';
import N2013 from '../../../public/assets/quem-somos/nossas-conquistas/N_2013.png';
import N2015 from '../../../public/assets/quem-somos/nossas-conquistas/N_2015.png';
import N2016 from '../../../public/assets/quem-somos/nossas-conquistas/N_2016.png';
import N2021 from '../../../public/assets/quem-somos/nossas-conquistas/N_2021.png';

import * as S from './styles';

const breakPoints = [{ width: 1, itemsToShow: 1 }];

const AwardsCarousel = () => {
	const carouselRef = React.useRef(null);

	const onNextStart = (currentItem, nextItem) => {
		if (currentItem.index === nextItem.index) {
			// we hit the last item, go to first item
			carouselRef.current.goTo(0);
		}
	};
	const onPrevStart = (currentItem, nextItem) => {
		if (currentItem.index === nextItem.index) {
			// we hit the first item, go to last item
			carouselRef.current.goTo(universities.length);
		}
	};

	return (
		<S.Container>
			<S.Content>
				<div className="unique-items">
					<div className="text-wrapper">
						<div className="awards-title">
							<h2>NOSSAS CONQUISTAS</h2>
							<div className="awards-divisor"></div>
						</div>
						<p>
							O reconhecimento ?? consequ??ncia de uma atua????o centrada no
							consumidor e guiada por dados.
						</p>
					</div>
					<div className="award">
						<S.ImgContainer>
							<Image
								layout="responsive"
								quality={100}
								src={award1}
								alt="Trof??u de premia????o em 2021"
							/>
						</S.ImgContainer>
						<div className="award-text">
							<p>Programa de Recupera????o de Cr??ditos Vencidos ??? PRCV</p>
							<p>Institui????o financeira</p>
						</div>
						<S.YearImg>
							<Image
								layout="responsive"
								quality={100}
								src={N2021}
								alt="Trof??u de premia????o em 2021"
							/>
						</S.YearImg>
					</div>
				</div>
				<div className="two-items">
					<div className="award">
						<S.ImgContainer>
							<Image
								layout="responsive"
								quality={100}
								src={award2}
								alt="Trof??u de premia????o em 2016"
							/>
						</S.ImgContainer>
						<div className="award-text">
							<p>Programa de Recupera????o de Cr??ditos Vencidos ??? PRCV</p>
							<p>Institui????o financeira</p>
						</div>
					</div>
					<div className="award">
						<S.ImgContainer>
							<Image
								layout="responsive"
								quality={100}
								src={award3}
								alt="Trof??u de premia????o em 2016"
							/>
						</S.ImgContainer>
						<div className="award-text">
							<p>
								Inova????o Tecnol??gica: Solu????o Digital para Recupera????o de
								Cr??dito ???Portal Pacto???
							</p>
							<p>Pr??mio ABT: Ouro</p>
						</div>
					</div>
					<S.YearImg>
						<Image
							layout="responsive"
							quality={100}
							src={N2016}
							alt="Trof??u de premia????o em 2021"
						/>
					</S.YearImg>
				</div>
				<div className="two-items">
					<div className="award">
						<S.ImgContainer>
							<Image
								layout="responsive"
								quality={100}
								src={award8}
								alt="Trof??u de premia????o em 2008"
							/>
						</S.ImgContainer>
						<div className="award-text">
							<p>Melhor Empresa de Cobran??a ??? Foco na PDD</p>
							<p>Institui????o financeira</p>
						</div>
					</div>
					<div className="award">
						<S.ImgContainer>
							<Image
								layout="responsive"
								quality={100}
								src={award9}
								alt="Trof??u de premia????o em 2008"
							/>
						</S.ImgContainer>
						<div className="award-text">
							<p>Empresa Revela????o: A F??brica de Marketing de Relacionamento</p>
							<p>Pr??mio ABT: Prata</p>
						</div>
					</div>
					<S.YearImg>
						<Image
							layout="responsive"
							quality={100}
							src={N2008}
							alt="Trof??u de premia????o em 2021"
						/>
					</S.YearImg>
				</div>
				<div className="unique-items">
					<div className="award">
						<S.ImgContainer>
							<Image
								layout="responsive"
								quality={100}
								src={award4}
								alt="Trof??u de premia????o em 2015"
							/>
						</S.ImgContainer>
						<div className="award-text">
							<p>Melhor Empresa de Hardcore</p>
							<p>Telecomunica????es</p>
						</div>
						<S.YearImg>
							<Image
								layout="responsive"
								quality={100}
								src={N2015}
								alt="Trof??u de premia????o em 2021"
							/>
						</S.YearImg>
					</div>
					<div className="award">
						<S.ImgContainer>
							<Image
								layout="responsive"
								quality={100}
								src={award5}
								alt="Trof??u de premia????o em 2013"
							/>
						</S.ImgContainer>
						<div className="award-text">
							<p>Programa de Recupera????o de Cr??ditos ??? PRC</p>
							<p>Institui????o financeira</p>
						</div>
						<S.YearImg>
							<Image
								layout="responsive"
								quality={100}
								src={N2013}
								alt="Trof??u de premia????o em 2021"
							/>
						</S.YearImg>
					</div>
				</div>
				<div className="unique-items">
					<div className="award">
						<S.ImgContainer>
							<Image
								layout="responsive"
								quality={100}
								src={award6}
								alt="Trof??u de premia????o em 2012"
							/>
						</S.ImgContainer>
						<div className="award-text">
							<p>Recupera????o: Quebra de Acordos Carteira Banco</p>
							<p>Institui????o financeira</p>
						</div>
						<S.YearImg>
							<Image
								layout="responsive"
								quality={100}
								src={N2012}
								alt="Trof??u de premia????o em 2021"
							/>
						</S.YearImg>
					</div>
					<div className="award">
						<S.ImgContainer>
							<Image
								layout="responsive"
								quality={100}
								src={award7}
								alt="Trof??u de premia????o em 2009"
							/>
						</S.ImgContainer>
						<div className="award-text">
							<p>Campanha Motivacional: Copa do Mundo Solid??ria</p>
							<p>Pr??mio ABT: Prata</p>
						</div>
						<S.YearImg>
							<Image
								layout="responsive"
								quality={100}
								src={N2009}
								alt="Trof??u de premia????o em 2021"
							/>
						</S.YearImg>
					</div>
				</div>
			</S.Content>
		</S.Container>
	);
};

export default AwardsCarousel;
