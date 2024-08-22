import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import CardPeople from "../component/CardPeople.jsx";
import CardPlanet from "../component/CardPlanet.jsx";

const CardsList = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPeople();
        actions.getPlanets();
    }, []);

    return (
        <div className="w-75 mx-auto">
            <div className="mb-4">
                <h2>Characters</h2>
                {/* Contenedor con scroll horizontal */}
                <div className="d-flex flex-row overflow-auto" style={{ whiteSpace: "nowrap" }}>
                    {store.people.map((person, index) => (
                        <div key={index} style={{ width: "200px", margin: "0 10px" }}>
                            <CardPeople person={person} />
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2>Planets</h2>
                {/* Contenedor con scroll horizontal */}
                <div className="d-flex flex-row overflow-auto" style={{ whiteSpace: "nowrap" }}>
                    {store.planets.map((planet, index) => (
                        <div key={index} style={{ width: "200px", margin: "0 10px" }}>
                            <CardPlanet planet={planet} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardsList;
