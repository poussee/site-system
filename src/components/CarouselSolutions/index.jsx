import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

import Image from 'next/dist/client/image';

import iconeSac from '../../../public/assets/icone_sac.png';
import tracoSac from '../../../public/assets/traco_sac.png';

import iconeCobranca from '../../../public/assets/icone_cobranca.png';
import tracoCobranca from '../../../public/assets/traco_cobranca.png';

import iconeVendas from '../../../public/assets/icone_vendas.png';
import tracoVendas from '../../../public/assets/traco_vendas.png';

import iconeMaisOpcoes from '../../../public/assets/icone_mais-opcoes.png';
import tracoMaisOpcoes from '../../../public/assets/traco_mais-opcoes.png';

import Link from 'next/link';

import * as S from './styles';

export default class CarouselSolutions extends Component {
	state = {
		slideIndex: 1,
		updateCount: 0,
	};

	currentSlide(e) {
		console.log(e);
	}

	changeSlide(e) {
		const menu = document
			.querySelector('.carouselMenu')
			.querySelectorAll('span');

		const sliderIntern = this.slider;

		// const menuOptions = {
		// 	sac: function () {
		// 		sliderIntern.slickGoTo(0);
		// 	},
		// 	cobranca: () => {
		// 		sliderIntern.slickGoTo(1);
		// 	},
		// 	vendas: function () {
		// 		sliderIntern.slickGoTo(2);
		// 	},
		// 	mais: function () {
		// 		sliderIntern.slickGoTo(3);
		// 	},
		// };

		// menu.forEach((item) => {
		// 	if (item.classList[0] === e.target.classList[0]) {
		// 		menuOptions[e.target.classList[0]]();
		// 	} else {
		// 	}
		// });
	}

	render() {
		const settings = {
			className: 'center',
			centerMode: true,
			infinite: true,
			dots: true,
			centerPadding: 0,
			slidesToShow: 3,
			speed: 500,
			initialSlide: 1,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 850,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						initialSlide: 1,
					},
				},
			],
			afterChange: () =>
				this.setState((state) => ({ updateCount: state.updateCount + 1 })),
			beforeChange: (current, next) => this.setState({ slideIndex: next }),
		};
		return (
			<S.Container>
				{/* <S.CarouselMenu className="carouselMenu">
					<span
						className={`sac ${
							this.state.slideIndex === 0 ? 'activeOption' : ''
						}`}
						onClick={(e) => this.changeSlide(e)}
					>
						SAC
					</span>
					<span className="divisor"></span>
					<span
						className={`${'cobranca'} ${
							this.state.slideIndex === 1 ? 'activeOption' : ''
						}`}
						onClick={(e) => this.changeSlide(e)}
					>
						COBRANÇA
					</span>
					<span className="divisor"></span>
					<span
						className={`vendas ${
							this.state.slideIndex === 2 ? 'activeOption' : ''
						}`}
						onClick={(e) => this.changeSlide(e)}
					>
						VENDAS
					</span>
					<span className="divisor"></span>
					<span
						className={`mais ${
							this.state.slideIndex === 3 ? 'activeOption' : ''
						}`}
						onClick={(e) => this.changeSlide(e)}
					>
						MAIS OPÇÕES
					</span>
				</S.CarouselMenu> */}
				<S.CarouselContainer>
					<Slider ref={(slider) => (this.slider = slider)} {...settings}>
						<S.ItemContainer>
							<div className="icon">
								<Image src={iconeSac} alt="Icone Sac" quality={100} />
							</div>
							<div className="card-content">
								<div>
									<h2>SAC</h2>
									<div className="traco-holder">
										<Image src={tracoSac} alt="Icone Sac" quality={100} />
									</div>
								</div>
								<p>
									Gerenciamento da resolução de problemas e reclamações em
									múltiplos canais de atendimento.
								</p>
								<Link href="/sac">
									<a className="blueButton">Saiba mais</a>
								</Link>
							</div>
						</S.ItemContainer>
						<S.ItemContainer>
							<div className="icon">
								<Image src={iconeCobranca} alt="Icone Sac" quality={100} />
							</div>
							<div className="card-content">
								<div>
									<h2>Cobrança</h2>
									<div className="traco-holder">
										<Image src={tracoCobranca} alt="Icone Sac" quality={100} />
									</div>
								</div>
								<p>
									Abordagens com eficiência comprovada para todas as etapas da
									recuperação de crédito.
								</p>
								<Link href="/cobranca">
									<a className="pinkButton">Saiba mais</a>
								</Link>
							</div>
						</S.ItemContainer>
						<S.ItemContainer>
							<div className="icon">
								<Image src={iconeVendas} alt="Icone Sac" quality={100} />
							</div>
							<div className="card-content">
								<div>
									<h2>Vendas</h2>
									<div className="traco-holder">
										<Image src={tracoVendas} alt="Icone Sac" quality={100} />
									</div>
								</div>
								<p>
									Desenvolvimento de estratégias que otimizam e potencializam a
									geração de novos negócios.
								</p>
								<Link href="/vendas">
									<a className="yellowButton">Saiba mais</a>
								</Link>
							</div>
						</S.ItemContainer>
						<S.ItemContainer>
							<div className="icon">
								<Image src={iconeMaisOpcoes} alt="Icone Sac" quality={100} />
							</div>
							<div className="card-content">
								<div>
									<h2>Mais opções</h2>
									<div className="traco-holder">
										<Image
											src={tracoMaisOpcoes}
											alt="Icone Sac"
											quality={100}
										/>
									</div>
								</div>
								<p>
									Uma ampla gama de produtos e serviços para transformar seus
									contatos em oportunidades.
								</p>
								<Link href="/mais-opcoes">
									<a className="purpleButton">Saiba mais</a>
								</Link>
							</div>
						</S.ItemContainer>
					</Slider>
				</S.CarouselContainer>
			</S.Container>
		);
	}
}
