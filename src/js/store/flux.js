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
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
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
			// getPeople: () => {
			//     fetch("https://www.swapi.tech/api/people")
			//         .then(response => response.json())
			//         .then(data => {
			//             const people = data.results;
			//             let peopleDetails = [];

			//             // Aqui usamos un bucle for para hacer fetchs adicionales(que obtengan las propiedades de la person)
			//             const fetchDetails = async () => {
			//                 for (let i = 0; i < people.length; i++) {
			//                     const personUrl = people[i].url;
			//                     const response = await fetch(personUrl);
			//                     const personDetails = await response.json();
			//                     peopleDetails.push(personDetails.result.properties);
			//                 }
			//                 // Una vez que tenemos todos los detalles, actualizamos el store
			//                 setStore({ people: peopleDetails });
			//             };

			//             fetchDetails();//aqui llamamos a la funcion fecthDetails porque si no lo hicieramos no se ejecutaria la funcion que simplemente en el paso anterior solo la declaramos y construimos su logica
			//         })
			//         .catch(error => console.log(error));
			// },

			getPeople: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people");
					const data = await response.json();

					// Genera un array de promesas para obtener los detalles de cada persona
					const personasDetailsPromises = data.results.map(async (person) => {
						const responseDetails = await fetch(person.url);
						const dataDetails = await responseDetails.json();
						return dataDetails.result;
					});

					// Resuelve todas las promesas en paralelo
					const personasDetails = await Promise.all(personasDetailsPromises);

					// Actualiza el store con los detalles de las personas
					setStore({ people: personasDetails });
				} catch (error) {
					console.error("Error fetching people:", error);
				}
			},

			// getPlanets:()=>{
			// 	fetch("https://www.swapi.tech/api/planets")
			// 	.then((response)=>response.json())
			// 	.then((data)=>setStore({planets:data.results}))
			// 	.catch((error=>console.log(error)))
			// },

			getPlanets: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets");
					const data = await response.json();

					// Genera un array de promesas para obtener los detalles de cada planeta
					const planetsDetailsPromises = data.results.map(async (planet) => {
						const planetResponse = await fetch(planet.url);
						const planetData = await planetResponse.json();
						return planetData.result;
					});

					// Resuelve todas las promesas en paralelo
					const planetsDetails = await Promise.all(planetsDetailsPromises);

					// Actualiza el store con los detalles de los planetas
					setStore({ planets: planetsDetails });
				} catch (error) {
					console.error("Error fetching planets:", error);
				}
			},

			getVehicles: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/vehicles");
					const data = await response.json();

					// Genera un array de promesas para obtener los detalles de cada vehículo
					const vehiclesDetailsPromises = data.results.map(async (vehicle) => {
						const vehicleResponse = await fetch(vehicle.url);
						const vehicleData = await vehicleResponse.json();
						return vehicleData.result;
					});

					// Resuelve todas las promesas en paralelo
					const vehiclesDetails = await Promise.all(vehiclesDetailsPromises);

					// Actualiza el store con los detalles de los vehículos
					setStore({ vehicles: vehiclesDetails });
				} catch (error) {
					console.error("Error fetching vehicles:", error);
				}
			},

			// getPlanets: () => {
			//     fetch("https://www.swapi.tech/api/planets")
			//         .then(response => response.json())
			//         .then(data => {
			//             const planets = data.results;
			// 			console.log(data.results)
			//             let planetsDetails = [];

			//             // Aqui usamos un bucle for para hacer fetchs adicionales(que obtengan las propiedades de la person)
			//             const fetchDetails = async () => {
			//                 for (let i = 0; i < planets.length; i++) {
			//                     const planetsUrl = planets[i].url;
			//                     const response = await fetch(planetsUrl);
			//                     const planetDetail = await response.json();
			//                     planetsDetails.push(planetDetail.result.properties);
			//                 }
			//                 // Una vez que tenemos todos los detalles, actualizamos el store
			//                 setStore({ planets: planetsDetails });
			//             };

			//             fetchDetails();//aqui llamamos a la funcion fecthDetails porque si no lo hicieramos no se ejecutaria la funcion que simplemente en el paso anterior solo la declaramos y construimos su logica
			//         })
			//         .catch(error => console.log(error));
			// },
			/************ FAVORITOS***************/
			addFavorites: (fav) => {
				//Esta línea obtiene el estado actual de "store"
				const store = getStore();
				//Y si no esta incluido en store el favorite que te estoy enviando
				if (!store.favorites.includes(fav)) {
					//entonces actualiza la propiedad favorites del store añadiendole a lo que ya habia en estado actual del store(...store.favorite)),+el nuevo favorito
					setStore({ favorites: [...store.favorites, fav] })
				}
			},
			deleteFavorites: (index) => {
				const store = getStore();
				let newFavorites = store.favorites.filter((_, i) => i !== index)
				setStore({ favorites: newFavorites })
			},










			// getVehicles:()=>{
			// 	fetch("https://www.swapi.tech/api/vehicles")
			// 	.then((response)=>response.json)
			// 	.then((data)=setStore({vehicles:data.results}))
			// }
		}
	};
};

export default getState;
