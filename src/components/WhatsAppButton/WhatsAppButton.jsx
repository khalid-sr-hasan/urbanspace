import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    const phoneNumber = "8801794853357"; // Replace with your WhatsApp

    return (
        <>
            <a
                href={`https://wa.me/${phoneNumber}`} // Replace with your number
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50"
            >
                <div className="relative group">
                    <div className="absolute inset-0 bg-green-500 rounded-full opacity-70 animate-ping blur-[3px]"></div>

                    <div className="relative bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform duration-300 ">
                        {/* <FaWhatsapp size={28} /> */}
                        <BsWhatsapp
                            size={28}
                            className="animate-bounce transition-transform duration-300"
                        />
                    </div>
                </div>
            </a>

            {/* <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 animate-wiggle"
            >
                <FaWhatsapp size={28} />
            </a> */}
        </>
    );
};

export default WhatsAppButton;
