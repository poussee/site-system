import CarouselItem from 'react-elastic-carousel';
import Image from 'next/dist/client/image';

import item1 from '../../../public/assets/quem-somos/Timeline/timeline/1996.png';
import item2 from '../../../public/assets/quem-somos/Timeline/timeline/2000.png';
import item3 from '../../../public/assets/quem-somos/Timeline/timeline/2005.png';
import item4 from '../../../public/assets/quem-somos/Timeline/timeline/2006.png';
import item5 from '../../../public/assets/quem-somos/Timeline/timeline/2008.png';
import item6 from '../../../public/assets/quem-somos/Timeline/timeline/2011.png';
import item7 from '../../../public/assets/quem-somos/Timeline/timeline/2015.png';
import item8 from '../../../public/assets/quem-somos/Timeline/timeline/2016.png';
import item9 from '../../../public/assets/quem-somos/Timeline/timeline/2020.png';

import * as S from './styles';

const HistoryCarousel = () => {
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 312, itemsToShow: 1, itemsToScroll: 1, pagination: true },
		{ width: 460, itemsToShow: 2, itemsToScroll: 2, pagination: true },
		{ width: 660, itemsToShow: 3, itemsToScroll: 3, pagination: true },
	];

	return (
		<S.Container>
			<S.CarouselContainer>
				<CarouselItem breakPoints={breakPoints}>
					<S.ItemContainer>
						<S.UpperText>
							<p>
								Desenvolvemos o primeiro software nacional para qualificação de
								dados.
							</p>
						</S.UpperText>
						<S.ImgContainer>
							<Image src={item1} alt="Icone Varejo" />
						</S.ImgContainer>
					</S.ItemContainer>

					<S.ItemContainer>
						<S.ImgContainer padding={true}>
							<Image src={item2} alt="Icone Financeiro" />
						</S.ImgContainer>
						<S.BellowText>
							<p>
								Investimos em inteligência da informação/CRM e em nosso próprio
								contact center.
							</p>
						</S.BellowText>
					</S.ItemContainer>

					<S.ItemContainer>
						<S.UpperText>
							<p>
								Nos tornamos pioneiros no uso de ferramentas de automação para
								as áreas de recuperação de crédito e vendas.
							</p>
						</S.UpperText>
						<S.ImgContainer>
							<Image src={item3} alt="Icone TV" />
						</S.ImgContainer>
					</S.ItemContainer>

					<S.ItemContainer>
						<S.ImgContainer padding={true}>
							<Image src={item4} alt="Icone Utilidades" />
						</S.ImgContainer>
						<S.BellowText>
							<p>
								Realizamos nosso primeiro projeto especial, Seleção do Faustão,
								desenhado de acordo com as necessidades da Globo.
							</p>
						</S.BellowText>
					</S.ItemContainer>

					<S.ItemContainer>
						<S.UpperText>
							<p>
								Alcançamos o primeiro lugar no prêmio nacional Hardcore,
								promovido por uma grande instituição financeira.
							</p>
						</S.UpperText>
						<S.ImgContainer>
							<Image src={item5} alt="Icone Farmaceutico" />
						</S.ImgContainer>
					</S.ItemContainer>

					<S.ItemContainer>
						<S.ImgContainer padding={true}>
							<Image src={item6} alt="Icone Comunicação" />
						</S.ImgContainer>
						<S.BellowText>
							<p>
								Transformamos nossa área de negócios em soluções de
								relacionamento com clientes, possibilitando maior foco nos
								mercados de atuação.
							</p>
						</S.BellowText>
					</S.ItemContainer>

					<S.ItemContainer>
						<S.UpperText>
							<p>
								Lançamos o Portal Pacto, canal web de recuperação de crédito.
							</p>
						</S.UpperText>
						<S.ImgContainer>
							<Image src={item7} alt="Icone Alimenticios" />
						</S.ImgContainer>
					</S.ItemContainer>

					<S.ItemContainer>
						<S.ImgContainer padding={true}>
							<Image src={item8} alt="Icone Entretenimento" />
						</S.ImgContainer>
						<S.BellowText>
							<p>
								Investimos na automação de contatos virtuais e soluções
								integradas de gestão de carteiras.
							</p>
						</S.BellowText>
					</S.ItemContainer>

					<S.ItemContainer>
						<S.UpperText>
							<p>
								Nos reinventamos. Transformamos a nossa marca e fortalecemos o
								nosso negócio ao iniciar uma parceria com o Grupo Sercom.
							</p>
						</S.UpperText>
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
