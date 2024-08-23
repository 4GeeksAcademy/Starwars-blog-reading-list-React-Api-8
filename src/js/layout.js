import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

// import { Home } from "./views/home";
// import { Demo } from "./views/demo";
// import { Single } from "./views/single";
import CardsList from "./views/CardsList.jsx"
import Details from "./views/Details.jsx";
import DetailPlanet from "./views/DetailPlanet.jsx";
import DetailVehicle from "./views/DetailVehicle.jsx";

// import{CardDetails} from "./views/CardDetails.jsx"
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<CardsList/>} />
						{/* <Route path="/" element={<Home />} /> */}
						<Route path="/details/:id" element={<Details />} />
						<Route path="/detailPlanet/:id" element={<DetailPlanet />} />
						<Route path="/detailVehicle/:id" element={<DetailVehicle/>} />
						{/* <Route path="/single/:theid" element={<Single />} /> */}
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					{/* <Footer /> */}
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
