import React from "react";
import { Link } from "react-router-dom";

import "../../styles/demo.scss";

export const ClientsAdd = () => (
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
							/>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="container">
			<div className="card">
				<div className="card-footer text-right">
					<button type="button" className="btn btn-secondary">
						Volver a Clientes
					</button>
					<button type="button" className="btn btn-primary ml-1">
						Guardar
					</button>
				</div>
			</div>

			<br />
			<br />

			<Link to="/clientsAdd">
				<button className="btn btn-primary">Volver a Casa</button>
			</Link>
		</div>
	</>
);
