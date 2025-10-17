import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Acceuil from "./Pages/Acceuil";
import Add from "./Pages/Add";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: "<Erreur />",
        children: [
            {
                path: "/",
                element: <Acceuil />,
            },
            { path: "/add", element: <Add /> },
        ],
    },
]);

export default routes;
