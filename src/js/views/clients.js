import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../store/appContext";

import "../../styles/demo.scss";

export class Clients extends React.Component {
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

	onHandleSubmit = () => {
		console.log("MIS VALORES", this.state.inputs);

		//  actions.saludar("Jorge")
		this.actionsContext.saveDataCompany(this.state.inputs);
	};

	render() {
		return (
			<>
				<Consumer>
					{({ store, actions }) => {
						this.actionsContext = actions;
						return (
							<>
								<div className="container mb-5">
									<div className="card">
										<div className="card-header text-center">
											<b>Registro de Cliente</b>
										</div>

										<div className="card-body">
											<div className="alert alert-danger" role="alert">
												Faltan algunos campos.
											</div>

											<div className="form-row">
												<div className="form-group col-md-4">
													<label htmlFor="formGroupExampleInput">Empresa</label>
													<input
														type="text"
														className="form-control"
														id="formGroupExampleInput"
														name="companyName"
														placeholder="Razón Social"
														pattern="[A-Za-z]{25}"
														onChange={this.onHandleChange}
													/>
												</div>

												<div className="form-group col-md-4">
													<label htmlFor="formGroupExampleInput">Rut</label>
													<input
														type="text"
														className="form-control"
														id="formGroupExampleInput"
														placeholder="98.765.432-1"
														pattern="[0-9]{3}"
														name="companyRut"
														onChange={this.onHandleChange}
													/>
												</div>
												<div className="form-group col-md-4">
													<label htmlFor="formGroupExampleInput">Dirección</label>
													<input
														type="text"
														className="form-control"
														id="formGroupExampleInput"
														placeholder="Calle, Comuna"
														pattern="[A-Za-z]{25}"
														name="Address"
														onChange={this.onHandleChange}
													/>
												</div>
											</div>

											<div className="form-row">
												<div className="form-group col-md-4">
													<label htmlFor="formGroupExampleInput">Página Web</label>
													<input
														type="text"
														className="form-control"
														id="formGroupExampleInput"
														placeholder="http://www.pastelera.cl"
														name="WebSite"
														onChange={this.onHandleChange}
													/>
												</div>

												<div className="form-group col-md-4">
													<label htmlFor="formGroupExampleInput">E-mail</label>
													<input
														type="text"
														className="form-control"
														id="formGroupExampleInput"
														placeholder="contacto@pastelera.cl"
														pattern="[A-Za-z]{25}"
														name="E-mail"
														onChange={this.onHandleChange}
													/>
												</div>

												<div className="form-group col-md-4">
													<label htmlFor="formGroupExampleInput">Telefono</label>
													<input
														type="text"
														className="form-control"
														id="formGroupExampleInput"
														placeholder="+56 9 8765 4321"
														pattern="[0-9]{11}"
														name="Telefono"
														onChange={this.onHandleChange}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="container">
									<div className="card">
										<div className="card-header text-center">
											<b>Registro de Campaña</b>
										</div>

										<div className="card-body">
											<div className="alert alert-danger" role="alert">
												Faltan algunos campos.
												<br />
											</div>

											<div className="form-row">
												<div className="form-group col-md-4">
													<label htmlFor="formGroupExampleInput">Fecha de Inicio</label>
													<input
														type="text"
														className="form-control"
														id="formGroupExampleInput"
														placeholder="DD/MM/AAAA"
														pattern="[A-Za-z]{25}"
														name="Fecha inicio"
														onChange={this.onHandleChange}
													/>
												</div>
												<div className="form-group col-md-4">
													<label htmlFor="formGroupExampleInput">Fecha de Termino</label>
													<input
														type="text"
														className="form-control"
														id="formGroupExampleInput"
														placeholder="DD/MM/AAAA"
														pattern="[0-9]{3}"
														name="Fecha termino"
														onChange={this.onHandleChange}
													/>
												</div>
												<div className="form-group col-md-4">
													<label htmlFor="formGroupExampleInput">Comuna</label>
													<input
														type="text"
														className="form-control"
														id="formGroupExampleInput"
														placeholder="Desplegable"
														pattern="[A-Za-z]{25}"
														name="Comuna"
														onChange={this.onHandleChange}
													/>
												</div>
											</div>

											<div className="form-row">
												<div className="form-group col-md-4">
													<label htmlFor="formGroupExampleInput">
														Anticipación del Mensaje
													</label>
													<input
														type="text"
														className="form-control"
														id="formGroupExampleInput"
														placeholder="Número de días"
														name="Dias de anticipacion"
														onChange={this.onHandleChange}
													/>
												</div>

												<div className="form-group col-md-4">
													<label htmlFor="formGroupExampleInput">Número de SMS</label>
													<input
														type="text"
														className="form-control"
														id="formGroupExampleInput"
														placeholder="Limite diario"
														pattern="[A-Za-z]{25}"
														name="Numero de SMS"
														onChange={this.onHandleChange}
													/>
												</div>

												<div className="form-group col-md-4">
													<label htmlFor="formGroupExampleInput">Número de Correos</label>
													<input
														type="text"
														className="form-control"
														id="formGroupExampleInput"
														placeholder="Limite diario"
														pattern="[0-9]{11}"
														name="Numero de correos"
														onChange={this.onHandleChange}
													/>
												</div>
												<div className="form-group col-md-6">
													<label htmlFor="formGroupExampleInput">Mensaje SMS</label>
													<textarea
														className="form-control"
														rows="5"
														id="comment"
														onChange={this.onHandleChange}
														name="ComentarioSMS"
													/>
												</div>
												<div className="form-group col-md-6">
													<label htmlFor="formGroupExampleInput">Mensaje Email</label>
													<textarea
														className="form-control"
														rows="5"
														id="comment"
														onChange={this.onHandleChange}
														name="ComentarioEmail"
													/>
												</div>
											</div>
										</div>

										<div className="card-footer text-right">
											<button type="button" className="btn btn-secondary">
												Volver
											</button>
											<button
												type="button"
												className="btn btn-primary ml-1"
												onClick={() => this.onHandleSubmit()}>
												Guardar
											</button>
										</div>
									</div>

									<br />
									<br />

									<Link to="/Clients">
										<button className="btn btn-primary">Back home</button>
									</Link>
								</div>
							</>
						);
					}}
				</Consumer>
			</>
		);
	}
}
