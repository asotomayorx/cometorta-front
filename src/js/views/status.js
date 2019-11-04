import React from "react";
import "../../styles/home.scss";

export const Status = () => {
	return (
		<div>
			<h1>Reporte empresa ....</h1>
			<form>
				<div className="form-group row">
					<label htmlFor="empresa" className="col-sm-2 col-form-label">
						Empresa:
					</label>
					<div className="col-sm-10">
						<input type="text" readOnly className="form-control-plaintext" id="empresa" value="Castaño" />
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="SMS" className="col-sm-2 col-form-label">
						Numero de SMS enviados:
					</label>
					<div className="col-sm-10">
						<input type="text" readOnly className="form-control-plaintext" id="SMS" value="40" />
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="emails" className="col-sm-2 col-form-label">
						Numero de emails enviados:
					</label>
					<div className="col-sm-10">
						<input type="text" readOnly className="form-control-plaintext" id="emails" value="10" />
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="fechainicio" className="col-sm-2 col-form-label">
						Fecha de inicio:
					</label>
					<div className="col-sm-10">
						<input
							type="text"
							readOnly
							className="form-control-plaintext"
							id="fechainicio"
							value="10-10-2019"
						/>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="fechatermino" className="col-sm-2 col-form-label">
						Fecha de termino:
					</label>
					<div className="col-sm-10">
						<input
							type="text"
							readOnly
							className="form-control-plaintext"
							id="fechatermino"
							value="20-10-2019"
						/>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="diaactual" className="col-sm-2 col-form-label">
						Dia actual de campaña:
					</label>
					<div className="col-sm-10">
						<input type="text" readOnly className="form-control-plaintext" id="diaactual" value="1/10" />
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="mensaje" className="col-sm-2 col-form-label">
						Mensaje y descuento asociado:
					</label>
					<div className="col-sm-10">
						<input
							type="text-area"
							readOnly
							className="form-control-plaintext"
							id="mensaje"
							value="tienes un descuento de 20% en tortas"
						/>
					</div>
				</div>
			</form>
		</div>
	);
};
