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
			login: (data, router) => {
				if (!data.username.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
					return alert("Por favor ingresa un email correctamente");
				}

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
							router.push("clients/");
						} else {
							console.log(response);
							alert(response.ERROR);
						}
					});
			},
			register: (data, router) => {
				if (!data.username.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
					return alert("Por favor ingresa un email correctamente");
				}

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
						if (response.username) {
							alert("Se registró al usuario " + response.username);
							console.log("response", response);
						} else {
							alert(response.ERROR);
						}
					});
			},
			cerrarSesion: router => {
				setStore({ token: null });
				router.push("/");
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
			ClientsAdd: (data, router) => {
				console.log(data);
				if (
					data.name == "" ||
					data.name == undefined ||
					data.rut == "" ||
					data.rut == undefined ||
					data.direccion == "" ||
					data.direccion == undefined ||
					data.website == "" ||
					data.website == undefined ||
					data.email == "" ||
					data.email == undefined ||
					data.phone == "" ||
					data.phone == undefined
				) {
					return alert("Faltan datos por rellenar");
				}
				if (isNaN(data.phone)) {
					return alert("Ingresa un telefono correcto");
				}
				if (isNaN(data.rut) || data.rut > 1000000000 || data.rut < 100000000) {
					return alert("Ingresa un Rut correcto");
				}
				if (!data.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
					return alert("Por favor ingresa un email correctamente");
				}

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
						if (response.ERROR) {
							return alert(response.ERROR);
						} else {
							getActions().getClients();
							alert("Se agregó el nuevo cliente ", response.name);
							router.push("clients/");
							console.log("nuevo cliente", response);
						}
					});
			},
			getCampaigns: (client_id, router) => {
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
						router.push("/campains/");
					});
			},
			campainsAdd: (data, router) => {
				data.sms = "no hay sms aun";
				console.log("data", data);
				if (
					data.budget == "" ||
					data.budget == undefined ||
					data.villages_id == "" ||
					data.villages_id == undefined ||
					data.mail == "" ||
					data.mail == undefined ||
					data.days_before == "" ||
					data.days_before == undefined ||
					data.endDate == "" ||
					data.endDate == undefined
				) {
					return alert("Faltan datos por rellenar");
				}
				if (data.endDate.match(/^\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/i)) {
					return alert("Ingresar fecha de termino en formato correcto");
				}
 
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
						getActions().getCampaigns(response.client_id, router);
						alert("se agregó " + response.endDate);

						getActions().activateCampaign(response);
					});
			},
			activateCampaign: newCampaign => {
				fetch("http://localhost:3000/village/" + newCampaign.villages_id, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(newCampaign)
				})
					.then(res => {
						return res.json();
					})
					.then(response => {
						console.log(response);
					});
			}
		}
	};
};
export default getState;
