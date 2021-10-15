import styled from 'styled-components';

export const Container = styled.section`
	display: none;
	width: 100%;
	margin: 0 auto;
	background: #5c5c5c;
	padding: 80px 0;

	> h2 {
		font-size: 25px;
		text-transform: uppercase;
		color: #cb2378;
		position: relative;
		text-align: center;
	}
	> h4 {
		font-weight: 500;
		font-size: 20px;
		margin-top: 10px;
		display: block;
		font-size: 20px;
		text-align: center;
		margin-bottom: 20px;
		padding: 0 50px;
	}

	@media (max-width: 768px) {
		padding: 20px 0 120px;
		display: block;
	}

	@media (max-width: 520px) {
		padding: 20px;
	}
`;

export const CarouselContainer = styled.div`
	margin: 0 auto;
	width: 85%;
	max-width: 980px;

	.slick-prev {
		display: flex !important;
		width: 25px;
		height: 30px;
		top: 50%;
		background: url('/assets/seta_branca_01.png');
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
		height: 30px;
		top: 50%;
		background: url('/assets/seta_branca_02.png');
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
		color: white;

		li {
			margin: 0 15px;
		}

		.ft-slick__dots--custom {
			display: flex;
			gap: 5px;
		}

		.arrow {
			display: none;
			margin: 0 5px;
		}

		.slick-active {
			.arrow {
				display: block;
			}
		}

		li:last-child .arrow {
			display: none;
		}
	}

	@media (max-width: 768px) {
		.slick-prev,
		.slick-next {
			display: none !important;
		}

		.slick-dots {
			display: block !important;
			bottom: -50px;
		}
	}

	@media (max-width: 520px) {
		.slick-dots {
			display: none !important;
		}
	}
`;

export const ItemContainer = styled.div`
	display: block !important;
	width: 90% !important;
	margin: 0 auto;
	min-height: 210px;
	gap: 10px;

	& > div {
		width: fit-content;
	}

	.row:last-child {
		margin-top: 80px;
	}

	.row {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 90%;
		margin: 0 auto;
		gap: 10%;

		.text-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			color: white;
			width: 65%;
			padding-bottom: 25px;

			.title {
				display: flex;
				align-items: top;
				margin-bottom: 10px;

				h3 {
					font-weight: 400;
					font-size: 22px;
					white-space: nowrap;
				}

				.divisor {
					width: 60px;
					max-width: 60px;
					margin: 15px 0 0 5%;
					height: 2px;
					background-color: white;
				}
			}

			p {
				font-weight: bold;
				font-size: 16px;
				margin: 15px 0 50px;
				text-align: center;
			}

			.button {
				padding: 10px 15px;
				border: 1px solid #f8c304;
				border-radius: 10px;
				background: #f8c304;
				color: black;
			}
		}

		.image-handler {
			display: flex;
			align-items: center;

			width: 100%;
			max-width: 25%;
		}
	}

	@media (max-width: 900px) {
		.card-content {
			& > div {
				height: 68px;
			}
		}
	}

	@media (min-width: 769px) {
		width: 90% !important;
	}

	@media (max-width: 768px) {
		width: 90% !important;

		.row {
			flex-direction: column-reverse;
			gap: 30px;

			.text-wrapper {
				width: 100%;
			}

			.image-handler {
				max-width: 40%;
			}
		}
	}
`;
