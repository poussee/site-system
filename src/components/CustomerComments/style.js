import styled from 'styled-components';

export const CommentsContainer = styled.section`
	width: 100%;
	background: ${(props) => `url(${props.backgroundImage})`};
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
