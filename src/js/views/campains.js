import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import layout from "../layout";

export const Campains = () => {
	return (
		<div className="container">
			<div className="table-wrapper">
				<div className="table-title">
					<div className="row">
						<div className="col-sm-6">
							<h2>
								Manage <b>Employees</b>
							</h2>
						</div>
						<div className="col-sm-6">
							<a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal">
								<i
									className="material-icons"
									data-toggle="tooltip"
									title=""
									data-original-title="Edit"
								/>{" "}
								<span>Add New Employee</span>
							</a>
							<a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal">
								<i className="material-icons"></i> <span>Delete</span>
							</a>
						</div>
					</div>
				</div>
				<table className="table table-striped table-hover">
					<thead>
						<tr>
							<th>
								<span className="custom-checkbox">
									<input type="checkbox" id="selectAll" />
									<label htmlFor="selectAll" />
								</span>
							</th>
							<th>Name</th>
							<th>Email</th>
							<th>Address</th>
							<th>Phone</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<span className="custom-checkbox">
									<input type="checkbox" id="checkbox1" name="options[]" value="1" />
									<label htmlFor="checkbox1" />
								</span>
							</td>
							<td>Thomas Hardy</td>
							<td>thomashardy@mail.com</td>
							<td>89 Chiaroscuro Rd, Portland, USA</td>
							<td>(171) 555-2222</td>
							<td>
								<a href="#editEmployeeModal" className="edit" data-toggle="modal">
									<i
										className="material-icons"
										data-toggle="tooltip"
										title=""
										data-original-title="Edit">
										Edit
									</i>
								</a>
								<a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
									<i
										className="material-icons"
										data-toggle="tooltip"
										title=""
										data-original-title="Delete">
										
									</i>
								</a>
							</td>
						</tr>
						<tr>
							<td>
								<span className="custom-checkbox">
									<input type="checkbox" id="checkbox2" name="options[]" value="1" />
									<label htmlFor="checkbox2" />
								</span>
							</td>
							<td>Dominique Perrier</td>
							<td>dominiqueperrier@mail.com</td>
							<td>Obere Str. 57, Berlin, Germany</td>
							<td>(313) 555-5735</td>
							<td>
								<a href="#editEmployeeModal" className="edit" data-toggle="modal">
									<i
										className="material-icons"
										data-toggle="tooltip"
										title=""
										data-original-title="Edit">
										
									</i>
								</a>
								<a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
									<i
										className="material-icons"
										data-toggle="tooltip"
										title=""
										data-original-title="Delete">
										
									</i>
								</a>
							</td>
						</tr>
						<tr>
							<td>
								<span className="custom-checkbox">
									<input type="checkbox" id="checkbox3" name="options[]" value="1" />
									<label htmlFor="checkbox3" />
								</span>
							</td>
							<td>Maria Anders</td>
							<td>mariaanders@mail.com</td>
							<td>25, rue Lauriston, Paris, France</td>
							<td>(503) 555-9931</td>
							<td>
								<a href="#editEmployeeModal" className="edit" data-toggle="modal">
									<i
										className="material-icons"
										data-toggle="tooltip"
										title=""
										data-original-title="Edit">
										
									</i>
								</a>
								<a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
									<i
										className="material-icons"
										data-toggle="tooltip"
										title=""
										data-original-title="Delete">
										
									</i>
								</a>
							</td>
						</tr>
						<tr>
							<td>
								<span className="custom-checkbox">
									<input type="checkbox" id="checkbox4" name="options[]" value="1" />
									<label htmlFor="checkbox4" />
								</span>
							</td>
							<td>Fran Wilson</td>
							<td>franwilson@mail.com</td>
							<td>C/ Araquil, 67, Madrid, Spain</td>
							<td>(204) 619-5731</td>
							<td>
								<a href="#editEmployeeModal" className="edit" data-toggle="modal">
									<i
										className="material-icons"
										data-toggle="tooltip"
										title=""
										data-original-title="Edit">
										
									</i>
								</a>
								<a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
									<i
										className="material-icons"
										data-toggle="tooltip"
										title=""
										data-original-title="Delete">
										
									</i>
								</a>
							</td>
						</tr>
						<tr>
							<td>
								<span className="custom-checkbox">
									<input type="checkbox" id="checkbox5" name="options[]" value="1" />
									<label htmlFor="checkbox5" />
								</span>
							</td>
							<td>Martin Blank</td>
							<td>martinblank@mail.com</td>
							<td>Via Monte Bianco 34, Turin, Italy</td>
							<td>(480) 631-2097</td>
							<td>
								<a href="#editEmployeeModal" className="edit" data-toggle="modal">
									<i
										className="material-icons"
										data-toggle="tooltip"
										title=""
										data-original-title="Edit">
										
									</i>
								</a>
								<a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
									<i
										className="material-icons"
										data-toggle="tooltip"
										title=""
										data-original-title="Delete">
										
									</i>
								</a>
							</td>
						</tr>
					</tbody>
				</table>
				<div className="clearfix">
					<div className="hint-text">
						Showing <b>5</b> out of <b>25</b> entries
					</div>
					<ul className="pagination">
						<li className="page-item disabled">
							<a href="#">Previous</a>
						</li>
						<li className="page-item">
							<a href="#" className="page-link">
								1
							</a>
						</li>
						<li className="page-item">
							<a href="#" className="page-link">
								2
							</a>
						</li>
						<li className="page-item active">
							<a href="#" className="page-link">
								3
							</a>
						</li>
						<li className="page-item">
							<a href="#" className="page-link">
								4
							</a>
						</li>
						<li className="page-item">
							<a href="#" className="page-link">
								5
							</a>
						</li>
						<li className="page-item">
							<a href="#" className="page-link">
								Next
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
