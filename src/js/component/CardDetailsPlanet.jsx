import React from "react";

const CardDetailsplanet = ({ planet}) => {
    console.log("CarddetailsPeople planet trae esto:", planet);
    if (!planet) {
        return <p>Cargando datos...</p>; // Muestra un mensaje de carga mientras se obtienen los datos.
    }

    return (
        <div className="detail-card">
            <div className="first-details">
                <div>
                    <img src="https://picsum.photos/400/200" alt="" />
                </div>
                <div>
                    <h3>{planet.name}</h3>
                    <p>{planet.description}</p>
                </div>

                <div className="second-details">
                    <div>
                        <h3>Name</h3>
                        <p>{planet.name}</p>
                    </div>
                    <div>
                        <h3>climate</h3>
                        <p>{planet.climate}</p>
                    </div>
                    <div>
                        <h3>terrain</h3>
                        <p>{planet.terrain}</p>
                    </div>
                    <div>
                        <h3>diameter</h3>
                        <p>{planet.diameter}</p>
                    </div>
                    <div>
                        <h3>population</h3>
                        <p>{planet.population}</p>
                    </div>
                    <div>
                        <h3>rotation_period</h3>
                        <p>{planet.rotation_period}</p>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default CardDetailsplanet;