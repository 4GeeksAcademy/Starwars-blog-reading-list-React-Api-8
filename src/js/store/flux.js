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
			vehicles:[],


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
					// Obtener la lista de personas
					const result = await fetch('https://www.swapi.tech/api/people/');
					const data = await result.json();
					const peopleArray = data.results;
					console.log(peopleArray);
					
					// Función para obtener detalles de cada persona
					const fetchAllPeopleDetails = async () => {
						const detailedPeople = await Promise.all(
							peopleArray.map(async (person) => {
								try {
									const personResponse = await fetch(person.url);
									const personData = await personResponse.json();
									return {
										uid: personData.result.uid,  // Obtener el UID de la persona
										description: personData.result.description,  // Obtener la descripción de la persona
										...personData.result.properties  // Obtener las propiedades
									};
								} catch (error) {
									console.error('Error al obtener los detalles de la person:', error);
									return {};  // En caso de error, retornar un objeto vacío
								}
							})
						);
						// Actualizar el store con todos los detalles obtenidos
						setStore({ people: detailedPeople });
						console.log('El nuevo store.people ahora contiene esto:', getStore().people);
					};
			
					fetchAllPeopleDetails(); // Ejecutar la función
					
				} catch (error) {
					console.error('erro al obtener persona:', error);
				}
			},

			// getPlanets:()=>{
			// 	fetch("https://www.swapi.tech/api/planets")
			// 	.then((response)=>response.json())
			// 	.then((data)=>setStore({planets:data.results}))
			// 	.catch((error=>console.log(error)))
			// },

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

			getPlanets: async () => {
				try {
					// Obtener la lista de personas
					const result = await fetch('https://www.swapi.tech/api/planets');
					const data = await result.json();
					const planetsArray = data.results;
					console.log(planetsArray);
					
					// Función para obtener detalles de cada persona
					const fetchAllPlanetsDetails = async () => {
						const detailedPlanet = await Promise.all(
							planetsArray.map(async (planet) => {
								try {
									const planetResponse = await fetch(planet.url);
									const planetData = await planetResponse.json();
									return {
										uid: planetData.result.uid,  // Obtener el UID de la persona
										description: planetData.result.description,  // Obtener la descripción de la persona
										...planetData.result.properties  // Obtener las propiedades
									};
								} catch (error) {
									console.error('Error al obtener los detalles del planeta :', error);
									return {};  // En caso de error, retornar un objeto vacío
								}
							})
						);
						// Actualizar el store con todos los detalles obtenidos
						setStore({ planets: detailedPlanet });
						console.log('El nuevo store.planets ahora contiene esto:', getStore().planets);
					};
			
					fetchAllPlanetsDetails(); // Ejecutar la función
					
				} catch (error) {
					console.error('erro al obtener planeta:', error);
				}
			},

			getPlanets: async () => {
				try {
					// Paso 1: Obtener la lista de planetas
					const result = await fetch('https://www.swapi.tech/api/planets');
					const data = await result.json();
					const planetsArray = data.results;
					console.log(planetsArray);
					
					// Paso 2: Función para obtener detalles de cada planeta
					const fetchAllPlanetsDetails = async () => {
						const detailedPlanets = await Promise.all(
							planetsArray.map(async (planet) => {
								try {
									// Obtener detalles de cada planeta
									const planetResponse = await fetch(planet.url);
									const planetData = await planetResponse.json();
									
									// Retornar un objeto con UID, descripción y propiedades
									return {
										uid: planetData.result.uid,  // Obtener el UID del planeta
										description: planetData.result.description,  // Obtener la descripción del planeta
										...planetData.result.properties  // Obtener las propiedades del planeta
									};
								} catch (error) {
									// Manejo de errores al obtener detalles del planeta
									console.error('Error al obtener los detalles del planeta:', error);
									return {};  // En caso de error, retornar un objeto vacío
								}
							})
						);
						
						// Paso 3: Actualizar el store con todos los detalles obtenidos
						setStore({ planets: detailedPlanets });
						console.log('El nuevo store.planets ahora contiene esto:', getStore().planets);
					};
			
					// Ejecutar la función para obtener detalles de todos los planetas
					fetchAllPlanetsDetails();
					
				} catch (error) {
					// Manejo de errores al obtener la lista de planetas
					console.error('Error al obtener los planetas:', error);
				}
			},

			getVehicles: async () => {
				try {
					// Obtener la lista de personas
					const result = await fetch('https://www.swapi.tech/api/vehicles');
					const data = await result.json();
					const vehiclesArray = data.results;
					console.log(vehiclesArray);
					
					// Función para obtener detalles de cada persona
					const fetchAllVehiclesDetails = async () => {
						const detailedVehicles = await Promise.all(
							vehiclesArray.map(async (vehicle) => {
								try {
									const vehicleResponse = await fetch(vehicle.url);
									const vehicleData = await vehicleResponse.json();
									return {
										uid: vehicleData.result.uid,  // Obtener el UID de la persona
										description: vehicleData.result.description,  // Obtener la descripción de la persona
										...vehicleData.result.properties  // Obtener las propiedades
									};
								} catch (error) {
									console.error('Error al obtener los detalles del vehicles :', error);
									return {};  // En caso de error, retornar un objeto vacío
								}
							})
						);
						// Actualizar el store con todos los detalles obtenidos
						setStore({ vehicles: detailedVehicles });
						console.log('El nuevo store.vehicles ahora contiene esto:', getStore().vehicles);
					};
			
					fetchAllVehiclesDetails(); // Ejecutar la función
					
				} catch (error) {
					console.error('erro al obtener vehicles:', error);
				}
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
