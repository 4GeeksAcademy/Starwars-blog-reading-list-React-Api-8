import React from "react";

const CardDetailsVehicle = ({ vehicle }) => {
    console.log("CarddetailsPeople vehicle trae esto:", vehicle);
    if (!vehicle) {
        return <p>Cargando datos...</p>; // Muestra un mensaje de carga mientras se obtienen los datos.
    }

    return (
        <div className="detail-card">
            <div className="first-details">
                <div>
                    <img src="https://picsum.photos/400/200" alt="" />
                </div>
                <div>
                    <h3>{vehicle.name}</h3>
                    <p>{vehicle.description}</p>
                </div>

                <div className="second-details">
                    <div>
                        <h3>Name</h3>
                        <p>{vehicle.name}</p>
                    </div>
                    <div>
                        <h3>model</h3>
                        <p>{vehicle.model}</p>
                    </div>
                    <div>
                        <h3>vehicle_class</h3>
                        <p>{vehicle.vehicle_class}</p>
                    </div>
                    <div>
                        <h3>manufacturer</h3>
                        <p>{vehicle.manufacturer}</p>
                    </div>
                    <div>
                        <h3>passengers</h3>
                        <p>{vehicle.passengers}</p>
                    </div>
                    <div>
                        <h3>Cargo_capacity</h3>
                        <p>{vehicle.cargo_capacity}</p>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default CardDetailsVehicle;