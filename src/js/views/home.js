import React from "react";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div className="container">
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb">
					<li className="breadcrumb-item active" aria-current="page">
						Home
					</li>
				</ol>
			</nav>
			<form>
				<div className="form-group">
					<label>Direccion de correo</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						ria-describedby="emailHelp"
						placeholder="Ingrese correo"
					/>
					<small id="emailHelp" className="form-text text-muted">
						Nunca compartas tu correo y contraseña con otros.
					</small>
				</div>
				<div className="form-group">
					<label>Contraseña</label>
					<input
						type="Password"
						className="form-control"
						id="exampleInputPassword1"
						placeholder="Contraseña"
					/>
				</div>
				<div className="form-group form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" />
					<label className="form-check-label">Recordar mis datos</label>
				</div>
				<button type="submit" className="btn btn-primary">
					Ingresar
				</button>
			</form>
		</div>
	);
};
