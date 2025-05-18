import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";

const Root = () => {
    return (
        <div>
            <Outlet />
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default Root;
