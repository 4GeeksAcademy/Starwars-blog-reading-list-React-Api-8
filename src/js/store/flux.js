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

			getPeople: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(data => {
						const peopleArray = data.results;
						
						// Usamos Promise.all para ejecutar todas las solicitudes en paralelo
						const fetchAllPeopleDetails = async () => {
							const detailedPeople = await Promise.all(
								peopleArray.map(async (person) => {
									const personResponse = await fetch(person.url);
									const personData = await personResponse.json();
									return personData.result.properties;
								})
							);
			
							// Actualizamos el store con todos los detalles obtenidos
							setStore({ people: detailedPeople });
						};
			
						fetchAllPeopleDetails(); // Ejecutamos la función
					})
					.catch(error => console.log(error));
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

			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(response => response.json())
					.then(data => {
						const planetsArray = data.results;
						console.log(planetsArray);
			
						// Usamos Promise.all para ejecutar todas las solicitudes en paralelo
						const fetchAllPlanetDetails = async () => {
							const detailedPlanets = await Promise.all(
								planetsArray.map(async (planet) => {
									const planetResponse = await fetch(planet.url);
									const planetData = await planetResponse.json();
									return planetData.result.properties;
								})
							);
							
							// Actualizamos el store con todos los detalles obtenidos
							setStore({ planets: detailedPlanets });
						};
			
						fetchAllPlanetDetails(); // Ejecutamos la función
					})
					.catch(error => console.log(error));
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
