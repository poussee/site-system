import styled from 'styled-components';

export const Container = styled.section`
	max-width: 780px;
	margin: 0px auto 0 auto;
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
		color: #fcc900;
		box-shadow: none;
		font-size: 40px;
		font-weight: bolder;
		&:hover,
		&:focus {
			background: none;
			color: #fcc900;
			box-shadow: none;
		}
	}
	.rec-arrow-right {
		background: none;
		color: #fcc900;
		box-shadow: none;
		font-size: 40px;
		font-weight: bolder;
		&:hover,
		&:focus {
			background: none;
			color: #fcc900;
			box-shadow: none;
		}
	}
	.rec-dot_active {
		background: white;
	}
	.rec-dot {
		border: 1px solid white;
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
	width: 100%;
`;

export const UpperText = styled.div`
	display: flex;
	align-items: center;

	height: 160px;
	max-width: 311px;

	background: url(/assets/quem-somos/Timeline/timeline/Balao_01.png);
	background-size: 100% 100%;

	p {
		padding: 10px 20px 20px 20px;
	}
`;

export const BellowText = styled.div`
	display: flex;
	align-items: center;

	height: 160px;
	max-width: 311px;

	background: url(/assets/quem-somos/Timeline/timeline/Balao_02.png);
	background-size: 100% 100%;

	p {
		padding: 20px 20px 10px 20px;
	}
`;

export const ImgContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;

	${(props) =>
		props.padding ? 'padding-top:160px;' : 'padding-bottom:160px;'};

	object-fit: cover;

	& > img {
		max-height: 355px;
	}
`;
