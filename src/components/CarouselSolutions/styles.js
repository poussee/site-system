import styled from 'styled-components';

export const Container = styled.section`
	width: 100%;
	margin: 50px auto 0 auto;
	padding-bottom: 50px;

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
	@media screen and (max-width: 900px) {
		padding: 0;
		margin-top: 0;
	}
`;

export const CarouselMenu = styled.div`
	display: flex;
	gap: 10px;
	justify-content: center;
	align-items: center;
	width: 95%;
	max-width: 980px;
	margin: 0 auto;

	.divisor {
		width: 30px;
		height: 1px;
		background-color: black;
	}

	.activeOption {
		color: #cb2378;
		text-decoration: underline;
	}

	@media (max-width: 560px) {
		font-size: 10px;
		white-space: nowrap;
	}

	@media (min-width: 561px) and (max-width: 768px) {
		font-size: 14px;
		white-space: nowrap;
	}
`;

export const CarouselContainer = styled.div`
	padding: 50px 0;
	margin: 0 auto;
	width: 95%;
	max-width: 980px;

	.slick-prev {
		display: flex !important;
		width: 30px;
		height: 50px;
		background: url('/assets/Seta_Solucoes-inteligentes.png');
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
		width: 30px;
		height: 50px;
		background: url('/assets/Seta-02-Solucoes-inteligentes.png');
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
`;

export const ItemContainer = styled.div`
	display: flex !important;
	align-items: flex-start;
	width: 90% !important;
	margin: 0 auto;
	min-height: 210px;
	padding: 20px 10px;
	gap: 10px;
	color: white;
	background: url(/assets/BG_Entre-em-contato_Preto.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-position: center;
	border-radius: 15px;

	& > div {
		width: fit-content;
	}

	.icon {
		display: flex;
		max-width: 50px;
		width: 100%;
		height: 100%;
		max-height: 50px;
	}

	.card-content {
		display: flex;
		flex-direction: column;
		gap: 15px;
		width: 70%;
		& > div {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			width: 100%;

			.traco-holder {
				width: 30%;
				display: flex;
				height: 10px;
			}
		}

		.yellowButton {
			text-align: center;
			width: fit-content;
			padding: 8px 20px;
			border-radius: 10px;
			color: white;
			font-size: 14px;
			border: 1px solid #f8c304;
			background-color: #f8c304;
		}

		.pinkButton {
			text-align: center;
			width: fit-content;
			padding: 8px 20px;
			border-radius: 10px;
			color: white;
			font-size: 14px;
			border: 1px solid #cb2378;
			background-color: #cb2378;
		}

		.blueButton {
			text-align: center;
			width: fit-content;
			padding: 8px 20px;
			border-radius: 10px;
			color: white;
			font-size: 14px;
			border: 1px solid #0182b0;
			background-color: #0182b0;
		}

		.purpleButton {
			text-align: center;
			width: fit-content;
			padding: 8px 20px;
			border-radius: 10px;
			color: white;
			font-size: 14px;
			border: 1px solid #6c117b;
			background-color: #6c117b;
		}
	}

	p {
		font-size: 14px;
		min-height: 102px;
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

	@media (max-width: 850px) {
		width: 70% !important;
	}

	@media (max-width: 500px) {
		width: 100% !important;
	}
`;

export const Img = styled.img`
	max-width: 300px;
	max-height: 150px;
	object-fit: contain;
	margin: 0 5px;
`;
