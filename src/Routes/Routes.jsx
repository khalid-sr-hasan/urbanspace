import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../components/Error/ErrorPage";
import Home from "../components/Home/Home";
import Contact from "../components/Contact/Contact";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import HowWeWork from "../components/HowWeWork/HowWeWork";
import Portfolio from "../components/Portfolio/Portfolio";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/main",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/main/home",
                element: <Home />,
            },
            {
                path: "/main/services",
                element: <Services />,
            },
            {
                path: "/main/about",
                element: <About />,
            },
            {
                path: "/main/contact",
                element: <Contact />,
            },
            {
                path: "/main/how-we-work",
                element: <HowWeWork />,
            },
            {
                path: "/main/portfolio",
                element: <Portfolio />,
            },
        ],
    },
]);

export default router;
