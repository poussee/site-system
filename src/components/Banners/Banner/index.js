import React from 'react';
import Link from 'next/link';

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
					<Link href="/contato">
						<a className="button">{props.button}</a>
					</Link>
				)}
			</S.Content>
		</S.Container>
	);
};

export default Banner;
