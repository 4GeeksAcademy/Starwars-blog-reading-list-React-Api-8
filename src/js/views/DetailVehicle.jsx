import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Context } from "../store/appContext.js";
import CardDetailsVehicle from "../component/CardDetailsVehicle.jsx";

const DetailVehicle = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);
    const [vehicle, setVehicle] = useState(null);

    useEffect(() => {
        const vehicleDetails = store.vehicles.find(p => p.uid === id);
        if (vehicleDetails) {
            setVehicle(vehicleDetails);
        } else {
            actions.getVehicles(); // Recargar los datos s
        }
    }, [id, store.vehicles, actions]);

    if (!vehicle) {
        return <p>Cargando...</p>; //si no encuentra vehiclea 
    }


    console.log(store.vehicles);

    return (
        <div>
            <CardDetailsVehicle vehicle={vehicle} />
        </div>
    )
}
export default DetailVehicle;