import React from "react";
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../store/appContext'

const CardPlanet = ({ planet }) => {
    const { store, actions } = useContext(Context)

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://picsum.photos/400/200" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title"> {planet.name}</h5>
                <p>Population: {planet.population}</p>
                <p>Terrain:{planet.terrain}</p>
                <div>
                    <Link to={`/detailPlanet/${planet.uid}`}>
                        <button className="btn btn-outline-primary">Leran more!</button>
                    </Link>
                    <button className="btn btn-outline-warning"><i class="fa fa-heart-o" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
    )
}
export default CardPlanet;