import React from "react";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../store/appContext';

const CardPeople = ({ person }) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="card" style={{ width: "18rem", margin: "10px" }}>
            <img src="https://picsum.photos/400/200" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <p>Gender: {person.gender}</p>
                <p>Hair-color: {person.hair_color}</p>
                <p>Eye-color: {person.eye_color}</p>
                <div>
                    <Link to="/cardDetails">
                        <button className="btn btn-outline-primary">Learn more!</button>
                    </Link>
                    <button className="btn btn-outline-warning"><i className="fa fa-heart-o" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
    );
};

export default CardPeople;