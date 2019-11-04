import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";

import { Single } from "./views/single";
import { CampainsAdd } from "./views/campainsAdd";
import { Campains } from "./views/campains";
import { ClientsAdd } from "./views/clientsAdd";
import { Clients } from "./views/clients";
import { Status } from "./views/status";
import { Report } from "./views/report";
import { OlvidoPassword } from "./views/olvidoPassword";
import injectContext from "./store/appContext";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Switch>
						<Route exact path="/" component={Home} />

						<Route path="/demo" component={Demo} />
						<Route path="/clientsAdd" component={ClientsAdd} />
						<Route path="/clients" component={Clients} />
						<Route path="/status" component={Status} />
						<Route path="/report" component={Report} />
						<Route path="/single/:theid" component={Single} />
						<Route path="/campainsAdd" component={CampainsAdd} />
						<Route path="/campains" component={Campains} />
						<Route path="/olvidoPassword" component={OlvidoPassword} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
