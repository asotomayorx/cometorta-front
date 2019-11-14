import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import layout from "../layout";
import { Consumer } from "../store/appContext";

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
											<div className="col-sm-6">
												<a
													href="#addEmployeeModal"
													className="btn btn-success"
													data-toggle="modal">
													<i
														className="material-icons"
														data-toggle="tooltip"
														title=""
														data-original-title="Edit"
													/>{" "}
													<Link to="/clientsAdd">
														<span>Agregar nuevo Cliente</span>
													</Link>
													<span />
												</a>
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
															<a
																href="#deleteEmployeeModal"
																className="btn btn-success"
																data-toggle="modal">
																<i className="material-icons ml-auto"></i>{" "}
																<span>Editar</span>
															</a>
															&nbsp;
															<a
																href="#deleteEmployeeModal"
																className="btn btn-danger"
																data-toggle="modal">
																<i className="material-icons ml-auto"></i>{" "}
																<span>Borrar</span>
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
			</>
		);
	}
}
