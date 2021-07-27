import React from 'react';
import Link from 'next/link';

import * as S from './style';

const BannerHome = () => {
	return (
		<S.Container>
			<S.content>
				<h2></h2>
				<p></p>
				<Link href="#">
					<a>Fale com um especialista</a>
				</Link>
			</S.content>
		</S.Container>
	);
};

export default BannerHome;
