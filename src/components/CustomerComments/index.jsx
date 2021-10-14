import CarouselCustomerComments from '../CarouselCustomerComments';

import * as S from './style';

export default function CustomerComments(props) {
	return (
		<S.CommentsContainer backgroundImage={props.BackgroundImage}>
			<S.CommentsContent dif={props.dif}>
				<div className="row-wrapper">
					<div className="text-wrapper">
						<div className="awards-title">
							<h2>DEPOIMENTOS DE CLIENTES</h2>
							<div className="awards-divisor"></div>
						</div>
						<p>
							Confira as opiniões de profissionais que já estão revolucionando a
							sua comunicação com os consumidores.
						</p>
					</div>
					<div className="carousel-wrapper">
						<CarouselCustomerComments
							authorName={props.authorName}
							authorJob={props.authorJob}
							authorEnterprise={props.authorEnterprise}
							authorFoto={props.authorFoto}
						/>
					</div>
				</div>
			</S.CommentsContent>
		</S.CommentsContainer>
	);
}
