import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import CardPeople from "../component/CardPeople.jsx";
import CardPlanet from "../component/CardPlanet.jsx";
import CardVehicle from "../component/CardVehicle.jsx";

const CardsList = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPeople();
        actions.getPlanets();
        actions.getVehicles();
    }, [actions]);



    return (
        <div className="w-100">
            <div className="bg-body-tertiary pt-3 px-5" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabIndex="0">
                <h2 className="pt-3 fs-3 fw-bold text-danger">Characters</h2>
                {/* Contenedor con scroll horizontal */}
                <div className="d-flex flex-row overflow-auto">
                    {store.people.map((person, index) => (
                        <div key={index} className="card my-2 me-2" style={{ minWidth: "300px" }}>
                            <CardPeople person={person} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-body-tertiary pt-3 px-5" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabIndex="0">
                <h2 className="pt-3 fs-3 fw-bold text-danger">Planets</h2>
                {/* Contenedor con scroll horizontal */}
                <div className="d-flex flex-row overflow-auto">
                    {store.planets.map((planet, index) => (
                        <div key={index} className="card my-2 me-2" style={{ minWidth: "400px" }}>
                            <CardPlanet planet={planet} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-body-tertiary pt-3 px-5" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabIndex="0">
                <h2 className="pt-3 fs-3 fw-bold text-danger">Vehicles</h2>
                {/* Contenedor con scroll horizontal */}
                <div className="d-flex flex-row overflow-auto">
                    {store.vehicles.map((vehicle, index) => (
                        <div key={index} className="card my-2 me-2" style={{ minWidth: "400px" }}>
                            <CardVehicle vehicle={vehicle} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardsList;
