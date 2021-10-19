import styled from 'styled-components';

export const MainContainer = styled.div`
	width: 100%;

	h2,
	h3,
	h4,
	p {
		margin: 0;
	}

	.whiteText {
		color: white;
	}

	.text-400 {
		max-width: 400px;
	}

	.text-550 {
		max-width: 550px;
	}
`;

export const Container = styled.div`
	width: 100%;
`;

export const ColumnContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;
	width: 85%;
	max-width: 980px;
	height: 100%;
	gap: 20px;
	margin: 0 auto;
	justify-content: center;
	z-index: 400;
	padding: 10px 0;
	position: relative;

	.intelligent-solutions {
		padding-top: 50px;

		.intelligent-solutions-wrapper {
			display: flex;
			align-items: center;
			gap: 20px;
			margin-bottom: 20px;

			h2 {
				color: #cb2378;
				font-weight: 400;
			}

			& > div {
				width: 50%;
				margin-top: 5px;
				max-width: 250px;
				background-color: #cb2378;
				height: 2px;
			}
		}

		.solutions-text {
			font-weight: bold;
			font-size: 22px;
		}
	}
`;

export const RowContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 85%;
	max-width: 980px;
	margin: 0 auto;
	justify-content: space-between;
	z-index: 400;
	padding: 10px 0;
	position: relative;
`;

export const BannerContainer = styled.div`
	width: 100%;
	height: 60vh;
	background-image: url(./assets/banners/banner-home.png);
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;

export const RelationsContainer = styled.div`
	width: 100%;
	padding: 30px 0;
	background-image: url(./assets/BG_Especialistas-em-relações-humanas.png);
	background-size: cover;
	background-repeat: no-repeat;

	.relations-content {
		width: 85%;
		max-width: 980px;
		margin: 0 auto;
		z-index: 400;
		padding: 10px 0;
		position: relative;

		h2 {
			margin-bottom: -5%;
			padding-top: 10px;
			width: fit-content;
			font-weight: 400;
		}
	}

	.relations-content > .relations-wrapper {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
	}

	.relations-content > .relations-wrapper > div:nth-child(1) {
		display: flex;
		flex-direction: column;
		width: 40%;
		min-width: 400px;
		padding-top: 6%;
		height: fit-content;
		gap: 20px;
	}

	.relations-content > .relations-wrapper > div:nth-child(2) {
		width: 50%;
		min-width: 460px;
		height: fit-content;
	}

	.relations-content > .relations-wrapper .relations-img-holder {
		width: 100%;
		max-width: 500px;
	}

	@media screen and (max-width: 900px) {
		.relations-content {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.relations-content > .relations-wrapper {
			justify-content: center;
		}

		.relations-content > .relations-wrapper > div:nth-child(1) {
			min-width: 467px;
			padding-top: 6%;
		}
	}

	@media screen and (max-width: 768px) {
		.relations-content > .relations-wrapper > div:nth-child(1) {
			min-width: auto;
			width: 100%;
			padding-top: 6%;
		}

		.relations-content > .relations-wrapper > div:nth-child(2) {
			display: flex;
			justify-content: center;
			width: 100%;
			min-width: auto;
		}
	}
`;

export const formContent = styled.div`
	display: flex;
	justify-content: space-between !important;
	align-items: center;
	max-width: 980px;
	min-height: 650px;
	margin: 0 auto 150px auto;
	justify-content: center;
	z-index: 400;
	padding: 25px 0;
	position: relative;
	background-image: url(./assets/BG_Entre-em-contato_Preto.png);
	background-size: 90% 100%;
	background-position: right;
	background-repeat: no-repeat;

	.form-image {
		width: 45%;
	}

	.form-content {
		width: 50%;
		padding: 0 20px;
		margin-right: 3%;

		& > section {
			width: 100%;
		}
	}

	@media screen and (max-width: 900px) {
		justify-content: center !important;
		width: 85%;
		padding: 20px;
		background-position: right;
		background-size: 90% 100%;
		background-repeat: no-repeat;

		.form-content {
			width: 50%;
			margin-right: 3%;
		}
	}

	@media screen and (max-width: 768px) {
		background-position: center;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		align-items: center;
		justify-content: center;

		.form-content {
			width: 90%;
			padding: 20px 0;
		}

		.form-image {
			display: none !important;
		}

		.home-form-button-container {
			justify-content: center !important;
		}
	}
`;
