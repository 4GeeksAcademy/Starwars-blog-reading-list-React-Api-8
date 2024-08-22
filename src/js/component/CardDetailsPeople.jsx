import React from "react";

const CardDetailsPeople = ({ person }) => {
    console.log("CarddetailsPeople person trae esto:", person);
    if (!person) {
        return <p>Cargando datos...</p>; // Muestra un mensaje de carga mientras se obtienen los datos.
    }

    return (
        <div className="detail-card">
            <div className="first-details">
                <div>
                    <img src="https://picsum.photos/400/200" alt="" />
                </div>
                <div>
                    <h3>{person.name}</h3>
                    <p>{person.description}</p>
                </div>

                <div className="second-details">
                    <div>
                        <h3>Name</h3>
                        <p>{person.name}</p>
                    </div>
                    <div>
                        <h3>Bird Year</h3>
                        <p>{person.birth_year}</p>
                    </div>
                    <div>
                        <h3>Gender</h3>
                        <p>{person.gender}</p>
                    </div>
                    <div>
                        <h3>Height</h3>
                        <p>{person.height}</p>
                    </div>
                    <div>
                        <h3>Skin Color</h3>
                        <p>{person.skin_color}</p>
                    </div>
                    <div>
                        <h3>Eye color</h3>
                        <p>{person.eye_color}</p>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default CardDetailsPeople;