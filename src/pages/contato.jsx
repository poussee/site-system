import Image from 'next/image';

import Banner from '../components/Banners/Banner';
import bannerBackground from '../../public/assets/banners/banner-contato.png';
import Form from '../components/Form';
import Tour from '../components/Tour';
import GoogleMaps from '../components/Map';

import * as S from '../styles/contato';

import FormImage from '../../public/assets/contato/Imagem_entre_em_contato.png';

export default function Contato() {
	return (
		<>
			<Banner
				className="banner"
				background={bannerBackground}
				title="Contato"
				subtitle="Um especialista responderá sua mensagem em breve."
			/>
			<S.FormContainer>
				<S.FormContent>
					<div className="form-image">
						<Image src={FormImage} />
					</div>
					<div className="form-holder">
						<Form
							title="FALE CONOSCO"
							subtitle="Preencha os campos abaixo com seus dados."
							padding={true}
						/>
					</div>
				</S.FormContent>
			</S.FormContainer>
			<S.BlackContainer>
				<S.WorkWithUs>
					<div className="title-handler">
						<h2>TRABALHE CONOSCO</h2>
						<div className="pink-divisor"></div>
					</div>
					<div className="text-holder">
						<p>Sua carreira de sucesso começa aqui.</p>
						<p>Seja protagonista na transformação das interações.</p>
					</div>
					<a>Vem ser System</a>
				</S.WorkWithUs>
			</S.BlackContainer>
			<S.MapContainer>
				<S.Map>
					<div>
						<div className="title-handler">
							<h2>ONDE ESTAMOS</h2>
							<div className="pink-divisor"></div>
						</div>
						<div>
							<p>Galpões 1, 2 e 19, Jardim Santa Fé</p>
							<p>Osasco - São Paulo</p>
							<p>CEP 06278-010</p>
						</div>
					</div>
					<div className="map-handler">
						<GoogleMaps />
					</div>
				</S.Map>
			</S.MapContainer>
			<S.PinkContainer>
				<Tour title="TOUR VIRTUAL" />
			</S.PinkContainer>
		</>
	);
}
