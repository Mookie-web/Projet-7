import Header from "../pages/Header/Header";
import Footer from "../pages/Footer/Footer";
import {Outlet} from "react-router-dom";

const LayoutDefault = () => {
	return (
		<>
			<Header/>
			<main>
				<Outlet/>
			</main>
			<Footer/>
		</>
	)
}

export default LayoutDefault