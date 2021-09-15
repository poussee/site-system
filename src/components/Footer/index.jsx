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
						<div className="flex our-solutions">
							<ul>
								<li>
									<Link href="#">
										<a>Cobrança</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>Vendas</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>SAC</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>Retenção</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>BackOffice</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>Suporte técnico</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>Bodyshop</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>Infraestrutura</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>Human Persona</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>UX, CX e CS</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>Social Care</a>
									</Link>
								</li>
							</ul>
							<ul>
								<li>
									<Link href="#">
										<a>Door to Door</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>Software de CRM</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>Plataforma Social</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>Chatbot</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>Agente Digital</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>URA</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>WhatsApp</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>Chat</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>Gerenciador de e-mail</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>Atendimento via vídeo</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>Webview</a>
									</Link>
								</li>
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
								rel="noreferrer"
								href="https://www.facebook.com/SystemInteractBR"
							>
								<i className="fab fa-facebook-f"></i>
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.instagram.com/oficialsystem/"
							>
								<i className="fab fa-instagram"></i>
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.linkedin.com/company/system-interact/"
							>
								<i className="fab fa-linkedin-in"></i>
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
					Agência Poussée.
				</p>
			</S.Content>
		</S.Container>
	);
};

export default Footer;
