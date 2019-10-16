import React from "react";
import "../../styles/home.scss";

export const OlvidoPassword = () => {
	return (
		<div className="container">
			<h1>Olvidó su Password?</h1>
			<small className="form-text text-muted">Enviaremos un link para restablecer su password</small>

			<form>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Ingrese su email</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Enter email"
					/>
				</div>

				<button type="submit" className="btn btn-primary ">
					Enviar
				</button>
			</form>
		</div>
	);
};
