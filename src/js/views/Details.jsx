import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Context } from "../store/appContext.js";
import CardDetailsPeople from "../component/CardDetailsPeople.jsx";



const Details = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);
    const [person, setPerson] = useState(null);

    useEffect(() => {
        const personDetails = store.people.find(p => p.uid === id);
        if (personDetails) {
            setPerson(personDetails);
        } else {
            actions.getPeople(); // Recargar los datos s
        }
    }, [id, store.people, actions]);

    if (!person) {
        return <p>Cargando...</p>; //si no encuentra persona 
    }


    console.log(store.people);

    return (
        <div>
            <CardDetailsPeople person={person} />
        </div>
    )
}
export default Details;