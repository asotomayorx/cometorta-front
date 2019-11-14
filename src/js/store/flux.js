const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			name: ""
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
				}).then(resp => {});

				console.log("SAVE DATA COMPANY CONTEXT", data);
			},
			personas: () => {
				console.log("hola");

				fetch("http://localhost:3000/persons")
					.then(res => res.json())
					.then(response => {
						console.log(response);
					}); 
			},
			login: data => {
				console.log(data);

				fetch("http://localhost:3000/login", {
					method: "POST",
					body: JSON.stringify("data", data)
				})
					.then(res => {
						console.log("hola");
						res.json();
					})
					.then(response => {
						console.log("response", response);
					});
			},
			register: data => {
				console.log(data);

				fetch("http://localhost:3000/register", {
					method: "POST",
					body: JSON.stringify("data", data)
				})
					.then(res => {
						console.log("hola");
						res.json();
					})
					.then(response => {
						console.log("response", response);
					});
			}
		}
	};
};

export default getState;
