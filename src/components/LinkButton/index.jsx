import * as S from './style';
import Link from 'next/dist/client/link';

const LinkButton = (props) => {
	return (
		<Link href={props.link}>
			<S.Button className={props.className}>{props.children}</S.Button>
		</Link>
	);
};

export default LinkButton;
