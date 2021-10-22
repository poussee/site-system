import Link from 'next/link';
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
					<div className="our-solutions">
						<h4>Nossas soluções</h4>
						<div className="flex our-solutions">
							<ul>
								<li>
									<Link href="/cobranca">
										<a>Cobrança</a>
									</Link>
								</li>
								<li>
									<Link href="/vendas">
										<a>Vendas</a>
									</Link>
								</li>
								<li>
									<Link href="/sac">
										<a>SAC</a>
									</Link>
								</li>
								<li>
									<Link href="/sac">
										<a>Gestão Home Office</a>
									</Link>
								</li>
								<li>
									<Link href="/sac">
										<a>Pesquisa</a>
									</Link>
								</li>
								<li>
									<Link href="/mais-opcoes">
										<a>Retenção</a>
									</Link>
								</li>
								<li>
									<Link href="/mais-opcoes">
										<a>BackOffice</a>
									</Link>
								</li>
								<li>
									<Link href="/mais-opcoes">
										<a>Suporte técnico</a>
									</Link>
								</li>
								<li>
									<Link href="/mais-opcoes">
										<a>Bodyshop</a>
									</Link>
								</li>
							</ul>
							<ul>
								<li>
									<Link href="/mais-opcoes">
										<a>Infraestrutura</a>
									</Link>
								</li>
								<li>
									<Link href="/mais-opcoes">
										<a>Human Persona</a>
									</Link>
								</li>
								<li>
									<Link href="/mais-opcoes">
										<a>UX, CX e CS</a>
									</Link>
								</li>
								<li>
									<Link href="/mais-opcoes">
										<a>Social Care</a>
									</Link>
								</li>
								<li>
									<Link href="/mais-opcoes">
										<a>Door to Door</a>
									</Link>
								</li>
								<li>
									<Link href="/mais-opcoes">
										<a>Software de CRM</a>
									</Link>
								</li>
								<li>
									<Link href="/mais-opcoes">
										<a>Plataforma Social</a>
									</Link>
								</li>
								<li>
									<Link href="/mais-opcoes">
										<a>Chatbot</a>
									</Link>
								</li>
							</ul>
							<ul>
								<li>
									<Link href="/mais-opcoes">
										<a>Agente Digital</a>
									</Link>
								</li>
								<li>
									<Link href="/mais-opcoes">
										<a>URA</a>
									</Link>
								</li>
								<li>
									<Link href="/mais-opcoes">
										<a>WhatsApp</a>
									</Link>
								</li>
								<li>
									<Link href="/mais-opcoes">
										<a>Chat</a>
									</Link>
								</li>
								<li>
									<Link href="/mais-opcoes">
										<a>Gerenciador de e-mail</a>
									</Link>
								</li>
								<li>
									<Link href="/mais-opcoes">
										<a>Atendimento via vídeo</a>
									</Link>
								</li>
								<li>
									<Link href="/mais-opcoes">
										<a>Webview</a>
									</Link>
								</li>
								<li>
									<Link href="/mais-opcoes">
										<a>Projetos Especiais</a>
									</Link>
								</li>
							</ul>
						</div>
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
				</div>
				<div className="flex-column">
					<div>
						<h4>Trabalhe conosco</h4>
						<LinkButton className={'yellowButton'} link={'#'}>
							Vem ser System
						</LinkButton>
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
			</S.Content>
			<S.Content>
				<p>
					© System Interact 2021. Todos os direitos reservados. Desenvolvido por{' '}
					<a href="https://www.poussee.com.br">Agência Poussée</a>.
				</p>
				<div>
					<Link href="/politica-de-privacidade">
						<a>Política de privacidade</a>
					</Link>
				</div>
			</S.Content>
		</S.Container>
	);
};

export default Footer;
