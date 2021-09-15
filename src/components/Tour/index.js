import videoThumb from '../../../public/assets/quem-somos/Imagem_tour_virtual_exemplo.png';
import Image from 'next/dist/client/image';

import * as S from './style';

export default function Tour(props) {
	return (
		<>
			<S.VirtualTour>
				<div>
					<div className="flex-title">
						<h2>{props.title}</h2>
						<div className="white-divisor"></div>
					</div>
					<p>
						Que tal conferir nossa estrutura em uma experiência imersiva 360º?
					</p>
					<p>Aproveite a visita!</p>
				</div>
				<div>
					<a href="https://villa360.com.br/tour/system/" target="_blank">
						<Image src={videoThumb} alt="alterar" />
					</a>
				</div>
			</S.VirtualTour>
		</>
	);
}
