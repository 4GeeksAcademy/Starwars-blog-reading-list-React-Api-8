import React from "react";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../store/appContext';

const CardPeople = ({ person }) => {
    console.log("CardPeople person trae esto:", person);

    const { store, actions } = useContext(Context);

    return (
        <div className="card my-2 me-2" style={{ minWidth: "400px" }}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{person.properties.name}</h5>
                <p>Gender: {person.properties.gender}</p>
                <p>Hair-color: {person.properties.hair_color}</p>
                <p>Eye-color: {person.properties.eye_color}</p>
                <div className="d-flex justify-content-between">
                    <Link to={`/details/${person.uid}`}>
                        {/* onClick={() => actions.getPeople(person.uid)} */}
                        <button className="btn btn-outline-primary fw-bold" >Learn more!</button>
                    </Link>
                    <button className="btn btn-outline-warning" onClick={() => actions.addFavorites(person.properties.name)}><i className="fa fa-heart-o" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
    );
};

export default CardPeople;