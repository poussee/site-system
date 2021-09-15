import styled from 'styled-components';

export const FormContainer = styled.div`
	width: 100%;
	padding: 80px 0;

	background: url('/assets/contato/BG_Fale_Conosco.png');
	background-repeat: no-repeat;
	background-position: center;
	background-size: 100% 100%;
`;

export const FormContent = styled.div`
	display: flex;
	justify-content: center;

	width: 85%;
	max-width: 980px;
	margin: 0 auto;
	gap: 10%;

	.form-image {
		display: flex;
		align-items: center;

		width: 40%;
	}

	.form-holder {
		width: 40%;
	}

	@media (max-width: 768px) {
		gap: 0;

		.form-image {
			display: none;
		}

		.form-holder {
			width: 100%;
		}
	}
`;

export const BlackContainer = styled.section`
	width: 100%;
	padding: 80px 0;

	background: url(/assets/contato/BG_01.png);
	background-repeat: no-repeat;
	background-position: center;
	background-size: 100% 100%;

	@media (max-width: 768px) {
		background-position: left;
		background-size: cover;
	} ;
`;

export const WorkWithUs = styled.div`
	width: 85%;
	max-width: 980px;
	margin: 0 auto;

	.title-handler {
		display: flex;
		align-items: center;

		h2 {
			color: #bd1661;
		}

		.pink-divisor {
			width: 100%;
			max-width: 100px;
			height: 2px;
			margin-left: 3%;

			background-color: #bd1661;
		}
	}

	.text-holder {
		margin: 10px 0 30px;
	}

	p {
		color: white;
	}

	a {
		padding: 10px 20px;
		background: #ffc509;
		border-radius: 10px;
	}
`;

export const MapContainer = styled.section`
	width: 100%;
	padding: 80px 0;

	background: url('/assets/contato/BG_02.png');
	background-repeat: no-repeat;
	background-position: right;
	background-size: 100% 100%;

	@media (max-width: 768px) {
		background: white;
	} ;
`;

export const Map = styled.div`
	display: flex;

	width: 85%;
	max-width: 980px;
	margin: 0 auto;
	gap: 100px;

	.title-handler {
		display: flex;
		align-items: center;

		h2 {
			color: #bd1661;
		}

		.pink-divisor {
			width: 100%;
			max-width: 100px;
			height: 2px;
			margin-left: 3%;

			background-color: #bd1661;
		}
	}

	.map-handler {
		width: 50%;
		max-width: 50%;
		border: 1px solid transparent;
		border-radius: 15px;
		overflow: hidden;
	}

	@media (max-width: 768px) {
		flex-direction: column;

		.map-handler {
			width: 100%;
			max-width: 100%;
			margin: 0 auto;

			border: 1px solid transparent;
			border-radius: 15px;
			overflow: hidden;
		}
	}
`;

export const PinkContainer = styled.section`
	width: 100%;
	margin-bottom: 40px;

	background: url('/assets/contato/BG_pink.png');
	background-repeat: no-repeat;
	background-position: center;
	background-size: 100% 100%;

	@media (max-width: 768px) {
		background-position: center;
		background-size: cover;
	} ;
`;

export const VirtualTour = styled.div`
	width: 85%;
	max-width: 980px;
	margin: 0 auto;
`;
