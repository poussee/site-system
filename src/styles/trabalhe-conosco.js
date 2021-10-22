import styled from 'styled-components';

export const Container = styled.section`
	${(props) => `background: ${props.background}`}
`;

export const FooterContainer = styled.footer`
	${(props) => `background: ${props.background}`}
`;

export const TeamSystemContent = styled.div`
	width: 85%;
	max-width: 968px;
	margin: 0 auto;
	padding: 60px 0;

	h2 {
		color: #cb2378;
		font-weight: 400;
	}

	.Wrapper {
		display: flex;
		justify-content: space-between;
		margin-top: 30px;

		.text-handler {
			width: 35%;

			p {
				margin-bottom: 15px;
				font-size: 18px;
				font-weight: 600;
			}

			.text-image {
				max-width: 300px;
			}
		}

		.image-handler {
			width: 55%;
		}
	}

	@media (max-width: 768px) {
		.Wrapper {
			justify-content: flex-start;
			flex-direction: column;

			.text-handler {
				width: 100%;
			}

			.image-handler {
				width: 100%;
			}
		}
	}
`;

export const Divisor = styled.div`
	width: 100%;
	max-width: ${(props) => props.maxWidth};
	height: 2px;
	margin-left: 3%;

	background-color: ${(props) => props.color};
`;

export const Together = styled.div`
	width: 85%;
	max-width: 980px;
	margin: 0 auto;
	padding: 60px 0;
	color: white;
`;

export const Life = styled.div`
	width: 85%;
	max-width: 980px;
	margin: 0 auto;
	padding: 60px 0;
	color: black;
`;

export const Specialist = styled.div`
	width: 85%;
	max-width: 980px;
	margin: 0 auto;
	padding: 60px 0;
	color: black;
`;

export const FooterContent = styled.div`
	width: 85%;
	max-width: 980px;
	margin: 0 auto;
	padding: 30px 0;
	color: white;

	h2,
	h3,
	h4,
	p,
	ul {
		margin: 0;
	}

	.main-content {
		display: flex;
		justify-content: flex-start;
		gap: 60px;
		margin-bottom: 40px;

		.information {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			h4 {
				font-size: 18px;
			}

			.location {
				.title {
					display: flex;
					align-items: center;
				}

				h4 {
					font-weight: 400;
				}
				p {
					font-size: 14px;
					margin-top: 10px;
				}
			}

			.socials-container {
				h4 {
					margin-bottom: 10px;
				}

				.footer-socials-wrapper {
					display: flex;
					align-items: center;
					gap: 28px;
					height: 30px;

					i {
						font-size: 18px;
						color: var(--yellow);

						&:hover {
							font-size: 24px;
							margin-left: -1.6px;
						}
					}
				}
			}

			.img-container {
				max-width: 105px;
			}
		}

		.map-container {
			width: 50%;
			max-width: 50%;
			border: 1px solid transparent;
			border-radius: 15px;
			overflow: hidden;
		}
	}

	.company-rights {
		display: flex;
		justify-content: space-between;
	}

	@media (max-width: 768px) {
		.company-rights,
		.main-content {
			flex-direction: column;
		}

		.main-content {
			.information {
				gap: 20px;
			}

			.map-container {
				width: 100%;
				max-width: 100%;
			}
		}
	}
`;
