import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";
import Home from "../Pages/Home/Home";

const Root = () => {
    return (
        <div>
            <Home />
            <Outlet />
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default Root;
