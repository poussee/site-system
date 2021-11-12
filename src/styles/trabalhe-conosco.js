import styled from 'styled-components';

export const Container = styled.section`
	${(props) => `background: ${props.background}`};
	background-size: cover;
	background-position: center;
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

export const Divisor = styled.span`
	display: block;
	width: 100%;
	max-width: ${(props) => props.maxWidth};
	height: 2px;
	margin-left: 5px;

	background-color: ${(props) => props.color};
`;

export const Together = styled.div`
	display: flex;
	justify-content: space-between;
	width: 85%;
	max-width: 980px;
	margin: 0 auto;
	padding: 80px 0;
	color: white;

	.image-handler {
		width: 55%;
	}

	.text-handler {
		width: 40%;
		padding-right: 30px;

		.title h2 {
			margin-bottom: 20px;
			span {
				display: inline-block;
				margin-bottom: 6px;
			}
		}

		p {
			margin: 10px 0 20px;
		}
	}

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 0px;

		.image-handler {
			width: 100%;
		}

		.text-handler {
			width: 100%;

			.image {
				display: flex;
				justify-content: center;
				margin-top: 60px;
			}
		}
	}
`;

export const Life = styled.div`
	display: flex;
	justify-content: space-between;
	width: 85%;
	max-width: 980px;
	padding: 80px 0 60px 100px;
	color: black;

	.image-handler {
		width: 50%;
	}

	.text-handler {
		width: 40%;

		.title h2 {
			max-width: 190px;
			margin-bottom: 20px;
			span {
				display: inline-block;
				margin-bottom: 6px;
			}
		}

		p {
			margin: 10px 0 20px;
		}
	}

	@media (max-width: 768px) {
		flex-direction: column-reverse;
		gap: 60px;
		margin: 0 auto;
		padding: 60px 0;

		.image-handler {
			width: 100%;
		}

		.text-handler {
			width: 100%;

			.title h2 {
				max-width: 100%;
			}

			.image {
				display: flex;
				justify-content: center;
			}
		}
	}
`;

export const Specialist = styled.div`
	display: flex;
	justify-content: space-between;
	width: 85%;
	max-width: 980px;
	margin: 0 auto;
	padding: 80px 0;
	color: black;

	.image-handler {
		width: 45%;
	}

	.text-handler {
		width: 40%;

		.title {
			display: flex;
			align-items: center;

			h2 {
				color: #b61f6c;
				margin-bottom: 10px;
			}
		}

		p {
			margin: 10px 0 40px;
			font-weight: bold;
			font-size: 22px;
		}

		a {
			display: flex;
			align-items: flex-end;
			width: fit-content;
			color: white;
			padding: 10px 20px;
			border: 1px solid #b61f6c;
			border-radius: 10px;
			background: #b61f6c;

			svg {
				margin-left: 5px;
			}
		}
	}

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 60px;

		.image-handler {
			width: 100%;
		}

		.text-handler {
			width: 100%;

			.title {
				flex-direction: column;
				align-items: flex-start;
			}

			h2 {
				max-width: 320px;
			}

			.image {
				display: flex;
				justify-content: center;
			}
		}
	}
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
							margin-left: -3.8px;
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

		p {
			font-size: 12px;
		}

		a:hover {
			text-decoration: underline;
		}
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
