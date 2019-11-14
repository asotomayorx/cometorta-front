import React from "react";
import "../../styles/home.scss";
import { Consumer } from "../store/appContext";
import { SSL_OP_MSIE_SSLV2_RSA_PADDING } from "constants";

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.actionsContext = null;
		this.state = {
			username: "",
			password: "",
			roles_id: 1
		};
	}

	// Guarda datos del input en el state
	handleEmail(text) {
		this.setState({
			username: text.target.value
		});
	}
	handlePassword(text) {
		this.setState({
			password: text.target.value
		});
	}

	render() {
		return (
			<>
				<Consumer>
					{({ store, actions }) => {
						return (
							<>
								<div className="container">
									<br />
									<br />
									<br />
									<br />
									<div className="row">
										<div className="col-0 col-sm-1 col-md-2 col-lg-3 col-xl-4" />
										<div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
											<div className="container">
												<nav aria-label="breadcrumb">
													<ol className="breadcrumb">
														<li className="breadcrumb-item active" aria-current="page">
															Home
														</li>
													</ol>
												</nav>
												<form>
													<div className="form-group">
														<label>Usuario</label>
														<input
															type="email"
															className="form-control"
															id="exampleInputEmail1"
															ria-describedby="emailHelp"
															placeholder="Ingrese Correo"
															onInput={text => {
																this.handleEmail(text);
															}}
															name="usuario"
														/>
														<small id="emailHelp" className="form-text text-muted">
															Nunca compartas tu correo y/o contraseña con otros.
														</small>
													</div>
													<div className="form-group">
														<label>Contraseña</label>
														<input
															type="Password"
															className="form-control"
															id="exampleInputPassword1"
															placeholder="Ingrese su contraseña"
															onInput={text => {
																this.handlePassword(text);
															}}
															name="contrasena"
														/>
													</div>
													<div className="form-group form-check">
														<input
															type="checkbox"
															className="form-check-input"
															id="exampleCheck1"
														/>
														<label className="form-check-label">Recordar mi sesión?</label>
													</div>
													<div className="text-center">
														<button
															type="button"
															onClick={() => actions.login(this.state)}
															className="btn btn-primary">
															Login
														</button>
														&nbsp;
														<button
															type="button"
															onClick={() => actions.register(this.state)}
															className="btn btn-primary">
															Register
														</button>
													</div>
												</form>
											</div>
										</div>
										<div className="col-0 col-sm-1 col-md-2 col-lg-3 col-xl-4" />
									</div>
								</div>
							</>
						);
					}}
				</Consumer>
			</>
		);
	}
}
