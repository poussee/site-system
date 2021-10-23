import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/dist/client/image';
import { MdMenu, MdClose } from 'react-icons/md';

import logoSystem from '../../../public/assets/Logo-Menu.png';

import * as S from './style';

const Header = () => {
	const [mobile, setMobile] = useState(true);

	const router = useRouter();

	function handleMenu(e) {
		setMobile((prev) => !prev);
	}

	function showUl(e) {
		if (e.target.innerText === 'Serviços') {
			if (e.target.innerText != 'Serviços') {
				e.target.display === 'none';
			} else {
				e.target.display === 'inherit';
			}
		}
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

				<S.MenuContainer className={'linkConteudos'} isActive={!mobile}>
					<Link href="/">
						<a
							className={router.pathname == '/' ? 'activeMenu' : ''}
							onClick={handleMenu}
						>
							Início
						</a>
					</Link>{' '}
					<Link href="/quem-somos">
						<a
							className={router.pathname == '/quem-somos' ? 'activeMenu' : ''}
							onClick={handleMenu}
						>
							Quem somos
						</a>
					</Link>
					<S.Dropdown onClick={(handleMenu, showUl)}>
						<a
							className={
								router.pathname == '/cobranca'
									? 'activeMenu'
									: router.pathname == '/vendas'
									? 'activeMenu'
									: router.pathname == '/sac'
									? 'activeMenu'
									: router.pathname == '/mais-opcoes'
									? 'activeMenu'
									: ''
							}
						>
							Serviços
						</a>
						<ul className="linkConteudos">
							<li>
								<Link href="/cobranca">
									<a
										className={
											router.pathname == '/cobranca' ? 'activeMenu' : ''
										}
										onClick={handleMenu}
									>
										Cobrança
									</a>
								</Link>
							</li>
							<li>
								<Link href="/vendas">
									<a
										className={router.pathname == '/vendas' ? 'activeMenu' : ''}
										onClick={handleMenu}
									>
										Vendas
									</a>
								</Link>
							</li>
							<li>
								<Link href="/sac">
									<a
										className={router.pathname == '/sac' ? 'activeMenu' : ''}
										onClick={handleMenu}
									>
										SAC
									</a>
								</Link>
							</li>
							<li>
								<Link href="/mais-opcoes">
									<a
										className={
											router.pathname == '/mais-opcoes' ? 'activeMenu' : ''
										}
										onClick={handleMenu}
									>
										Mais opções
									</a>
								</Link>
							</li>
						</ul>
					</S.Dropdown>
					<Link href="/contato">
						<a
							className={router.pathname == '/contato' ? 'activeMenu' : ''}
							onClick={handleMenu}
						>
							Contato
						</a>
					</Link>
					<Link href="/trabalhe-conosco">
						<a
							className={
								router.pathname == '/trabalhe-conosco' ? 'activeMenu' : ''
							}
							onClick={handleMenu}
						>
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
