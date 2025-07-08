import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Contact from "../components/Contact/Contact";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import HowWeWork from "../Pages/HowWeWork/HowWeWork";
import Portfolio from "../Pages/Portfolio/Portfolio";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "services",
                element: <Services />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/how-we-work",
                element: <HowWeWork />,
            },
            {
                path: "/portfolio",
                element: <Portfolio />,
            },
        ],
    },
]);

export default router;
