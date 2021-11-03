import React from 'react';
import { MdDoubleArrow } from 'react-icons/md';

import * as S from './style';

const Banner = (props) => {
	return (
		<S.Container style={{ backgroundImage: `url(${props.background.src})` }}>
			<S.Content larger={props.workWithUs}>
				<h2>
					{props.title}
					{props.workWithUs ? <span>Data-Driven</span> : ''}
				</h2>
				<p className={props.service ? 'text-250' : 'text-400'}>
					{props.subtitle}
				</p>
				{props.button != null && (
					<a href="https://forms.office.com/r/zJJFpCeY63" className="button">
						{props.button} <MdDoubleArrow />
					</a>
				)}
			</S.Content>
		</S.Container>
	);
};

export default Banner;
