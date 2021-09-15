import React from 'react';
import Link from 'next/link';

import * as S from './style';

const Banner = (props) => {
	return (
		<S.Container style={{ backgroundImage: `url(${props.background.src})` }}>
			<S.Content>
				<h2>{props.title}</h2>
				<p className="text-400">{props.subtitle}</p>
			</S.Content>
		</S.Container>
	);
};

export default Banner;
