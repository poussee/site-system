import styled from 'styled-components';

export const Container = styled.section`
	width: 100%;
	background: white;
`;

export const Content = styled.div`
	width: 85%;
	max-width: 968px;
	padding: 80px 0;
	margin: 0 auto;

	h3,
	p {
		padding: 0;
		margin: 0;
	}

	h3,
	a {
		color: #cf3884;
	}

	h3 {
		margin: 50px 0 20px;
		font-size: 40px;
		text-align: center;
	}

	p,
	li {
		margin: 15px 0;
	}

	p,
	li,
	a {
		font-size: 20px;
	}

	a:hover {
		text-decoration: underline;
	}
`;
