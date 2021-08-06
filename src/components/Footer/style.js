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

	@media (max-width: 768px) {
		.flex-column {
			margin: 20px 0 40px;
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
	width: 95%;
	max-width: 980px;
	margin: 0 auto;
	justify-content: space-between;
	z-index: 400;
	padding: 10px 0;
	position: relative;

	.img-container {
		width: 100%;
		max-width: 130px;
	}
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
		white-space: nowrap;
		background: #f8c304;
		width: fit-content;
		border-radius: 10px;
		color: black;
		font-weight: bold;
	}

	p {
		margin-bottom: 5px;
	}

	h4 {
		font-size: 20px;
	}

	.footer-socials-wrapper {
		display: flex;
		align-items: center;
		gap: 20px;

		i {
			font-size: 22px;
			color: var(--yellow);
		}
	}

	.our-solutions li {
		margin-bottom: 10px;
	}

	@media screen and (max-width: 900px) {
		padding: 0 20px;
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;
