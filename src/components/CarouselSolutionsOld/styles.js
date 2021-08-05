import styled from 'styled-components';

export const Container = styled.section`
	max-width: 980px;
	margin: 50px auto 0 auto;
	padding-bottom: 50px;
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

export const CarouselContainer = styled.div`
	padding: 50px 0;
	width: 100%;
	.rec-swipable {
		align-items: center;
	}
	.rec-arrow-left {
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
	.rec-arrow-right {
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
	.rec-dot_active {
		background: black;
	}
	.rec-dot {
		border: 1px solid black;
		border-radius: 3px !important;
		box-shadow: none;
		padding: 6px;
	}

	.slider-container {
		width: 100%;
		height: 100%;
		position: fixed; /* add this code for position fixed */
		top: 0px; /* set top and left 0 */
		left: 0px;
	}
`;

export const ItemContainer = styled.div`
	display: flex;
	align-items: flex-start;
	width: 100%;
	min-height: 150px;
	padding: 20px 10px;
	gap: 10px;
	color: white;
	background: black;
	border-radius: 15px;

	& > div {
		width: fit-content;
	}

	.icon {
		display: flex;
		max-width: 50px;

		& > img {
			width: 100%;
		}
	}

	.card-content {
		display: flex;
		flex-direction: column;
		gap: 15px;
		width: 70%;
		& > div {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			width: 100%;

			& > img {
				width: 30%;
			}
		}

		.yellowButton {
			width: fit-content;
			padding: 8px 20px;
			border-radius: 10px;
			color: white;
			font-size: 14px;
			border: 1px solid #f8c304;
			background-color: #f8c304;
		}

		.pinkButton {
			width: fit-content;
			padding: 8px 20px;
			border-radius: 10px;
			color: white;
			font-size: 14px;
			border: 1px solid #cb2378;
			background-color: #cb2378;
		}

		.blueButton {
			width: fit-content;
			padding: 8px 20px;
			border-radius: 10px;
			color: white;
			font-size: 14px;
			border: 1px solid #0182b0;
			background-color: #0182b0;
		}

		.purpleButton {
			width: fit-content;
			padding: 8px 20px;
			border-radius: 10px;
			color: white;
			font-size: 14px;
			border: 1px solid #6c117b;
			background-color: #6c117b;
		}
	}

	p {
		font-size: 14px;
	}
`;

export const Img = styled.img`
	max-width: 300px;
	max-height: 150px;
	object-fit: contain;
	margin: 0 5px;
`;
