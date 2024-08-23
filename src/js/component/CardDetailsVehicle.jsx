import React from "react";

const CardDetailsVehicle = ({ vehicle }) => {
    console.log("CarddetailsPeople vehicle trae esto:", vehicle);
    if (!vehicle) {
        return <p>Cargando datos...</p>; // Muestra un mensaje de carga mientras se obtienen los datos.
    }

    return (
        <div className="py-3 px-5 w-100">
            <div className="card p-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} className="img-fluid rounded" alt="Vehicle Image" />
                    </div>
                    <div className="col-md-8 ps-5 pe-4">
                        <div className="card-body p-0">
                            <h5 className="card-title display-5">{vehicle.properties.name}</h5>
                            <p className="card-text">{vehicle.description}</p>
                        </div>
                    </div>
                </div>
                <div className="row pt-2 border-top border-2 border-danger mt-3 text-center">
                    <div className="col">
                        <p><b>Name</b></p>
                        <p>{vehicle.properties.name}</p>
                    </div>
                    <div className="col">
                        <p><b>Model</b></p>
                        <p>{vehicle.properties.model}</p>
                    </div>
                    <div className="col">
                        <p><b>Vehicle Class</b></p>
                        <p>{vehicle.properties.vehicle_class}</p>
                    </div>
                    <div className="col">
                        <p><b>Manufacturer</b></p>
                        <p>{vehicle.properties.manufacturer}</p>
                    </div>
                    <div className="col">
                        <p><b>Passengers</b></p>
                        <p>{vehicle.properties.passengers}</p>
                    </div>
                    <div className="col">
                        <p><b>Cargo Capacity</b></p>
                        <p>{vehicle.properties.cargo_capacity}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardDetailsVehicle;