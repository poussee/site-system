import styled from 'styled-components';

export const Container = styled.section`
	max-width: 780px;
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
	flex-direction: column;
	align-items: center;
`;

export const ImgContainer = styled.div`
	max-width: 105px;
	width: 90px;
	max-height: 80px;
	object-fit: contain;
	margin: 0 5px 20px 5px;
`;
