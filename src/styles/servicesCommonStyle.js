import styled from 'styled-components';

export const Container = styled.section`
	width: 100%;
`;

export const SolutionContainer = styled.section`
	width: 100%;
	background: #cb2378;
`;

export const SolutionContent = styled.div`
	display: flex;
	max-width: 90%;
	padding: 80px 0;
	gap: 5%;

	.solutions-image {
		width: 45%;
	}

	.solutions-information {
		display: flex;
		flex-direction: column;
		width: 45%;
		gap: 10px;
		color: white;

		.solution-title {
			display: flex;
			align-items: top;

			h2 {
				font-weight: 400;
			}

			.solution-divisor {
				width: 60px;
				max-width: 60px;
				margin: 15px 0 0 5%;
				height: 2px;
				background-color: white;
			}
		}

		.solutions-texts {
			display: flex;
			flex-direction: column;
			max-width: 90%;
			gap: 10px;

			p {
				font-size: 16px;
			}

			.solution-subtitle {
				font-weight: bold;
				font-size: 22px;
				max-width: 360px;
			}

			ul {
				display: flex;
				flex-direction: column;
				gap: 10px;
				padding: 0;
				padding-left: 20px;

				li::marker {
					color: #f8c304;
				}

				li {
					font-weight: bold;
				}
			}
		}
	}

	@media (max-width: 768px) {
		width: 85%;
		max-width: 980px;
		margin: 0 auto;
	}
`;

export const CommentsContainer = styled.div`
	width: 100%;
	background: url('/assets/cobranca/BG_Depoimentos.png');
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
`;

export const CommentsContent = styled.div`
	width: 85%;
	max-width: 980px;
	margin: 0 auto;
	padding: 80px 0;

	.row-wrapper {
		display: flex;
		align-items: flex-start;
		justify-content: flex-end;

		width: 100%;
		gap: 5%;

		& > div {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
		}

		.text-wrapper {
			.awards-title {
				display: flex;
				align-items: top;

				h2 {
					color: black;
					max-width: 250px;
					font-weight: 400;
				}

				.awards-divisor {
					width: 60px;
					max-width: 60px;
					margin: 15px 0 0 5%;
					height: 2px;
					background-color: black;
				}
			}

			p {
				font-weight: bold;
				font-size: 20px;
				max-width: 290px;
			}
		}
	}

	@media (min-width: 768px) {
		.text-wrapper {
			width: 40%;
		}

		.carousel-wrapper {
			width: 50%;
		}
	}

	@media (max-width: 768px) {
		.row-wrapper {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.text-wrapper {
				width: 100%;

				p {
					font-weight: bold;
					font-size: 20px;
					max-width: initial;
				}
			}
		}

		.carousel-wrapper {
			width: 100%;
			margin-top: 60px;
		}
	}
`;

export const FormContainer = styled.div`
	width: 100%;
	padding: 80px 0;
	margin-bottom: 80px;

	background: url('/assets/cobranca/BG_Quero-um-orcamento.png');
	background-repeat: no-repeat;
	background-position: center;
	background-size: 100% 100%;
`;

export const FormContent = styled.div`
	display: flex;
	justify-content: center;

	width: 85%;
	max-width: 980px;
	margin: 0 auto;
	gap: 10%;

	.form-image {
		display: flex;
		align-items: center;

		width: 40%;
	}

	.form-holder {
		width: 40%;
	}

	@media (max-width: 768px) {
		gap: 0;

		.form-image {
			display: none;
		}

		.form-holder {
			width: 100%;
		}
	}
`;
