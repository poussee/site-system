import { useState } from 'react';
import Router from 'next/router';
import axios from 'axios';

import * as S from './style';

export default function Form(props) {
	const router = Router;
	const [subject, setSubject] = useState({
		id: 0,
		value: 'Selecione o motivo do seu contato*',
	});
	const [showSubject, setShowSubject] = useState(false);
	const [subjectError, setSubjectError] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [telephone, setTelephone] = useState('');
	const [empresa, setEmpresa] = useState('');
	const [cargo, setCargo] = useState('');
	const [message, setMessage] = useState('');
	const [sent, setSent] = useState('');

	function getInputSubject(e, id) {
		if (id) {
			setSubject({ id, value: e.target.outerText });
			setSubjectError(false);
		} else {
			router.push('/trabalhe-conosco');
			setSubject({ value: e.target.outerText });
			setSubjectError(false);
		}
	}

	function setSubjectVisibility() {
		setShowSubject(!showSubject);
	}

	function submitForm(e) {
		e.preventDefault();

		if (subject.id === 0) {
			setSubjectError(true);
		} else {
			const data = { name, email, telephone, empresa, cargo, message, subject };

			axios
				.post('http://localhost:5000/send_mail', data)
				.then((r) => {
					setSent(true);
					setMsg(r.data.message);
				})
				.catch((e) => {
					console.log(e);
				});
		}
	}

	return sent ? (
		<>
			<S.FormSucceed className="form-content" padding={props.padding}>
				<p>Recebemos sua mensagem, responderemos em breve!</p>
			</S.FormSucceed>
		</>
	) : (
		<>
			<S.FormContainer className="form-content" padding={props.padding}>
				<h2>{props.title}</h2>
				<p>{props.subtitle}</p>
				<form onSubmit={submitForm}>
					<input
						type="text"
						placeholder="Nome*"
						onChange={(e) => setName(e.target.value)}
						required
					></input>
					<input
						type="text"
						placeholder="E-mail*"
						onChange={(e) => setEmail(e.target.value)}
						required
					></input>
					<input
						placeholder="Telefone*"
						onChange={(e) => setTelephone(e.target.value)}
						required
					></input>
					<input
						placeholder="Empresa*"
						onChange={(e) => setEmpresa(e.target.value)}
						required
					></input>
					<input
						placeholder="Cargo*"
						onChange={(e) => setCargo(e.target.value)}
						required
					></input>
					<div className="formSelect" onClick={setSubjectVisibility}>
						<span>{subject.value}</span>
						<div
							className={`formSelectOptions ${showSubject ? 'show' : 'hide'}`}
						>
							<span onClick={(e) => getInputSubject(e, 1)}>
								Quero uma proposta
							</span>
							<span onClick={(e) => getInputSubject(e)}>
								Quero fazer parte do time System
							</span>
							<span onClick={(e) => getInputSubject(e, 2)}>
								Quero ser um parceiro System
							</span>
							<span onClick={(e) => getInputSubject(e, 3)}>
								{' '}
								Quero fazer uma reclamação
							</span>
						</div>
					</div>
					{subjectError ? (
						<span className="error">
							Favor selecionar um motivo de contato no campo acima.
						</span>
					) : (
						''
					)}

					<input
						className="home-form-textarea"
						type="textarea"
						placeholder="Mensagem*"
						onChange={(e) => setMessage(e.target.value)}
						required
					></input>
					<div className="politics-form-wrapper">
						<input type="checkbox" id="home-form" required></input>
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
