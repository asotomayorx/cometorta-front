import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import layout from "../layout";
import { Consumer } from "../store/appContext";
import PropTypes from "prop-types";

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

	render() {
		return (
			<>
				<Consumer>
					{({ store, actions }) => {
						if (!store.token) {
							return alert("usuario no registrado");
						}
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
													<b> Clientes</b>
												</h2>
											</div>
											<div className="col-sm-3">
												<Link to="/clientsAdd" className="btn btn-success" data-toggle="modal">
													<i
														className="material-icons"
														data-toggle="tooltip"
														title=""
														data-original-title="Edit"
													/>
													<span>Agregar nuevo Cliente</span>
												</Link>
											</div>
											<div className="col-sm-3">
												<button
													onClick={() => actions.cerrarSesion(this.props.history)}
													type="button"
													className="btn btn-danger"
													data-toggle="modal">
													<span>Cerrar sesion</span>
												</button>
											</div>
										</div>
									</div>
									<table className="table table-striped table-hover">
										<thead>
											<tr>
												<th />
												<th>Nombre</th>
												<th>Email</th>
												<th>Direccion</th>
												<th>Telefono</th>
												<th>Editar/Borrar</th>
											</tr>
										</thead>
										<tbody>
											{store.clients.map((item, i) => {
												return (
													<tr key={i}>
														<td>
															<span className="custom-checkbox" />
														</td>
														<td>{item.name}</td>
														<td>{item.email}</td>
														<td>{item.direccion}</td>
														<td>{item.phone}</td>
														<td>
															<button
																onClick={() =>
																	actions.getCampaigns(item.id, this.props.history)
																}
																type="button"
																className="btn btn-success"
																data-toggle="modal">
																<i className="material-icons ml-auto"></i>
																<span>Campañas</span>
															</button>
															&nbsp;
															<button
																onClick={() =>
																	actions.deleteClient(item.id, this.props.history)
																}
																type="button"
																className="btn btn-danger"
																data-toggle="modal">
																<i className="material-icons ml-auto"></i>
																<span>Borrar</span>
															</button>
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
			</>
		);
	}
}

Clients.propTypes = {
	history: PropTypes.any
};
