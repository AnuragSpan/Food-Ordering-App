import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SwiggyDelhiRestaurents from "../pages/Restaurents/page";
import ErrorPage from "../components/error-page/page";
// import RestaurentDetails from "../pages/Restaurents/restaurent-details/page";
import { lazy } from "react";
import Grocery from "../pages/grocery/page";


const RestaurentDetails = lazy(()=>import("../pages/Restaurents/restaurent-details/page"))

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
                path : "/grocery",
                element : <Grocery/>
            },
            {
                path: "/res-details/:resId",
                element : <RestaurentDetails/>
            }
        ]
    }
])