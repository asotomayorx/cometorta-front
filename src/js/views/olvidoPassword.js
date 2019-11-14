import React from "react";
import "../../styles/home.scss";

export const OlvidoPassword = () => {
	return (
		<div className="container">
			<br />
			<br />
			<br />
			<br />

			<div className="row">
				<div className="col-0 col-sm-1 col-md-2 col-lg-3 col-xl-4" />
				<div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4" />
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
			</div>
		</div>
	);
};
