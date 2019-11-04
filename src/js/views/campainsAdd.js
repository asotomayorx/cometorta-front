import React from "react";
import { Link } from "react-router-dom";

import "../../styles/demo.scss";

export const CampainsAdd = () => (
	<>
		<br />
		<br />

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
						<div className="form-group col-md-6">
							<label htmlFor="formGroupExampleInput">Mensaje SMS</label>
							<textarea className="form-control" rows="5" id="comment" />
						</div>
						<div className="form-group col-md-6">
							<label htmlFor="formGroupExampleInput">Mensaje Email</label>
							<textarea className="form-control" rows="5" id="comment" placeholder="WYSIWYG" />
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

			<Link to="/campainsAdd">
				<button className="btn btn-primary">Volver a Casa</button>
			</Link>
		</div>
	</>
);
