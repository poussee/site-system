import CarouselCustomerComments from '../CarouselCustomerComments';

import * as S from './style';

export default function CustomerComments(props) {
	return (
		<S.CommentsContainer backgroundImage={props.BackgroundImage}>
			<S.CommentsContent>
				<div className="row-wrapper">
					<div className="text-wrapper">
						<div className="awards-title">
							<h2>DEPOIMENTOS DE CLIENTES</h2>
							<div className="awards-divisor"></div>
						</div>
						<p>
							O reconhecimento é consequência de uma atuação centrada no
							consumidor e guiada por dados.
						</p>
					</div>
					<div className="carousel-wrapper">
						<CarouselCustomerComments />
					</div>
				</div>
			</S.CommentsContent>
		</S.CommentsContainer>
	);
}
