import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SwiggyDelhiRestaurents from "../pages/Restaurents/page";
// import AboutUs from "../pages/about-us/page";
import ErrorPage from "../components/error-page/page";
import RestaurentDetails from "../pages/Restaurents/restaurent-details/page";
import { lazy } from "react";


const AboutUs = lazy(() => import("../pages/about-us/page"));


export const appRoutes = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        errorElement : <ErrorPage />,
        children : [
            {
                index: true,
                element : <SwiggyDelhiRestaurents/>
            },
            {
                path : "/about-us",
                element : <AboutUs/>
            },
            {
                path: "/res-details/:resId",
                element : <RestaurentDetails/>
            }
        ]
    }
])