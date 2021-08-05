import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/dist/client/image';
import LinkButton from '../LinkButton';

import logoRodape from '../../../public/assets/Logo-Rodape.png';

import * as S from './style';

const Footer = () => {
	return (
		<S.Container>
			<S.Content>
				<div className="flex-column">
					<div>
						<h4>Sobre nós</h4>
						<p>
							Há mais de 20 anos, a System inova ao empregar
							<br /> inteligência de dados na construção de relacionamentos
							<br />
							sustentáveis entre empresas e clientes.
						</p>
					</div>

					<div>
						<h4>Nossas soluções</h4>
						<div className="flex">
							<ul>
								<li>Cobrança</li>
								<li>Vendas</li>
							</ul>
							<ul>
								<li>SAC</li>
								<li>Mais opções</li>
							</ul>
						</div>
					</div>
					<div className="img-container">
						<Image
							src={logoRodape}
							alt="Logo rodapé"
							layout="responsive"
							quality={100}
						/>
					</div>
				</div>
				<div className="flex-column">
					<div>
						<h4>Contato</h4>
						<p>(11) 3511-2929</p>
					</div>
					<div>
						<p>Av. Dr. Mauro Lindemberg Monteiro, 185</p>
						<p>Galpões 1, 2 e 19, Jardim Santa Fé</p>
						<p>Osasco - São Paulo</p>
						<p>CEP 06278-010</p>
					</div>
				</div>
				<div className="flex-column">
					<div>
						<h4>Trabalhe conosco</h4>
						<LinkButton className={'yellowButton'} link={'#'}>
							Vem ser System
						</LinkButton>
					</div>
					<div>
						<h4>Conecte-se</h4>
						<div className="footer-socials-wrapper">
							<a
								target="_blank"
								href="https://www.facebook.com/SystemInteractBR"
							>
								<i class="fab fa-facebook-f"></i>
							</a>
							<a
								target="_blank"
								href="https://www.instagram.com/oficialsystem/"
							>
								<i class="fab fa-instagram"></i>
							</a>
							<a
								target="_blank"
								href="https://www.linkedin.com/company/system-interact/"
							>
								<i class="fab fa-linkedin-in"></i>
							</a>
						</div>
					</div>
					<div>
						<a>Política de privacidade</a>
					</div>
				</div>
			</S.Content>
			<S.Content>
				<p>
					© System Interact 2021. Todos os direitos reservados. Desenvolvido por
					AgênciaPoussée.
				</p>
			</S.Content>
		</S.Container>
	);
};

export default Footer;
