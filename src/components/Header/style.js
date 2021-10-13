import styled, { keyframes } from 'styled-components';

const animaMenu = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
    visibility: none;
    pointer-events: none;
  }

  to {   
    opacity: 1;
    visibility: visible;
    transform: translateY(0%);
    pointer-events: all;
  }
`;

export const Container = styled.div`
	position: relative;
	width: 100%;
	background-image: url(./assets/BG_Menu.png);
	background-size: cover;
	background-repeat: no-repeat;
	z-index: 9999;
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	width: 95%;
	max-width: 980px;
	margin: 0 auto;
	justify-content: space-between;
	z-index: 400;
	padding: 10px 0;
	position: relative;

	.logo-container {
		width: 20%;
		padding: 5px 0;
		min-width: 150px;
		max-width: 180px;
	}

	@media screen and (max-width: 900px) {
		padding: 0 20px;
	}
`;

export const MenuWrapper = styled.div`
	max-width: 980px;
	margin: 0 auto;
`;

export const MenuContainer = styled.div`
	display: flex;
	gap: 10px;
	width: 60%;

	a,
	span {
		color: white;
		text-decoration: none;
		padding: 2px 0;
		font-size: 16px;
		margin: 10px 0;
	}

	.activeMenu {
		border-bottom: 2px solid #a46e14;
	}

	@media screen and (max-width: 900px) {
		display: ${(props) => (props.isActive ? 'flex' : 'none')};
		flex-direction: column;
		position: absolute;
		top: 40px;
		right: 0;
		background: white;
		padding: 20px;

		a {
			color: black;
		}
	}
`;

export const MenuMobile = styled.button`
	display: none;
	background: none;
	padding: 0;
	outline: 0;
	border: 0;

	svg {
		cursor: pointer;
	}

	@media screen and (max-width: 900px) {
		display: block;
	}
`;

export const Dropdown = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	cursor: pointer;
	width: fit-content;

	.linkConteudos {
		display: none;
		position: absolute;
		top: 100%;
		left: 100%;
		transform: translateX(-50%);
		background: white;
		color: black;
		padding: 0px 18px 10px 18px;
		border: 5px solid transparent;
		border-radius: 20px;
		width: 130px;
		z-index: 2000;

		li {
			list-style: none;
			animation: ${animaMenu} 0.5s ease-in;

			a {
				width: fit-content;
				display: block;
				font-size: 12px;
				padding: 0;
				margin: 0;
				padding-top: 10px;
				color: black;

				&:hover {
					font-weight: 700;
				}
			}
		}

		@media screen and (max-width: 900px) {
			left: 10px;
			transform: translateX(0);
		}
	}

	&:hover ul,
	&:focus ul,
	&:checked ul {
		display: block;
	}
`;
