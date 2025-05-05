import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../components/Error/ErrorPage";
import Home from "../components/Home/Home";
import Contact from "../components/Contact/Contact";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import HowWeWork from "../components/HowWeWork/HowWeWork";
import Portfolio from "../components/Portfolio/Portfolio";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/services",
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
