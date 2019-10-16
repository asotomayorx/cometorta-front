import React from "react";
import { Link } from "react-router-dom";

import "../../styles/demo.scss";

export const Clients = () => (
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
								placeholder="Razón Social"
								pattern="[A-Za-z]{25}"
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

				<div className="card-footer text-right">
					<button type="button" className="btn btn-secondary">
						Volver
					</button>
					<button type="button" className="btn btn-primary ml-1">
						Guardar
					</button>
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
							/>
						</div>
					</div>

					<div className="form-row">
						<div className="form-group col-md-4">
							<label htmlFor="formGroupExampleInput">Anticipación del Mensaje</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Número de días"
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
							/>
						</div>
					</div>
				</div>

				<div className="card-footer text-right">
					<button type="button" className="btn btn-secondary">
						Volver
					</button>
					<button type="button" className="btn btn-primary ml-1">
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
