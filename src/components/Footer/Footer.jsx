import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";
import urbanSpaceLogo from "/Urban Space  (3).png";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#d5dff9] to-[#f8f8f8] text-gray-700 py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
                {/* Logo and Description */}
                <div className="col-span-2">
                    <div className="flex flex-col mb-4">
                        {/* <div className="bg-yellow-300 p-2 rounded-b-full rounded-r-full rounded-t-xl rounded-l-xl">
                            <div className="w-4 h-4 bg-gray-700 rounded-b-full rounded-r-full rounded-t-xl rounded-l-xl"></div>{" "}
                        </div> */}
                        <img src={urbanSpaceLogo} className="w-32" alt="" />
                        <h4 className="font-bold text-xl text-[#233642]">
                            UrbanSpace
                        </h4>
                        {/* <span className="text-3xl md:text-4xl font-bold">
                            Logo
                        </span> */}
                    </div>
                    <p className="text-sm text-[#3b5d98]">
                        At Urban Space, we transform dreams into reality with
                        artistry, precision, and passion. From the first spark
                        of inspiration to the final exquisite detail, we
                        collaborate closely with you to craft spaces that embody
                        your vision and elevate your lifestyle. Your dream is
                        our blueprint, and we are devoted to bringing it to life
                        with unmatched creativity and craftsmanship.
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex justify-center md:justify-start gap-4 mt-6 text-xl text-[#17418b]">
                        <a href="#">
                            <FaFacebookF className="bg-white p-2 text-4xl rounded-full" />
                        </a>
                        <a href="#">
                            <FaTwitter className="bg-white p-2 text-4xl rounded-full" />
                        </a>
                        <a href="#">
                            <FaLinkedinIn className="bg-white p-2 text-4xl rounded-full" />
                        </a>
                        <a href="#">
                            <FaInstagram className="bg-white p-2 text-4xl rounded-full" />
                        </a>
                    </div>
                </div>

                <div className="flex justify-around md:justify-evenly col-span-2">
                    {/* Navigation */}
                    <div className="font-manrope">
                        <h3 className="font-semibold text-lg mb-4 text-[#05204f]">
                            Navigation
                        </h3>
                        <ul className="space-y-4 text-sm text-[#36568b]">
                            <li>
                                <a href="#" className="hover:underline">
                                    Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Agency
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Case Study
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Resource
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Licence */}
                    <div className="font-manrope">
                        <h3 className="font-semibold text-lg mb-4 text-[#05204f]">
                            Licence
                        </h3>
                        <ul className="space-y-4 text-sm text-[#36568b]">
                            <li>
                                <a href="#" className="hover:underline">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Copyright
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Email Address
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Contact */}
                <div className="text-center md:text-start font-manrope">
                    <h3 className="font-semibold text-lg mb-4 text-[#05204f]">
                        Contact Us
                    </h3>
                    <ul className="space-y-4 text-xs lg:text-sm text-[#36568b]">
                        <li className="flex items-center justify-center md:justify-start gap-1 lg:gap-2 ">
                            <FaPhone className="text-[#002868]" />
                            <span>01704800362 / 01913516151</span>
                        </li>
                        <li className="flex items-center justify-center md:justify-start gap-1 lg:gap-2">
                            <FaEnvelope className="text-[#002868] " />
                            <span>urbanspacebd@gmail.com</span>
                        </li>
                        <li className="flex items-start justify-center md:justify-start gap-1 lg:gap-2">
                            <FaMapMarkerAlt className="text-[#002868] text-sm md:text-2xl  lg:text-xl md:-mt-1 lg:mt-1" />
                            <span>348/P, 60 Feet Road, Mirpur, Dhaka-1216</span>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="mt-5 bg-[#b4b4b4] h-0.5" />
        </footer>
    );
};

export default Footer;
