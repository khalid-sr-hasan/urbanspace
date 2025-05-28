import React from "react";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import logo from "/Urban Space  (3).png";
import { LuHardHat } from "react-icons/lu";
import { GiHomeGarage } from "react-icons/gi";
import { BiBuildingHouse } from "react-icons/bi";

import { motion } from "framer-motion";

const ServicesSection = () => {
    const services = [
        {
            icon: <HiOutlineWrenchScrewdriver className="text-gray-700" />,
            label: "Commercial",
        },
        { icon: <LuHardHat className="text-gray-700" />, label: "Industrial" },
        {
            icon: <GiHomeGarage className="text-gray-700" />,
            label: "Residential",
        },
        {
            icon: <BiBuildingHouse className="text-gray-700" />,
            label: "Corporate",
        },
    ];

    return (
        <section className="bg-[#F8F8F8]">
            <div className="container mx-auto overflow-hidden">
                <motion.div
                    className="grid gap-6 grid-cols-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }} // Trigger animation when part of the section enters the viewport
                    transition={{ staggerChildren: 0.3 }}
                >
                    {/* left side */}
                    <motion.div className="col-span-12 lg:col-span-3">
                        <motion.div
                            className="flex flex-col md:flex-row lg:flex-col justify-center items-center gap-6 md:justify-around"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        duration: 0.6,
                                        ease: "easeOut",
                                    },
                                },
                            }}
                        >
                            <motion.div>
                                <img
                                    src="https://xinterio-demo.pbminfotech.com/demo4/wp-content/uploads/sites/10/2024/09/frame-clock.png"
                                    alt="clock"
                                />
                            </motion.div>

                            <motion.div className="lg:mt-28">
                                <img
                                    className="rounded-3xl"
                                    src="https://xinterio-demo.pbminfotech.com/demo4/wp-content/uploads/sites/10/2024/09/home4-about-02.jpg"
                                    alt="interior"
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* middle */}
                    <motion.div
                        className="space-y-9 col-span-12 lg:col-span-5 text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.6, ease: "easeOut" },
                            },
                        }}
                    >
                        <motion.div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                                Transforming dull spaces into Instagram-worthy
                                masterpieces
                            </h2>
                            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600">
                                Sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua quis ipsum suspendisse
                                ultrices gravida risus commodo viverra maecenas.
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid gap-5 md:grid-cols-2"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.3, // Delay for each item
                                    },
                                },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {services.map(({ icon, label }, idx) => (
                                <motion.div
                                    key={idx}
                                    className="bg-white shadow-lg flex gap-4 items-center rounded-full border p-2 cursor-pointer hover:bg-blue-600 hover:border-blue-600 transition-colors duration-300"
                                    variants={{
                                        hidden: { opacity: 0, y: 40 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.6,
                                                ease: "easeOut",
                                            },
                                        },
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <span className="bg-[#F8F8F8] text-4xl p-3 rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-110">
                                        {icon}
                                    </span>
                                    <p className="text-[18px] font-bold transition-colors duration-300 ease-in-out hover:text-white">
                                        {label}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            className="flex flex-col items-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        duration: 0.6,
                                        ease: "easeOut",
                                    },
                                },
                            }}
                        >
                            <img src={logo} alt="urbanspace" className="w-36" />
                            <p className="font-bold text-2xl text-[#1D3843]">
                                UrbanSpace
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* right side */}
                    <motion.div className="col-span-12 lg:col-span-4">
                        <motion.div
                            className="flex justify-end mb-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        duration: 0.6,
                                        ease: "easeOut",
                                    },
                                },
                            }}
                        >
                            <motion.img
                                className="rounded-3xl"
                                src="https://xinterio-demo.pbminfotech.com/demo4/wp-content/uploads/sites/10/2024/09/home4-about-01.jpg"
                                alt="interior"
                            />
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        duration: 0.6,
                                        ease: "easeOut",
                                    },
                                },
                            }}
                        >
                            <motion.img
                                src="https://xinterio-demo.pbminfotech.com/demo4/wp-content/uploads/sites/10/2024/09/lamp.png"
                                alt="lamp"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
