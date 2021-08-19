import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/dist/client/image';

import logoSystem from '../../../public/assets/Logo-Menu.png';

import { MdMenu, MdClose } from 'react-icons/md';

import * as S from './style';

const Header = () => {
	const [mobile, setMobile] = useState(true);

	const router = useRouter();

	function handleMenu(e) {
		setMobile((prev) => !prev);
	}

	return (
		<S.Container>
			<S.Content>
				<Link href="/">
					<a className="logo-container">
						<Image
							layout="responsive"
							quality={100}
							src={logoSystem}
							alt="Logo System"
						/>
					</a>
				</Link>

				<S.MenuContainer isActive={!mobile}>
					<Link href="/" onClick={handleMenu}>
						<a className={router.pathname == '/#' ? 'activeMenu' : ''}>
							Inicio
						</a>
					</Link>{' '}
					<Link href="/quem-somos" onClick={handleMenu}>
						<a className={router.pathname == '/contato' ? 'activeMenu' : ''}>
							Quem somos
						</a>
					</Link>
					<Link href="#" onClick={handleMenu}>
						<a className={router.pathname == '/contato' ? 'activeMenu' : ''}>
							Serviços
						</a>
					</Link>
					<Link href="#" onClick={handleMenu}>
						<a className={router.pathname == '/contato' ? 'activeMenu' : ''}>
							Contato
						</a>
					</Link>
					<Link href="#" onClick={handleMenu}>
						<a className={router.pathname == '/contato' ? 'activeMenu' : ''}>
							Trabalhe conosco
						</a>
					</Link>
				</S.MenuContainer>

				<S.MenuMobile aria-label="abrir menu" onClick={handleMenu}>
					{mobile ? (
						<MdMenu color="#fff" size="32" />
					) : (
						<MdClose color="#fff" size="32" />
					)}
				</S.MenuMobile>
			</S.Content>
		</S.Container>
	);
};

export default Header;
