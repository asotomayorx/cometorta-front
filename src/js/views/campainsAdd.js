import React from "react";
import { Link } from "react-router-dom";
import layout from "../layout";
import { Consumer } from "../store/appContext";

import InputHTML from "../component/inputHtml";
import "../../styles/demo.scss";

export class CampainsAdd extends React.Component {
	constructor(props) {
		super(props);
		this.actionsContext = null;
		this.state = {
			inputs: {}
		};
	}

	componentDidMount() {}
	// Guarda datos del input en el state
	onHandleChange = e => {
		if (e.target !== null) {
			this.setState({
				inputs: {
					...this.state.inputs,
					[e.target.name]: e.target.value
				}
			});
		} else if (e.detail !== null) {
			this.setState({
				inputs: {
					...this.state.inputs,
					[e.detail.name]: e.detail.value
				}
			});
		}
	};
	onHandleSave = e => {
		// PENDIENTE: GENERAR UN COMPONENTE QUE GUARDE ESTO! https://es.reactjs.org/docs/refs-and-the-dom.html
		e.preventDefault();
		console.log("GUARDAR", this.state.inputs);
	};

	render() {
		return (
			<>
				<Consumer>
					{({ store, actions }) => {
						return (
							<>
								<div className="container">
									<div className="card">
										<div className="card-header text-center">
											<b>Registro de Campaña</b>
										</div>

										<div className="card-body">
											<div className="alert alert-danger" role="alert">
												Faltan algunos campos.
											</div>

											<div className="form-row">
												<div className="form-group col-md-4">
													<label htmlFor="formGroupExampleInput">Fecha de Termino</label>
													<input
														type="text"
														className="form-control"
														id="formGroupExampleInput"
														placeholder="DD/MM/AAAA"
														pattern="[A-Za-z]{25}"
														onChange={this.onHandleChange}
														name="Termino"
													/>
												</div>
												<div className="form-group col-md-4">
													<label htmlFor="formGroupExampleInput">Presupuesto</label>
													<input
														type="number"
														className="form-control"
														id="formGroupExampleInput"
														placeholder="$100.000"
														pattern="[0-9]{3}"
														onChange={this.onHandleChange}
														name="presupuesto"
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
														onChange={this.onHandleChange}
														name="Comuna"
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
														onChange={this.onHandleChange}
														name="Anticipacion"
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
														onChange={this.onHandleChange}
														name="SMS"
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
														onChange={this.onHandleChange}
														name="Correo"
													/>
												</div>
												<div className="form-group col-md-6">
													<label htmlFor="formGroupExampleInput">Mensaje SMS</label>
													<InputHTML name="msg-email" onChange={this.onHandleChange} />
												</div>
												<div className="form-group col-md-6">
													<label htmlFor="formGroupExampleInput">Mensaje Email</label>
													<InputHTML name="msg-sms" onChange={this.onHandleChange} />
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
												onClick={e => this.onHandleSave(e)}>
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
