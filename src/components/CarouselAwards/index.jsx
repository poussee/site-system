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
			<S.CarouselContainer>
				<CarouselItem
					breakPoints={breakPoints}
					ref={carouselRef}
					onPrevStart={onPrevStart}
					onNextStart={onNextStart}
					disableArrowsOnEnd={false}
				>
					<S.ItemContainer>
						<p>2021</p>
						<div>
							<S.ImgContainer>
								<Image
									layout="responsive"
									quality={100}
									src={award1}
									alt="Troféu de premiação em 2021"
								/>
							</S.ImgContainer>
							<div className="award-text">
								<p>Programa de Recuperação de Créditos Vencidos – PRCV</p>
								<p>Instituição financeira</p>
							</div>
						</div>
					</S.ItemContainer>
					<S.ItemContainer>
						<p>2016</p>
						<div>
							<S.ImgContainer>
								<Image
									layout="responsive"
									quality={100}
									src={award2}
									alt="Troféu de premiação em 2016"
								/>
							</S.ImgContainer>
							<div className="award-text">
								<p>Programa de Recuperação de Créditos Vencidos – PRCV</p>
								<p>Instituição financeira</p>
							</div>
						</div>
					</S.ItemContainer>
					<S.ItemContainer>
						<p>2016</p>
						<div>
							<S.ImgContainer>
								<Image
									layout="responsive"
									quality={100}
									src={award3}
									alt="Troféu de premiação em 2016"
								/>
							</S.ImgContainer>
							<div className="award-text">
								<p>
									Inovação Tecnológica: Solução Digital para Recuperação de
									Crédito “Portal Pacto”
								</p>
								<p>Prêmio ABT: Ouro</p>
							</div>
						</div>
					</S.ItemContainer>
					<S.ItemContainer>
						<p>2015</p>
						<div>
							<S.ImgContainer>
								<Image
									layout="responsive"
									quality={100}
									src={award4}
									alt="Troféu de premiação em 2015"
								/>
							</S.ImgContainer>
							<p>Melhor Empresa de Hardcore Telecomunicações</p>
						</div>
					</S.ItemContainer>
					<S.ItemContainer>
						<p>2013</p>
						<div>
							<S.ImgContainer>
								<Image
									layout="responsive"
									quality={100}
									src={award5}
									alt="Troféu de premiação em 2013"
								/>
							</S.ImgContainer>
							<div className="award-text">
								<p>Programa de Recuperação de Créditos – PRC</p>
								<p>Instituição financeira</p>
							</div>
						</div>
					</S.ItemContainer>
					<S.ItemContainer>
						<p>2012</p>
						<div>
							<S.ImgContainer>
								<Image
									layout="responsive"
									quality={100}
									src={award6}
									alt="Troféu de premiação em 2012"
								/>
							</S.ImgContainer>
							<div className="award-text">
								<p>Recuperação: Quebra de Acordos Carteira Banco</p>
								<p>Instituição financeira</p>
							</div>
						</div>
					</S.ItemContainer>
					<S.ItemContainer>
						<p>2009</p>
						<div>
							<S.ImgContainer>
								<Image
									layout="responsive"
									quality={100}
									src={award7}
									alt="Troféu de premiação em 2009"
								/>
							</S.ImgContainer>
							<div className="award-text">
								<p>Campanha Motivacional: Copa do Mundo Solidária</p>
								<p>Prêmio ABT: Prata</p>
							</div>
						</div>
					</S.ItemContainer>
					<S.ItemContainer>
						<p>2008</p>
						<div>
							<S.ImgContainer>
								<Image
									layout="responsive"
									quality={100}
									src={award8}
									alt="Troféu de premiação em 2008"
								/>
							</S.ImgContainer>
							<div className="award-text">
								<p>Melhor Empresa de Cobrança – Foco na PDD</p>
								<p>Instituição financeira</p>
							</div>
						</div>
					</S.ItemContainer>
					<S.ItemContainer>
						<p>2008</p>
						<div>
							<S.ImgContainer>
								<Image
									layout="responsive"
									quality={100}
									src={award9}
									alt="Troféu de premiação em 2008"
								/>
							</S.ImgContainer>
							<div className="award-text">
								<p>
									Empresa Revelação: A Fábrica de Marketing de Relacionamento
								</p>
								<p>Prêmio ABT: Prata</p>
							</div>
						</div>
					</S.ItemContainer>
				</CarouselItem>
			</S.CarouselContainer>
		</S.Container>
	);
};

export default AwardsCarousel;
