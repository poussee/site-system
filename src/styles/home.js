import styled from 'styled-components';

export const MainContainer = styled.div`
	width: 100%;

	h2,
	h3,
	h4,
	p {
		margin: 0;
	}

	.yellowButton {
		padding: 10px 20px;
		background: #f8c304;
		width: fit-content;
		border-radius: 10px;
	}

	.whiteText {
		color: white;
	}
`;

export const Container = styled.div`
	width: 100%;
`;

export const ColumnContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;
	max-width: 980px;
	height: 100%;
	gap: 20px;
	margin: 0 auto;
	justify-content: center;
	z-index: 400;
	padding: 10px 0;
	position: relative;

	@media screen and (max-width: 900px) {
		padding: 0 20px;
	}

	.inteligent-solutions {
		padding-top: 50px;

		.inteligent-solutions-wrapper {
			display: flex;
			align-items: center;
			gap: 10px;

			h2 {
				color: #cb2378;
			}

			& > div {
				width: 50%;
				margin-top: 5px;
				max-width: 200px;
				background-color: #cb2378;
				height: 2px;
			}
		}
	}
`;

export const RowContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 980px;
	margin: 0 auto;
	justify-content: space-between;
	z-index: 400;
	padding: 10px 0;
	position: relative;

	@media screen and (max-width: 900px) {
		padding: 0 20px;
	}
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

		@media screen and (max-width: 900px) {
			padding: 0 20px;
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

	.relations-content > .relations-wrapper img {
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
	flex-direction: column;
	align-items: flex-end;
	max-width: 980px;
	height: 100vh;
	margin: 0 auto 150px auto;
	justify-content: center;
	z-index: 400;
	padding: 10px 0;
	position: relative;
	background-image: url(./assets/BG_Entre-em-contato_Inteiro.png);
	background-size: cover;
	background-repeat: no-repeat;

	h2 {
		color: #cb2378;
		text-align: center;
		font-size: 30px;
	}
	p {
		text-align: center;
		font-size: 20px;
		color: white;
		padding: 0 20px;
	}

	.form-content {
		width: 45%;
		margin-right: 3%;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: left;
		gap: 10px;

		& > input {
			border: none;
			outline: none;
			border-bottom: 1px solid white;
			padding-left: 5px;
			height: 30px;
			background-color: transparent;
			color: white;
		}

		& > input::placeholder {
			color: white;
			vertical-align: top;
		}

		.home-form-textarea {
			height: 100px;
		}

		.politics-form-wrapper {
			display: flex;
			gap: 10px;
			color: white;
			margin: 10px 0;
		}

		.home-form-button-container {
			display: flex;
			justify-content: flex-end;
			button {
				width: fit-content;
				padding: 15px 50px;
				border-radius: 10px;
				color: white;
				border: 1px solid #cb2378;
				background-color: #cb2378;
			}
		}
	}

	@media screen and (max-width: 900px) {
		padding: 20px;
		background-position: center;
		.form-content {
			width: 50%;
			margin-right: 3%;
		}
	}

	@media screen and (max-width: 768px) {
		background-image: url(./assets/BG_Entre-em-contato_Preto.png);
		align-items: center;
		justify-content: center;

		.form-content {
			width: 95%;
		}
	}
`;
