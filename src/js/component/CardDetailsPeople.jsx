import React from "react";

const CardDetailsPeople = ({ person }) => {
    console.log("CarddetailsPeople person trae esto:", person);
    if (!person) {
        return <p>Cargando datos...</p>; // Muestra un mensaje de carga mientras se obtienen los datos.
    }

    return (
        <div className="py-3 px-5 w-100">
            <div className="card p-3" style={{ maxWidth: "100%" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`} className="img-fluid rounded" alt="Character Image" />
                    </div>
                    <div className="col-md-8 ps-5 pe-4">
                        <div className="card-body p-0">
                            <h5 className="card-title display-1">{person.properties.name}</h5>
                            <p className="card-text">{person.description}</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nam voluptas ex praesentium explicabo exercitationem, quasi rem adipisci possimus quos blanditiis molestias magni iure maiores vitae excepturi laborum consectetur necessitatibus?</p>
                        </div>
                    </div>
                </div>
                <div className="row pt-2 border-top border-2 border-danger mt-3 text-center">
                    <div className="col">
                        <p><b>Name</b></p>
                        <p>{person.properties.name}</p>
                    </div>
                    <div className="col">
                        <p><b>Birth Year</b></p>
                        <p>{person.properties.birth_year}</p>
                    </div>
                    <div className="col">
                        <p><b>Gender</b></p>
                        <p>{person.properties.gender}</p>
                    </div>
                    <div className="col">
                        <p><b>Height</b></p>
                        <p>{person.properties.height}</p>
                    </div>
                    <div className="col">
                        <p><b>Skin Color</b></p>
                        <p>{person.properties.skin_color}</p>
                    </div>
                    <div className="col">
                        <p><b>Eye Color</b></p>
                        <p>{person.properties.eye_color}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardDetailsPeople;