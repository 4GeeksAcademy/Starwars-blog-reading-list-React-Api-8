import React from "react";
import { Link } from "react-router-dom";
// import starwarsImage from "../../img/starwars.png";

export const Navbar = () => {
	return (
		<div className="container-fluid">
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
				<img src="https://w7.pngwing.com/pngs/885/792/png-transparent-chewbacca-han-solo-star-wars-rebel-alliance-logo-star-wars-purple-text-star-wars-episode-vii.png" width="100" height="50" alt="Star Wars" />
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Favorites</button>
					</Link>
				</div>
			</nav>
		</div>
	);
};
