import styled from 'styled-components';

export const Container = styled.section`
	width: 100%;
	margin: 0 auto;

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

export const CarouselContainer = styled.div`
	margin: 0 auto;
	width: 100%;
	max-width: 500px;

	.slick-prev {
		display: flex !important;
		width: 25px;
		height: 25px;
		top: 35%;
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
		width: 25px;
		height: 25px;
		top: 35%;
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

	.slick-dots {
		display: none !important;
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

	.text-baloon {
		background: url(/assets/vendas/Depoimento/Balao_Depoimento.png);
		background-size: 100% 100%;
		padding: 20px 20px 40px 20px;

		p {
			color: white;
			text-align: center;
			font-size: 14px;
		}
	}

	.author {
		display: flex;
		gap: 10px;
		margin-left: auto;
		margin-right: 18px;

		.author-information {
			display: flex;
			flex-direction: column;
			justify-content: center;
			color: black;
			font-size: 12px;
			text-align: right;

			.author-name {
				font-size: 14px;
				font-weight: bold;
			}
		}

		.author-photo {
			width: 80px;
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
`;
