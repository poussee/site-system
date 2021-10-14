import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

import Image from 'next/dist/client/image';

import * as S from './styles';

export default class CarouselCustomerComments extends Component {
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
			slidesToShow: 1,
			autoplay: true,
			speed: 500,
			initialSlide: 1,
			afterChange: () =>
				this.setState((state) => ({ updateCount: state.updateCount + 1 })),
			beforeChange: (current, next) => this.setState({ slideIndex: next }),
		};
		return (
			<S.Container>
				<S.CarouselContainer>
					<Slider ref={(slider) => (this.slider = slider)} {...settings}>
						<S.ItemContainer>
							<div className="text-baloon">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
									lobortis, felis ultrices varius suscipit, tortor lorem euismod
									neque, at sollicitudin ligula est sed lectus. In id lacinia
									purus. Integer euismod auctor dui vestibulum gravida. Maecenas
									sit amet tellus ut turpis feugiat laoreet id eu nulla. Nunc
									dignissim vestibulum purus sit. Lorem ipsum dolor sit amet,
									consectetur adipiscing elit. Ut lobortis, felis ultrices
									varius suscipit, tortor lorem euismod neque, at sollicitudin
									ligula est sed lectus. In id lacinia
								</p>
							</div>
							<div className="author">
								<div className="author-information">
									<span className="author-name">{this.props.authorName}</span>
									<span>{this.props.authorJob}</span>
									<span>{this.props.authorEnterprise}</span>
								</div>
								<div className="author-photo">
									<Image
										src={this.props.authorFoto}
										alt="Foto do author do comentário"
										quality={100}
									/>
								</div>
							</div>
						</S.ItemContainer>
						<S.ItemContainer>
							<div className="text-baloon">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
									lobortis, felis ultrices varius suscipit, tortor lorem euismod
									neque, at sollicitudin ligula est sed lectus. In id lacinia
									purus. Integer euismod auctor dui vestibulum gravida. Maecenas
									sit amet tellus ut turpis feugiat laoreet id eu nulla. Nunc
									dignissim vestibulum purus sit. Lorem ipsum dolor sit amet,
									consectetur adipiscing elit. Ut lobortis, felis ultrices
									varius suscipit, tortor lorem euismod neque, at sollicitudin
									ligula est sed lectus. In id lacinia
								</p>
							</div>
							<div className="author">
								<div className="author-information">
									<span className="author-name">{this.props.authorName}</span>
									<span>{this.props.authorJob}</span>
									<span>{this.props.authorEnterprise}</span>
								</div>
								<div className="author-photo">
									<Image
										src={this.props.authorFoto}
										alt="Foto do author do comentário"
										quality={100}
									/>
								</div>
							</div>
						</S.ItemContainer>
						<S.ItemContainer>
							<div className="text-baloon">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
									lobortis, felis ultrices varius suscipit, tortor lorem euismod
									neque, at sollicitudin ligula est sed lectus. In id lacinia
									purus. Integer euismod auctor dui vestibulum gravida. Maecenas
									sit amet tellus ut turpis feugiat laoreet id eu nulla. Nunc
									dignissim vestibulum purus sit. Lorem ipsum dolor sit amet,
									consectetur adipiscing elit. Ut lobortis, felis ultrices
									varius suscipit, tortor lorem euismod neque, at sollicitudin
									ligula est sed lectus. In id lacinia
								</p>
							</div>
							<div className="author">
								<div className="author-information">
									<span className="author-name">{this.props.authorName}</span>
									<span>{this.props.authorJob}</span>
									<span>{this.props.authorEnterprise}</span>
								</div>
								<div className="author-photo">
									<Image
										src={this.props.authorFoto}
										alt="Foto do author do comentário"
										quality={100}
									/>
								</div>
							</div>
						</S.ItemContainer>
					</Slider>
				</S.CarouselContainer>
			</S.Container>
		);
	}
}
