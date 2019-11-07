import React from "react";
import "../../styles/home.scss";
import { Consumer } from "../store/appContext";

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.actionsContext = null;
		this.state = {
			inputs: {}
		};
	}

	// Guarda datos del input en el state
	onHandleChange = e => {
		this.setState({
			inputs: {
				...this.state.inputs,
				[e.target.name]: e.target.value
			}
		});
	};

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
															placeholder="Correo"
															onChange={this.onHandleChange}
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
															placeholder="Contraseña"
															onChange={this.onHandleChange}
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
														<button type="submit" className="btn btn-primary">
															Ingresar
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
