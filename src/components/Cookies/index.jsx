import React from 'react';
import * as S from './style';
import Link from 'next/dist/client/link';

function Cookies() {
	const [accepted, setAccepted] = React.useState(false);

	React.useEffect(() => {
		if (window.sessionStorage.getItem('cookies')) {
			setAccepted(true);
		}
	}, []);

	function acceptPolicy() {
		sessionStorage.setItem('cookies', true);
		setAccepted(true);
	}

	return !accepted ? (
		<>
			<S.Container>
				<S.Content>
					<div className="cookies-title">
						<h4>POlÍTICA DE PRIVACIDADE</h4>
					</div>
					<div className="cookies-text">
						<p>
							Utilizamos cookies para controlar o tráfego, identificar usuários
							e sessões de uso, armazenar conteúdo, acompanhar o comportamento
							do público para monitorar as atividades do site e otimizar a sua
							experiência. Em caso de dúvidas, leia nossa{' '}
							<Link href="/politica-de-privacidade">
								<a>Política de Privacidade</a>
							</Link>
							.
						</p>
					</div>
					<div className="cookies-buttons">
						<button onClick={() => acceptPolicy()}>ACEITAR</button>
						<button onClick={() => acceptPolicy()}>RECUSAR</button>
					</div>
				</S.Content>
			</S.Container>
		</>
	) : (
		<></>
	);
}

export default Cookies;
