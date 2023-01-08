import Header from "../pages/Header/Header";
import {Outlet} from "react-router-dom";

const LayoutBlank = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default LayoutBlank