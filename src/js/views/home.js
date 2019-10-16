import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<form  className='container' > 
			<div className="form-group">
				<label>Email address</label>
				<input
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					ria-describedby="emailHelp"
					placeholder="Enter email"
				/>
				<small id="emailHelp" className="form-text text-muted">
					Nunca compartas tu correo y contraseña con otros.
				</small>
			</div>
			<div className="form-group">
				<label>Password</label>
				<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
			</div>
			<div className="form-group form-check">
				<input type="checkbox" className="form-check-input" id="exampleCheck1" />
				<label className="form-check-label">Check me out</label>
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
};
