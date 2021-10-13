import Image from 'next/dist/client/image';

import * as S from './style';

export default function SolutionBlock(props) {
	return (
		<S.SolutionContainer color={props.color}>
			<S.SolutionContent titleWidth={props.titleWidth}>
				<div className="solutions-image">
					<Image src={props.image} alt="Homem falando ao telefone" />
				</div>
				<div className="solutions-information">
					<div className="solution-title">
						<div className="title-handler">
							<h2>{props.title}</h2>
						</div>
						<div className="solution-divisor"></div>
					</div>
					<div className="solutions-texts">
						<p className="solution-subtitle">{props.subtitle}</p>
						<p>{props.text}</p>
						<ul>
							{props.listItems.map((item, index) => {
								return <li key={index}>{item}</li>;
							})}
						</ul>
					</div>
				</div>
			</S.SolutionContent>
		</S.SolutionContainer>
	);
}
