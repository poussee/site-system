import styled from 'styled-components';

export const SolutionContainer = styled.section`
	width: 100%;
	background: #f8c304;
`;

export const SolutionContent = styled.div`
	display: flex;
	justify-content: right;
	max-width: 90%;
	padding: 80px 0;
	gap: 5%;
	margin-left: auto;

	.solutions-image {
		width: 45%;
	}

	.solutions-information {
		display: flex;
		flex-direction: column;
		width: 40%;
		gap: 10px;
		color: black;

		.solutions-texts {
			display: flex;
			flex-direction: column;
			max-width: 90%;
			gap: 10px;

			p {
				font-size: 14px;
			}

			.solution-title {
				font-weight: bold;
				font-size: 22px;
				max-width: 300px;
			}

			.solution-subtitle {
				font-weight: bold;
				font-size: 18px;
				max-width: 300px;
				margin-top: 20px;
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
		flex-direction: column;
		width: 85%;
		max-width: 980px;
		margin: 0 auto;
		gap: 60px;

		.solutions-image,
		.solutions-information {
			width: 100%;
		}
	}
`;
