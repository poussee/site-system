import styled from 'styled-components';

export const Container = styled.section`
	width: 100%;
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
		padding: 50px 0;
		margin-top: 0;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 60px;

	.unique-items,
	.two-items {
		display: flex;
		justify-content: space-between;

		& > div {
			width: 45%;
		}
	}

	.unique-items {
		& > .award {
			border: 2px solid #cf3884;
			border-radius: 20px;
		}
	}

	.two-items {
		position: relative;
		border: 2px solid #cf3884;
		border-radius: 20px;
	}

	.award {
		position: relative;
		display: flex;
		gap: 20px;
		padding: 30px 20px;

		.award-text {
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 10px;

			p {
				max-width: 250px;
			}
		}
	}

	.text-wrapper {
		width: 45%;

		.awards-title {
			display: flex;
			align-items: center;
			margin-bottom: 10px;

			h2 {
				color: #c72376;
				white-space: wrap;
				font-size: 26px;
				font-weight: 400;
			}

			.awards-divisor {
				min-width: 30px;
				width: 100%;
				max-width: 100px;
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

	@media (max-width: 768px) {
		width: 100%;

		.unique-items,
		.two-items {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;

			& > div {
				width: 100%;
			}
		}

		.unique-items {
			gap: 60px;
		}

		.award {
			justify-content: center;
		}
	}

	@media (max-width: 500px) {
		.award {
			justify-content: center;
			align-items: center;
			flex-direction: column;

			.award-text {
				width: 100%;

				p {
					max-width: 100%;
					text-align: center;
				}
			}
		}
	}
`;

export const ImgContainer = styled.div`
	min-width: 100px;
	max-width: 100px;
	object-fit: contain;
`;

export const YearImg = styled.div`
	position: absolute;
	top: -12px;
	left: 60px;
	min-width: 79px;
	max-width: 79px;
	padding: 0 10px;
	object-fit: contain;
	background: white;
`;
