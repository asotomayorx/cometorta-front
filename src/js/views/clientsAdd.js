import React from "react";
import { Link } from "react-router-dom";
import "../../styles/demo.scss";
import { Consumer } from "../store/appContext";

export class ClientsAdd extends React.Component {
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
								<br />
								<br />

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
													<label htmlFor="formGroupExampleInput">Nombre</label>
													<input
														type="text"
														className="form-control"
														id="formGroupExampleInput"
														placeholder="Razón Social"
														pattern="[A-Za-z]"
														maxLength="25"
														onChange={this.onHandleChange}
														name="nombre"
													/>
												</div>

												<div className="form-group col-md-4">
													<label htmlFor="formGroupExampleInput">Rut</label>
													<input
														type="text"
														className="form-control"
														id="formGroupExampleInput"
														placeholder="98.765.432-1"
														pattern="[0-9]{1,2}.[0-9]{3}.[0-9]{3}-[0-9Kk]{1}"
														maxLength="12"
														onChange={this.onHandleChange}
														name="rut"
													/>
												</div>
												<div className="form-group col-md-4">
													<label htmlFor="formGroupExampleInput">Dirección</label>
													<input
														type="text"
														className="form-control"
														id="formGroupExampleInput"
														placeholder="Calle, Comuna"
														pattern="[A-Za-z]"
														maxLength="25"
														onChange={this.onHandleChange}
														name="direccion"
													/>
												</div>
											</div>

											<div className="form-row">
												<div className="form-group col-md-4">
													<label htmlFor="formGroupExampleInput">Página Web</label>
													<input
														type="url"
														className="form-control"
														id="formGroupExampleInput"
														placeholder="https://www.pastelera.cl"
														onChange={this.onHandleChange}
														name="website"
													/>
												</div>

												<div className="form-group col-md-4">
													<label htmlFor="formGroupExampleInput">E-mail</label>
													<input
														type="email"
														className="form-control"
														id="formGroupExampleInput"
														placeholder="contacto@pastelera.cl"
														pattern="[A-Za-z]"
														onChange={this.onHandleChange}
														name="email"
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
														onChange={this.onHandleChange}
														name="telefono"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="container">
									<div className="card">
										<div className="card-footer text-right">
											<Link to="/clients" className="btn btn-secondary">
												Volver a Clientes
											</Link>
											<button type="button" className="btn btn-primary ml-1">
												Guardar
											</button>
										</div>
									</div>

									<br />
									<br />

									<Link to="/login">
										<button className="btn btn-primary">Volver a Casa</button>
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
