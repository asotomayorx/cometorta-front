const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			clients: [],
			campaigns: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			saludar: name => {
				alert("Hola " + name);
			},
			empresa: nombrEmpresa => {
				alert("Coloca nombre " + nombrEmpresa);
			},

			saveDataCompany: data => {
				console.log("hola");

				fetch("http://localhost:3000/campainsAdd", {
					method: "POST",
					body: JSON.stringify(data)
				}).then(resp => {
					return res.json();
				});

				console.log("SAVE DATA COMPANY CONTEXT", data);
			},
			personas: () => {
				console.log("hola");

				fetch("http://localhost:3000/persons")
					.then(res => {
						return res.json();
					})
					.then(response => {
						console.log(response);
					});
			},
			login: data => {
				console.log(data);

				fetch("http://localhost:3000/login", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => {
						return res.json();
					})
					.then(response => {
						//const store = getStore();
						//const {token} = store;
						//getActions().nombredeaccion
						if (response.token) {
							setStore({ token: response.token });
							const store = getStore();
							console.log(store.token);
							document.location.href = "clients/";
						} else {
							console.log(response);
							alert(response.ERROR);
						}
					});
			},
			register: data => {
				console.log(data);

				fetch("http://localhost:3000/register", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => {
						//console.log("hola");
						return res.json();
					})
					.then(response => {
						console.log("response", response);
					});
			},
			getClients: () => {
				fetch("http://localhost:3000/clients", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => {
						//console.log("hola");
						return res.json();
					})
					.then(response => {
						setStore({ clients: response });
						console.log("clients", response);
					});
			},
			ClientsAdd: data => {
				console.log("data", data);
				fetch("http://localhost:3000/clients", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => {
						//console.log("hola");
						return res.json();
					})
					.then(response => {
						getActions().getClients();
						alert("Se agregó el nuevo cliente ", response.name);
						document.location.href = "clients/";
						console.log("nuevo cliente", response);
					});
			},
			getCampaigns: client_id => {
				console.log("data", client_id);
				fetch("http://localhost:3000/campaigns/" + client_id, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => {
						console.log("hola");
						return res.json();
					})
					.then(response => {
						setStore({ campaigns: response });
						console.log("campa;as", getStore().campaigns);
						document.location.href = "campains/";
					});
			},
			campainsAdd: data => {
				console.log("data", data);
				fetch("http://localhost:3000/campainsAdd", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => {
						//console.log("hola");
						return res.json();
					})
					.then(response => {
						getActions().getCampaigns(response.client_id);
						alert("Se agregó la nueva campaña hasta el ", response.endDate);
						document.location.href = "campains/";
						console.log("nueva campana ", response);
					});
			}
		}
	};
};

export default getState;
