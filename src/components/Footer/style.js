import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	background-image: url(./assets/BG_Rodape.png);
	background-size: cover;
	background-repeat: no-repeat;
	padding: 40px 0;

	color: white;

	.flex {
		display: flex;
		gap: 50px;
	}

	.flex-column {
		display: flex;
		flex-direction: column;
		gap: 25px;

		h4 {
			margin-bottom: 20px;
		}
	}

	p,
	li {
		font-size: 14px;
	}
`;

export const Content = styled.div`
	display: flex;
	align-items: flex-start;
	max-width: 980px;
	margin: 0 auto;
	justify-content: space-between;
	z-index: 400;
	padding: 10px 0;
	position: relative;

	img {
		width: 170px;
	}

	& > div {
		width: fit-content;
	}

	h2,
	h3,
	h4,
	p,
	ul {
		margin: 0;
	}

	.yellowButton {
		padding: 10px 20px;
		background: #f8c304;
		width: fit-content;
		border-radius: 10px;
	}

	@media screen and (max-width: 900px) {
		padding: 0 20px;
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;
