import React from "react";

const Banner = () => {
    return (
        <section className="relative z-0 w-full h-screen bg-cover bg-center bg-[url('/urbanSpaceBanner.jpg')] flex items-center justify-center px-4 md:px-16">
            <div className=" p-6 rounded-lg text-center max-w-6xl">
                <h1 className="text-white text-3xl md:text-7xl font-bold mb-4">
                    Welcome to UrbanSpace
                </h1>
                <p className="text-gray-200 text-base md:text-lg mb-6">
                    Discover creative interiors that redefine living. Let’s
                    design your dream space.
                </p>
                <a
                    href="#_"
                    class="relative inline-flex items-center  justify-start px-8 py-3 overflow-hidden font-medium transition-all border border-green-500 bg-white rounded hover:bg-white group"
                >
                    <span class="absolute z-10 right-0 flex items-center justify-center w-10 h-10 duration-500 transform translate-x-full group-hover:translate-x-0 ease text-white">
                        <svg
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke="currentColor"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                        </svg>
                    </span>
                    <span class="w-64 h-52 rounded rotate-[-40deg] bg-[#233642] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                        Get Free Consultancy
                    </span>
                </a>
            </div>
        </section>
    );
};

export default Banner;
