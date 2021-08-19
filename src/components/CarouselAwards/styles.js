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

export const CarouselContainer = styled.div`
	width: 100%;

	.rec-swipable {
		align-items: center;
	}
	.rec-arrow-left {
		display: none;
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
		display: none;
	}

	.rec-arrow[disabled] {
		opacity: 0;
		pointer-events: none;
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
	width: 100%;

	& > p {
		width: 100px;

		font-size: 1.5em;
		text-align: center;
		color: #c72376;
		font-weight: bold;
	}

	& > div {
		display: flex;
		gap: 20px;
	}

	.award-text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 10px;
	}

	@media (max-width: 768px) {
		width: 100%;

		& > div {
			display: flex;
			width: 100%;
			gap: 20px;
		}
	}
`;

export const ImgContainer = styled.div`
	min-width: 100px;
	object-fit: contain;
`;
