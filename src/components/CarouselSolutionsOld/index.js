import CarouselItem from 'react-elastic-carousel';

import Link from 'next/link';

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
				<CarouselItem breakPoints={breakPoints} itemPadding={[0, 5]}>
					<S.ItemContainer>
						<div className="icon">
							<img src="./assets/icone_sac.png" />
						</div>
						<div className="card-content">
							<div>
								<h2>SAC</h2>
								<img src="./assets/traco_sac.png" />
							</div>
							<p>
								Gerenciamento da resolução de problemas e reclamações em
								múltiplos canais de atendimento.
							</p>
							<Link href="#">
								<a className="blueButton">Saiba mais</a>
							</Link>
						</div>
					</S.ItemContainer>
					<S.ItemContainer>
						<div className="icon">
							<img src="./assets/icone_cobranca.png" />
						</div>
						<div className="card-content">
							<div>
								<h2>Cobrança</h2>
								<img src="./assets/traco_cobranca.png" />
							</div>
							<p>
								Abordagens com eficiência comprovada para todas as etapas da
								recuperação de crédito.
							</p>
							<Link href="#">
								<a className="pinkButton">Saiba mais</a>
							</Link>
						</div>
					</S.ItemContainer>
					<S.ItemContainer>
						<div className="icon">
							<img src="./assets/icone_vendas.png" />
						</div>
						<div className="card-content">
							<div>
								<h2>Vendas</h2>
								<img src="./assets/traco_vendas.png" />
							</div>
							<p>
								Desenvolvimento de estratégias que otimizam e potencializam a
								geração de novos negócios.
							</p>
							<Link href="#">
								<a className="yellowButton">Saiba mais</a>
							</Link>
						</div>
					</S.ItemContainer>
					<S.ItemContainer>
						<div className="icon">
							<img src="./assets/icone_mais-opcoes.png" />
						</div>
						<div className="card-content">
							<div>
								<h2>Mais opções</h2>
								<img src="./assets/traco_mais-opcoes.png" />
							</div>
							<p>
								Uma ampla gama de produtos e serviços para transformar seus
								contatos em oportunidades.
							</p>
							<Link href="#">
								<a className="purpleButton">Saiba mais</a>
							</Link>
						</div>
					</S.ItemContainer>
				</CarouselItem>
			</S.CarouselContainer>
		</S.Container>
	);
};

export default SolutionsCarousel;
