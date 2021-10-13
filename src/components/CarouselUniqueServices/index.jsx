import React, { Component } from 'react';
import Slider from 'react-slick';
import LinkButton from '../LinkButton';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

import Image from 'next/dist/client/image';

import FotoDepoimento from '../../../public/assets/cobranca/Foto_Depoimento.png';

import * as S from './styles';

export default class CarouselUniqueServices extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const settings = {
			className: 'center',
			centerMode: true,
			infinite: true,
			dots: true,
			centerPadding: 0,
			slidesToShow: 2,
			slidesToScroll: 2,
			speed: 500,
			initialSlide: 1,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
			afterChange: () =>
				this.setState((state) => ({ updateCount: state.updateCount + 1 })),
			beforeChange: (current, next) => this.setState({ slideIndex: next }),
		};
		return (
			<S.Container>
				<S.Content>
					<div className="title">
						<h2>NOSSOS DIFERENCIAIS</h2>
						<div className="divisor"></div>
					</div>
					<S.CarouselContainer>
						<Slider ref={(slider) => (this.slider = slider)} {...settings}>
							<S.ItemContainer>
								<div className="item-row">
									<div className="item-column">
										<div className="item-data">
											<div className="image-handler">
												<Image
													src={this.props.firstImage}
													alt="Icone Sac"
													quality={100}
												/>
											</div>
											<p>{this.props.firstDescription}</p>
										</div>
										<div className="item-data">
											<div className="image-handler">
												<Image
													src={this.props.thirdImage}
													alt="Icone Sac"
													quality={100}
												/>
											</div>
											<p>{this.props.thirdDescription}</p>
										</div>
									</div>
								</div>
							</S.ItemContainer>
							<S.ItemContainer>
								<div className="item-row">
									<div className="item-column">
										<div className="item-data">
											<div className="image-handler">
												<Image
													src={this.props.secondImage}
													alt="Icone Sac"
													quality={100}
												/>
											</div>
											<p>{this.props.secondDescription}</p>
										</div>

										<div className="item-data">
											<div className="image-handler">
												<Image
													src={this.props.fourthImage}
													alt="Icone Sac"
													quality={100}
												/>
											</div>
											<p>{this.props.fourthDescription}</p>
										</div>
									</div>
								</div>
							</S.ItemContainer>
							<S.ItemContainer>
								<div className="item-row">
									<div className="item-column">
										<div className="item-data">
											<div className="image-handler">
												<Image
													src={this.props.fifthImage}
													alt="Icone Sac"
													quality={100}
												/>
											</div>
											<p>{this.props.fifthDescription}</p>
										</div>
										<div className="item-data">
											<div className="image-handler">
												<Image
													src={this.props.seventhImage}
													alt="Icone Sac"
													quality={100}
												/>
											</div>
											<p>{this.props.seventhDescription}</p>
										</div>
									</div>
								</div>
							</S.ItemContainer>
							<S.ItemContainer>
								<div className="item-row">
									<div className="item-column">
										<div className="item-data">
											<div className="image-handler">
												<Image
													src={this.props.sixthImage}
													alt="Icone Sac"
													quality={100}
												/>
											</div>
											<p>{this.props.sixthDescription}</p>
										</div>

										<div className="item-data">
											{this.props.eighthImage ? (
												<>
													<div className="image-handler">
														<Image
															src={this.props.eighthImage}
															alt="Icone Sac"
															quality={100}
														/>
													</div>
													<p>{this.props.eighthDescription}</p>
												</>
											) : (
												''
											)}
										</div>
									</div>
								</div>
							</S.ItemContainer>
						</Slider>
					</S.CarouselContainer>
					<div className="button-handler">
						<LinkButton link="#" className="button">
							Quero uma proposta
						</LinkButton>
					</div>
				</S.Content>
			</S.Container>
		);
	}
}
