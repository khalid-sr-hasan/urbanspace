import React, { useEffect, useState } from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import urbanSpaceLogo from "/Urban Space  (3).png";

import { Sling as Hamburger } from "hamburger-react";

const Nav = () => {
    const [isOpen, setOpen] = useState(false);
    const [openNav, setOpenNav] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        const handleResize = () =>
            window.innerWidth >= 960 && setOpenNav(false);

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // If menu is closed and the user is scrolling down, hide the navbar
            if (!openNav) {
                setShowNavbar(
                    lastScrollY > currentScrollY || currentScrollY < 10
                );
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY, openNav]); // Add `openNav` to the dependency array to check the state of the mobile menu

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {[
                "Home",
                "Services",
                "Services",
                "Portfolio",
                "How we work",
                "About Us",
                "Contact",
            ].map((item) => (
                <Typography
                    key={item}
                    as="li"
                    color="blue-gray"
                    className="p-1 text-[#233642] font-bold hover:text-red-300"
                >
                    <a
                        href={`#${item}`}
                        className="group relative inline-block text-[#233642] font-bold"
                    >
                        {item}
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#233642] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </Typography>
            ))}
        </ul>
    );

    return (
        <div
            className={`sticky top-0 z-50 transition-transform duration-300 ${
                showNavbar ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <Navbar className="overflow-hidden border-0   backdrop-blur-lg px-4 py-1 lg:px-8 shadow-md">
                <div className="container mx-auto flex items-center justify-between">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-bold text-lg"
                    >
                        <img src={urbanSpaceLogo} className="w-16" alt="" />
                        <h4 className="font-bold text-sm text-[#233642]">
                            UrbanSpace
                        </h4>
                    </Typography>
                    <div className="hidden lg:block">{navList}</div>
                    <div
                        // variant="text"
                        className="lg:hidden"
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <Hamburger size={25} toggled={isOpen} color="red" />
                        ) : (
                            <Hamburger
                                size={25}
                                toggle={setOpen}
                                color="#233642"
                            />
                        )}
                    </div>
                </div>
                <Collapse open={openNav}>{navList}</Collapse>
            </Navbar>
        </div>
    );
};

export default Nav;
