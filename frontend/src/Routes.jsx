import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Acceuil from "./Pages/Acceuil";

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
        ],
    },
]);

export default routes;
