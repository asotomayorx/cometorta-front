import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import layout from "../layout";
import { Consumer } from "../store/appContext";

export class Campains extends React.Component {
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
							<div className="container">
								<div className="table-wrapper">
									<div className="table-title">
										<br />
										<br />

										<div className="row">
											<div className="col-sm-6">
												<h2>
													Administrador de
													<b> Campaña</b>
												</h2>
											</div>
											<div className="col-sm-6">
												<Link to="/campainsAdd" className="btn btn-success" data-toggle="modal">
													<i
														className="material-icons"
														data-toggle="tooltip"
														title=""
														data-original-title="Edit"
													/>
													<span>Agregar nueva Campaña</span>
												</Link>
											</div>
										</div>
									</div>
									<table className="table table-striped table-hover">
										<thead>
											<tr>
												<th />
												<th>Comuna</th>
												<th>Persona/Empresa</th>
												<th>Fecha de Termino</th>
												<th>Presupuesto</th>
												<th>Editar/Borrar</th>
											</tr>
										</thead>
										<tbody>
											{store.campaigns.map((item, i) => {
												return (
													<tr key={i}>
														<td>
															<input
																type="checkbox"
																id="checkbox1"
																name="options[]"
																value="1"
															/>
														</td>
														<td>{item.villages_id == 1 ? "Curicó" : "Comuna"}</td>
														<td>cliente</td>
														<td>{item.endDate}</td>
														<td>{item.budget}</td>
														<td>
															<a
																href="#deleteEmployeeModal"
																className="btn btn-success"
																data-toggle="modal">
																<i className="material-icons ml-auto"></i>{" "}
																<span>Editar</span>
															</a>
														</td>
													</tr>
												);
											})}
										</tbody>
									</table>
								</div>
							</div>
						);
					}}
				</Consumer>
				<div className="container">
					<div className="card">
						<div className="card-footer text-right">
							<Link to="/clients" className="btn btn-secondary">
								Volver a Clientes
							</Link>
						</div>
					</div>
				</div>
			</>
		);
	}
}
