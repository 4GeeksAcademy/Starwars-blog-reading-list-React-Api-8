import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";


export const Navbar = () => {
	const { store, actions } = useContext(Context);




	return (
		<div className="container-fluid bg-dark">
			<nav className="navbar navbar-light bg-dark mb-3">
				<Link to="/">
					<img src="https://w7.pngwing.com/pngs/885/792/png-transparent-chewbacca-han-solo-star-wars-rebel-alliance-logo-star-wars-purple-text-star-wars-episode-vii.png" width="100" height="50" alt="Star Wars" />
				</Link>
				<div className="ml-auto">
					{/* <!-- Example single button --> */}
					<div class="btn-group">
						<button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites {store.favorites.length}
						</button>
						<ul class="dropdown-menu">
							{
								store.favorites.map((item, index) => (
									<li key={index} className="list-group-item d-flex justify-content-between align-items-center"><a className="dropdown-item" href="#">{item}</a><i className="fa-solid fa-trash-can" onClick={() => actions.deleteFavorites(index)}></i></li>
								))
							}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
