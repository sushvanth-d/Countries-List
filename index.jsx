import ReactDOM from "react-dom/client"
import App from "./App";
import Home from "./Components/Home";
import Error from "./Components/Error"
import CountryDetails from "./Components/CountryDetails";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/:Country",
                element: <CountryDetails />
            }
        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
)

