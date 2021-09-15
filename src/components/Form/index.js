import * as S from './style';

export default function Form(props) {
	return (
		<>
			<S.FormContainer className="form-content" padding={props.padding}>
				<h2>{props.title}</h2>
				<p>{props.subtitle}</p>
				<form>
					<input type="text" placeholder="Nome*"></input>
					<input type="text" placeholder="E-mail*"></input>
					<input type="text" placeholder="Telefone*"></input>
					<input
						className="home-form-textarea"
						type="textarea"
						placeholder="Mensagem*"
					></input>
					<div className="politics-form-wrapper">
						<input type="checkbox" id="home-form"></input>
						<label htmlFor="home-form">
							Estou ciente das condições de tratamento dos meus dados pessoais e
							dou meu consentimento, quando aplicável, conforme descrito na
							<a> Política de Privacidade</a>.
						</label>
					</div>
					<div className="home-form-button-container">
						<button>Enviar</button>
					</div>
				</form>
			</S.FormContainer>
		</>
	);
}
