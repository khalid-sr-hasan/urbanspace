import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

/**
 * OurServicesSection – fully‑responsive, optimized version.
 *
 * ✔ Mobile‑first layout
 * ✔ Consistent image aspect‑ratio across breakpoints
 * ✔ Smooth hover zoom + overlay fade
 * ✔ Accessible alt text & semantic markup
 */
const services = [
    {
        title: "Residential Interior Design",
        description:
            "We create personalized living spaces that reflect your style and functional needs.",
        image: "https://html.awaikenthemes.com/inspaire/images/service-1.jpg",
    },
    {
        title: "Commercial Interior Design",
        description:
            "Enhancing business environments with professional, functional, and aesthetically pleasing design solutions.",
        image: "https://html.awaikenthemes.com/inspaire/images/service-2.jpg",
    },
    {
        title: "Furniture And Decor Selection",
        description:
            "Our experts help you choose the perfect furniture and decor to complement your style.",
        image: "https://html.awaikenthemes.com/inspaire/images/service-3.jpg",
    },
];

const OurServicesSection = () => {
    return (
        <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="flex items-center space-x-2 mb-5">
                <BsArrowUpRight className="w-5 h-5 text-gray-500" />
                <span className="uppercase tracking-wider text-sm font-medium text-gray-500">
                    Our Services
                </span>
            </div>
            <header className="flex flex-col md:flex-row  md:justify-between gap-6 mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-xl leading-tight">
                    Innovative design services for every need
                </h2>

                <p className="md:max-w-xl text-gray-600">
                    We offer a range of bespoke interior design services
                    tailored to your unique needs, from concept development to
                    final installation.
                </p>
            </header>

            {/* Services Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {services.map(({ title, description, image }, idx) => (
                    <article
                        key={title}
                        className="relative group overflow-hidden rounded-lg shadow-lg"
                    >
                        {/* Image */}
                        <div className="h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[580px] w-full relative">
                            <img
                                src={image}
                                alt={title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                                loading="lazy"
                            />
                            {/* Fade overlay for readability */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                        </div>

                        {/* Card Content */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none">
                            <h3 className="text-white text-lg font-semibold">
                                {title}
                            </h3>
                            <p className="text-gray-200 text-sm mt-1 line-clamp-3">
                                {description}
                            </p>
                        </div>

                        {/* Corner Icon */}
                        <button
                            aria-label={"View more about " + title}
                            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-600/80 backdrop-blur-sm text-white transition-transform duration-300 group-hover:rotate-45"
                        >
                            <BsArrowUpRight className="w-5 h-5" />
                        </button>
                    </article>
                ))}
            </div>
            <div className="flex mt-10 items-center justify-center">
                <button className="px-10 py-2 bg-[#233642] text-white">
                    View All
                </button>
            </div>
        </div>
    );
};

export default OurServicesSection;
