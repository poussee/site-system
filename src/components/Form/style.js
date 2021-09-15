import styled from 'styled-components';

export const FormContainer = styled.section`
	width: 100%;

	h2 {
		color: #cb2378;
		text-align: center;
		font-size: 30px;
	}
	p {
		max-width: 350px;
		margin: 0 auto;
		${(props) => (props.padding ? 'padding: 0 20px;' : '')};

		text-align: center;
		font-size: 20px;
		color: white;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: left;
		margin-top: 20px;
		gap: 10px;

		& > input {
			border: none;
			outline: none;
			border-bottom: 1px solid white;
			padding-left: 5px;
			height: 30px;
			background-color: transparent;
			color: white;
		}

		& > input::placeholder {
			color: white;
			vertical-align: top;
		}

		.home-form-textarea {
			height: 100px;
		}

		.politics-form-wrapper {
			display: flex;
			gap: 10px;
			color: white;
			margin: 10px 0;

			input {
				-webkit-appearance: none;
				background-color: #fafafa;
				border: 2px solid white;
				display: inline-block;
				position: relative;

				height: 25px;
				min-width: 25px;
				margin-top: 3px;
			}

			input:checked {
				background-color: var(--pink);
				border: 1px solid var(--pink);
				color: white;
			}

			input:checked:after {
				content: '✔';
				font-size: 20px;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				color: white;
			}

			label {
				text-align: justify;
			}
		}

		.home-form-button-container {
			display: flex;
			justify-content: flex-end;
			button {
				width: fit-content;
				padding: 15px 50px;
				border-radius: 10px;
				color: white;
				border: 1px solid #cb2378;
				background-color: #cb2378;
			}
		}
	}
`;
