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
