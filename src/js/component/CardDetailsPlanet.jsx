import React from "react";

const CardDetailsplanet = ({ planet }) => {
    console.log("CarddetailsPeople planet trae esto:", planet);
    if (!planet) {
        return <p>Cargando datos...</p>; // Muestra un mensaje de carga mientras se obtienen los datos.
    }

    return (
        <div className="py-3 px-5 w-100">
            <div className="card p-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="img-fluid rounded" alt="Planet Image" />
                    </div>
                    <div className="col-md-8 ps-5 pe-4">
                        <div className="card-body p-0">
                            <h5 className="card-title display-5">{planet.properties.name}</h5>
                            <p className="card-text">{planet.description}</p>
                        </div>
                    </div>
                </div>
                <div className="row pt-2 border-top border-2 border-danger mt-3 text-center">
                    <div className="col">
                        <p><b>Name</b></p>
                        <p>{planet.properties.name}</p>
                    </div>
                    <div className="col">
                        <p><b>Climate</b></p>
                        <p>{planet.properties.climate}</p>
                    </div>
                    <div className="col">
                        <p><b>Population</b></p>
                        <p>{planet.properties.population}</p>
                    </div>
                    <div className="col">
                        <p><b>Orbital Period</b></p>
                        <p>{planet.properties.orbital_period}</p>
                    </div>
                    <div className="col">
                        <p><b>Rotation Period</b></p>
                        <p>{planet.properties.rotation_period}</p>
                    </div>
                    <div className="col">
                        <p><b>Diameter</b></p>
                        <p>{planet.properties.diameter}</p>
                    </div>
                    <div className="col">
                        <p><b>Terrain</b></p>
                        <p>{planet.properties.terrain}</p>
                    </div>
                    <div className="col">
                        <p><b>Surface Water</b></p>
                        <p>{planet.properties.surface_water}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardDetailsplanet;