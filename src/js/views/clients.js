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
											<tr>
												<td>
													<span className="custom-checkbox" />
												</td>
												<td>Thomas Hardy</td>
												<td>thomashardy@mail.com</td>
												<td>89 Chiaroscuro Rd, Portland, USA</td>
												<td>(171) 555-2222</td>
												<td>
													<a
														href="#deleteEmployeeModal"
														className="btn btn-success"
														data-toggle="modal">
														<i className="material-icons ml-auto"></i> <span>Editar</span>
													</a>
													&nbsp;
													<a
														href="#deleteEmployeeModal"
														className="btn btn-danger"
														data-toggle="modal">
														<i className="material-icons ml-auto"></i> <span>Borrar</span>
													</a>
												</td>
											</tr>
											<tr>
												<td />
												<td>Dominique Perrier</td>
												<td>dominiqueperrier@mail.com</td>
												<td>Obere Str. 57, Berlin, Germany</td>
												<td>(313) 555-5735</td>
												<td>
													<a
														href="#deleteEmployeeModal"
														className="btn btn-success"
														data-toggle="modal">
														<i className="material-icons ml-auto"></i> <span>Editar</span>
													</a>
													&nbsp;
													<a
														href="#deleteEmployeeModal"
														className="btn btn-danger"
														data-toggle="modal">
														<i className="material-icons ml-auto"></i> <span>Borrar</span>
													</a>
												</td>
											</tr>
											<tr>
												<td />
												<td>Maria Anders</td>
												<td>mariaanders@mail.com</td>
												<td>25, rue Lauriston, Paris, France</td>
												<td>(503) 555-9931</td>
												<td>
													<a
														href="#deleteEmployeeModal"
														className="btn btn-success"
														data-toggle="modal">
														<i className="material-icons ml-auto"></i> <span>Editar</span>
													</a>
													&nbsp;
													<a
														href="#deleteEmployeeModal"
														className="btn btn-danger"
														data-toggle="modal">
														<i className="material-icons ml-auto"></i> <span>Borrar</span>
													</a>
												</td>
											</tr>
											<tr>
												<td />
												<td>Fran Wilson</td>
												<td>franwilson@mail.com</td>
												<td>C/ Araquil, 67, Madrid, Spain</td>
												<td>(204) 619-5731</td>
												<td>
													<a
														href="#deleteEmployeeModal"
														className="btn btn-success"
														data-toggle="modal">
														<i className="material-icons ml-auto"></i> <span>Editar</span>
													</a>
													&nbsp;
													<a
														href="#deleteEmployeeModal"
														className="btn btn-danger"
														data-toggle="modal">
														<i className="material-icons ml-auto"></i> <span>Borrar</span>
													</a>
												</td>
											</tr>
											<tr>
												<td />
												<td>Martin Blank</td>
												<td>martinblank@mail.com</td>
												<td>Via Monte Bianco 34, Turin, Italy</td>
												<td>(480) 631-2097</td>
												<td>
													<a
														href="#deleteEmployeeModal"
														className="btn btn-success"
														data-toggle="modal">
														<i className="material-icons ml-auto"></i> <span>Editar</span>
													</a>
													&nbsp;
													<a
														href="#deleteEmployeeModal"
														className="btn btn-danger"
														data-toggle="modal">
														<i className="material-icons ml-auto"></i> <span>Borrar</span>
													</a>
												</td>
											</tr>
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
