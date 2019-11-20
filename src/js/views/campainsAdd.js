import React from "react";
import { Link } from "react-router-dom";
import layout from "../layout";
import { Consumer } from "../store/appContext";
import PropTypes from "prop-types";

import InputHTML from "../component/inputHtml";
import "../../styles/demo.scss";

export class CampainsAdd extends React.Component {
	constructor(props) {
		super(props);
		this.actionsContext = null;
		this.state = {
			inputs: {
				admin_id: 1,
				client_id: 1
			}
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
											<div className="form-row">
												<div className="form-group col-md-4">
													<label htmlFor="formGroupExampleInput">Fecha de Termino</label>
													<input
														type="text"
														className="form-control"
														id="formGroupExampleInput"
														placeholder="19/11/21"
														pattern="[A-Za-z]{25}"
														onChange={this.onHandleChange}
														name="endDate"
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
														name="budget"
													/>
												</div>
												<div className="form-group col-md-4">
													<div className="input-group-prepend">
														<label htmlFor="inputGroupSelect01">Comuna</label>
													</div>
													<select
														onChange={this.onHandleChange}
														name="villages_id"
														className="custom-select"
														id="inputGroupSelect01">
														<option selected>Elige la comuna...</option>
														<option value="1">Curicó</option>
														<option value="2">Providencia</option>
														<option value="3">Santiago</option>
													</select>
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
														name="days_before"
													/>
												</div>

												<div className="form-group col-md-4">
													<label htmlFor="formGroupExampleInput">
														Día de inicio de campaña
													</label>
													<input
														type="text"
														className="form-control"
														id="formGroupExampleInput"
														placeholder="19/11/21"
														pattern="[A-Za-z]{25}"
														onChange={this.onHandleChange}
														name="SMS"
													/>
												</div>

												<div className="form-group col-md-6">
													<label htmlFor="formGroupExampleInput">Mensaje SMS</label>
													<textarea
														className="form-control"
														rows="9"
														id="comment"
														onChange={this.onHandleChange}
														value={this.state.value}
														name="sms"
													/>
												</div>
												<div className="form-group col-md-6">
													<label htmlFor="formGroupExampleInput">Mensaje Email</label>
													<InputHTML
														onChange={this.onHandleChange}
														value={this.state.value}
														name="mail"
													/>
												</div>
											</div>
										</div>

										<div className="card-footer text-right">
											<Link to="/campains" className="btn btn-secondary">
												Volver
											</Link>
											<button
												type="button"
												className="btn btn-primary ml-1"
												onClick={() =>
													actions.campainsAdd(this.state.inputs, this.props.history)
												}>
												Guardar
											</button>
										</div>
									</div>

									<br />
									<br />

									<Link to="/">
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

CampainsAdd.propTypes = {
	history: PropTypes.any
};
