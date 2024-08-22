import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Context } from "../store/appContext.js";
import CardDetailsPlanet from "../component/CardDetailsPlanet.jsx";



const DetailPlanet = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        const planetDetails = store.planets.find(p => p.uid === id);
        if (planetDetails) {
            setPlanet(planetDetails);
        } else {
            actions.getPlanets(); // Recargar los datos s
        }
    }, [id, store.planets, actions]);

    if (!planet) {
        return <p>Cargando...</p>; //si no encuentra planeta 
    }


    console.log(store.planets);

    return (
        <div>
            <CardDetailsPlanet planet={planet} />
        </div>
    )
}
export default DetailPlanet;