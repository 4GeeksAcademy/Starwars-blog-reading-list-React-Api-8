import React from "react";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../store/appContext';

const CardPeople = ({ vehicle }) => {
    console.log("CardVehicle LLEGA esto:", vehicle);

    const { store, actions } = useContext(Context);

    return (
        <div className="card" style={{ width: "18rem", margin: "10px" }}>
            <img src="https://picsum.photos/400/200" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{vehicle.name}</h5>
                <p>Model: {vehicle.model}</p>
                <p>Clase: {vehicle.vehicle_class}</p>
                <p>fabricante: {vehicle.cargo_capacity}</p>
                <div>
                    <Link to={`/detailVehicle/${vehicle.uid}`}>
                        {/* onClick={() => actions.getPeople(vehicle.uid)} */}
                        <button className="btn btn-outline-primary" >Learn more!</button>
                    </Link>
                    <button className="btn btn-outline-warning"><i className="fa fa-heart-o" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
    );
};

export default CardPeople;