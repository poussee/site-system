import Link from 'next/link';
import { useRouter } from 'next/router';

import * as S from './style';

const Footer = () => {
	return (
		<S.Container>
			<S.Content>
				<div className="flex-column">
					<div>
						<h4>Sobre Nós</h4>
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
					<div>
						<img src="" />
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
						<a className="yellowButton">Vem ser System</a>
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
