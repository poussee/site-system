import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 60vh;
	background-size: cover;
	background-repeat: no-repeat;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: left;
	width: 85%;
	max-width: 980px;
	height: 100%;
	margin: 0 auto;

	color: white;

	.text-400 {
		max-width: 400px;
	}

	.text-250 {
		max-width: 250px;
	}
`;
