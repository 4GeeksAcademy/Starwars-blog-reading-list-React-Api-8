import React from "react";
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../store/appContext'

const CardPlanet = ({ planet }) => {
    const { store, actions } = useContext(Context)

    return (
        <div className="card my-2 me-2" style={{ minWidth: "100%" }}>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body text-start">
                <h5 className="card-title"> {planet.properties.name}</h5>
                <p>Population: {planet.properties.population}</p>
                <p>Terrain:{planet.properties.terrain}</p>
                <div className="d-flex justify-content-between">
                    <Link to={`/detailPlanet/${planet.uid}`}>
                        <button className="btn btn-outline-primary">Leran more!</button>
                    </Link>
                    <button className="btn btn-outline-warning" onClick={() => actions.addFavorites(planet.properties.name)}><i className="fa fa-heart-o" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
    )
}
export default CardPlanet;