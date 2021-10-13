import styled from 'styled-components';

export const Container = styled.section`
	width: 100%;
	margin: 0 auto;

	@media screen and (max-width: 900px) {
		padding: 0;
		margin-top: 0;
	}
`;

export const Content = styled.div`
	width: 85%;
	max-width: 980px;
	margin: 0 auto;
	padding: 80px 0;

	.title {
		display: flex;
		align-items: top;
		width: 90%;
		margin: 0 auto;
		margin-bottom: 40px;

		> h2 {
			font-size: 25px;
			text-transform: uppercase;
			color: #cb2378;
			position: relative;
			text-align: center;
		}

		.divisor {
			width: 60px;
			max-width: 60px;
			margin: 15px 0 0 5%;
			height: 2px;
			background-color: #cb2378;
		}
	}

	.button-handler {
		margin-top: 20px;

		.button {
			display: block;
			padding: 10px;
			margin: 0 auto;

			color: white;
			border: 1px solid #0182b0;
			border-radius: 10px;
			background-color: #0182b0;
		}
	}
`;

export const CarouselContainer = styled.div`
	margin: 0 auto;
	width: 85%;

	.slick-prev {
		display: flex !important;
		width: 25px;
		height: 25px;
		top: 35%;
		background: url('/assets/seta_01.png');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
	.slick-prev:before {
		content: '';
		background: none;
		color: #0182b0;
		box-shadow: none;
		font-size: 40px;
		font-weight: bolder;
		&:hover,
		&:focus {
			background: none;
			color: #0182b0;
			box-shadow: none;
		}
	}

	.slick-next {
		display: flex !important;
		width: 25px;
		height: 25px;
		top: 35%;
		background: url('/assets/seta_02.png');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
	.slick-next:before {
		content: '';
		max-width: 50px;
		max-height: 50px;
		background: none;
		color: #0182b0;
		box-shadow: none;
		font-size: 40px;
		font-weight: bolder;
		&:hover,
		&:focus {
			background: none;
			color: #0182b0;
			box-shadow: none;
		}
	}
	.slick-next img {
		width: 100%;
	}
	.slider-container {
		width: 100%;
		height: 100%;
		position: fixed; /* add this code for position fixed */
		top: 0px; /* set top and left 0 */
		left: 0px;
	}

	.slick-dots {
		display: none !important;
	}

	@media (max-width: 768px) {
		margin-bottom: 50px;

		.slick-prev,
		.slick-next {
			display: none !important;
		}

		.slick-dots {
			display: block !important;
			bottom: -25px;

			button::before {
				color: #0182b0 !important;
			}
		}
	}
`;

export const ItemContainer = styled.div`
	display: block !important;
	width: 90% !important;
	margin: 0 auto;
	min-height: 210px;

	& > div {
		width: fit-content;
	}

	.item-row {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;

		.item-column {
			display: flex;
			flex-direction: column;
			width: 100%;
			gap: 20px;

			.item-data {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100%;
				gap: 20px;

				.image-handler {
					width: 100%;
					max-width: 96px;
				}

				p {
					width: 100%;
					max-width: 180px;
				}
			}
		}
	}

	@media (max-width: 900px) {
		.card-content {
			& > div {
				height: 68px;
			}
		}
	}

	@media (min-width: 768px) {
		width: 90% !important;
	}
`;
