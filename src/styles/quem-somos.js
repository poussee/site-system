import styled from 'styled-components';

export const ContainerAboutUs = styled.div`
	width: 100%;
	min-height: 60vh;
	background-image: url(./assets/quem-somos/BG_solucoes_acompanhe.png);
	background-size: cover;
	background-repeat: no-repeat;

	.white-text {
		color: white;
	}

	.pink-text {
		color: #c72376;
	}
`;

export const ContentAboutUs = styled.div`
	width: 85%;
	max-width: 968px;
	margin: 0 auto;
	padding: 80px 0;

	.about-us-content {
		margin: 0 auto 80px auto;
		width: 95%;
		max-width: 800px;
		padding: 50px;
		background-color: white;
		border-radius: 15px;

		h3 {
			margin-top: 15px;
		}

		p {
			margin: 20px 0;
		}
	}

	.about-us-carousel-content {
		text-align: center;
	}

	.rec-arrow[disabled] {
		opacity: 0;
		pointer-events: none;
	}

	.pink-trace {
		width: 50%;
		max-width: 300px;
		margin-top: 5px;
		height: 2px;
		background-color: #cb2077;
	}
`;

export const Container = styled.div`
	width: 100%;
`;

export const AwardsContent = styled.div`
	width: 85%;
	max-width: 968px;
	margin: 0 auto;
	padding: 80px 0;

	.row-wrapper {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;

		width: 100%;
		gap: 20px;

		& > div {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
		}

		.text-wrapper {
			width: fit-content;

			.awards-title {
				display: flex;
				align-items: center;

				h2 {
					color: #c72376;
					white-space: nowrap;
				}

				.awards-divisor {
					width: 60px;
					max-width: 60px;
					margin: 0 0 0 5%;
					height: 2px;
					background-color: #c72376;
				}
			}

			p {
				font-weight: bold;
				font-size: 20px;
				max-width: 290px;
			}
		}

		.carousel-wrapper {
			width: 100%;
		}
	}

	@media (max-width: 768px) {
		.row-wrapper {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.text-wrapper {
				p {
					font-weight: bold;
					font-size: 20px;
					max-width: initial;
				}
			}
		}

		.carousel-wrapper {
			width: fit-content;
		}
	}
`;

export const ContainerSocial = styled.div`
	width: 100%;

	& > div {
		width: 85%;
		max-width: 980px;
		margin: 0 auto;
		position: relative;
	}

	.flex-title {
		display: flex;
		align-items: center;
	}

	.white-divisor {
		width: 100%;
		max-width: 100px;
		height: 2px;
		margin-left: 3%;

		background-color: white;
	}

	.pink-divisor {
		width: 100%;
		max-width: 100px;
		height: 2px;
		margin-left: 3%;

		background-color: #c72376;
	}

	.joinUs-image-container {
		position:relative
		width: 85%;
		max-width: 980px;
		margin: 0 auto;


		.joinUs-image-content {
			position: absolute;
			width: 50%;
			max-width: 500px;
			top: 50%;
			transform: translateY(-50%);
			right: 0;
		}
	}

	.join-us-container {
		padding: 80px 0;

		background-image: url(./assets/quem-somos/BG_solucoes.png);
		background-size: cover;
		background-repeat: no-repeat;


		.button-holder {
			margin-top: 30px;

			color:black;
			a{
				cursor:pointer;
			}
		}

		.join-us-content {
			width: 85%;
			max-width: 980px;
			margin: 0 auto;

			.join-us-limiter {
				max-width: 400px;

				color: white;

				p {
					margin: 10px 0;
				}
			}
		}
	}

	.social-responsibility-container {
		padding: 80px 0;

		background-image: url(./assets/quem-somos/BG_branco_solucoes.png);
		background-size: cover;
		background-repeat: no-repeat;

		.social-responsibility-content {
			width: 85%;
			max-width: 980px;
			margin: 0 auto;

			.social-responsibility-limiter {
				max-width: 500px;

				h2 {
					color: #c72376;
				}

				p {
					margin: 10px 0;
					max-width: 70%;

					font-weight: bold;
				}
			}
		}
	}

	@media(max-width:768px){
		.joinUs-image-container{
			display:none;
		}

		.social-responsibility-limiter{
			h2{
				text-align:center;
			}
		}

	}

	@media(max-width:500px){
		.social-responsibility-limiter{
			margin:0 auto;

			.flex-title{
				justify-content:center;
			}

			p{
				max-width:initial!important;
				text-align:center;
			}
		}

		.pink-divisor{
			display:none;
		}
	}
`;

export const SocialAction = styled.section`
	display: flex;
	justify-content: space-between;

	width: 85%;
	max-width: 768px;
	margin: 0 auto;
	padding-bottom: 80px;

	.social-card {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;

		width: 25%;
		gap: 10px;

		text-align: center;

		.social-image-holder {
			max-width: 100px;
			margin: 0 auto;
		}
	}

	.amamos h3 {
		color: #0081af;
	}

	.bussocaba h3 {
		color: #6c107b;
	}

	.salvacao h3 {
		color: #cb2077;
	}

	@media (max-width: 768px) {
		.social-card {
			width: 85%;
		}
	}

	@media (max-width: 510px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 80px;
	}
`;

export const ContainerVirtualTour = styled.div`
	width: 100%;
	background-image: url(./assets/quem-somos/BG_tour_virtual.png);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: right;

	img {
		cursor: pointer;
	}
`;
