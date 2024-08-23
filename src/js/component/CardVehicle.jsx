import React from "react";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../store/appContext';

const CardPeople = ({ vehicle }) => {
    console.log("CardVehicle LLEGA esto:", vehicle);

    const { store, actions } = useContext(Context);

    return (
        <div className="card my-2 me-2" style={{ minWidth: "100%" }}>
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{vehicle.properties.name}</h5>
                <p>Model: {vehicle.properties.model}</p>
                <p>Clase: {vehicle.properties.vehicle_class}</p>
                <p>fabricante: {vehicle.properties.cargo_capacity}</p>
                <div className="d-flex justify-content-between">
                    <Link to={`/detailVehicle/${vehicle.uid}`}>
                        {/* onClick={() => actions.getPeople(vehicle.uid)} */}
                        <button className="btn btn-outline-primary" >Learn more!</button>
                    </Link>
                    <button className="btn btn-outline-warning" onClick={() => actions.addFavorites(vehicle.properties.name)}><i className="fa fa-heart-o" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
    );
};

export default CardPeople;