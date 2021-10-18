import styled from 'styled-components';

export const Container = styled.section`
	bacgkround: ${(props) => {
		props.background;
	}};
`;

export const TeamSystemContent = styled.div`
	width: 85%;
	max-width: 968px;
	margin: 0 auto;
	padding: 60px 0;

	h2 {
		color: #cb2378;
		font-weight: 400;
	}

	.Wrapper {
		display: flex;
		justify-content: space-between;
		margin-top: 30px;

		.text-handler {
			width: 35%;

			p {
				margin-bottom: 15px;
				font-size: 18px;
				font-weight: 600;
			}

			.text-image {
				max-width: 300px;
			}
		}

		.image-handler {
			width: 55%;
		}
	}

	@media (max-width: 768px) {
		.Wrapper {
			justify-content: flex-start;
			flex-direction: column;

			.text-handler {
				width: 100%;
			}

			.image-handler {
				width: 100%;
			}
		}
	}
`;
