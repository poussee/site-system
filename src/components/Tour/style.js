import styled from 'styled-components';

export const VirtualTour = styled.div`
	display: flex;
	align-items: center;
	justify-content: left;

	width: 85%;
	max-width: 968px;
	height: fit-content;
	margin: 0 auto;
	padding: 80px 0;

	color: white;
	font-weight: bold;

	& > div {
		width: 45%;
	}

	.flex-title {
		display: flex;
		align-items: center;

		.white-divisor {
			width: 100%;
			max-width: 100px;
			height: 2px;
			margin-left: 3%;

			background-color: white;
		}
	}

	p {
		max-width: 300px;

		font-size: 1.5em;
		margin: 10px 0;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 80px;

		& > div {
			width: 100%;
		}

		p {
			max-width: 100% !important;
		}
	}
`;
