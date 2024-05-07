import { createBrowserRouter } from "react-router-dom";
import Root from "../LaOut/Root";
import Home from "../Pages/Home/Home";
import ErrorElement from "../LaOut/ErrorElement/ErrorElement";
import Menu from "../Pages/Menu/Menu";
import Order from "../Order/Order/Order";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/menu",
                element: <Menu></Menu>,
            },
            {
                path: "/order",
                element: <Order></Order>,
            },
        ]
    },
]);

export default router;