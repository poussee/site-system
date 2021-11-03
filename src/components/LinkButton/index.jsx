import * as S from './style';
import Link from 'next/dist/client/link';
import { MdDoubleArrow } from 'react-icons/md';

const LinkButton = (props) => {
	return (
		<Link href={props.link}>
			<S.Button className={props.className}>
				{props.children} <MdDoubleArrow />
			</S.Button>
		</Link>
	);
};

export default LinkButton;
