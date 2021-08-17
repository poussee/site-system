import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	width: 100%;
	height: 100vh;
	z-index: 9999;
	background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	gap: 20px;
	width: 100%;
	padding: 20px 20px;
	bottom: 0;
	background-color: var(--yellow);

	.cookies-title {
		display: flex;
		align-items: center;
		width: fit-content;
		white-space: nowrap;
		font-weight: bold;
		color: var(--pink);
		font-size: 18px;
	}

	.cookies-text {
		display: flex;
		align-items: center;
		width: fit-content;

		a {
			text-decoration: underline;
			color: black;
			cursor: pointer;
		}
	}

	.cookies-buttons {
		display: flex;
		gap: 10px;

		button {
			background-color: transparent;
			border: 1px solid white;
			padding: 15px 15px;
			font-weight: bold;
			color: var(--pink);
			font-size: 18px;
			cursor: pointer;
		}

		button:nth-child(1) {
			border-bottom-left-radius: 5px;
		}

		button:nth-child(2) {
			border-bottom-right-radius: 5px;
		}
	}

	@media (max-width: 900px) {
		flex-direction: column;
		gap: 30px;

		.cookies-buttons {
			justify-content: center;
		}
	}
`;
