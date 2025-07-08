import React from "react";
import {
    FaEye,
    FaHandshake,
    FaHome,
    FaRegEye,
    FaRegHandshake,
} from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { PiChatTeardropTextBold } from "react-icons/pi";

const WorkingProcess = () => {
    return (
        <div className="max-w-7xl mx-auto my-20">
            <div className="px-4 mb-10 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-4xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                    Our Working Process
                </h2>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                    Creating captivating spaces through meticulous design. We
                    blend innovation and expertise to transform your vision into
                    stunning reality.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-auto gap-6 p-4">
                <div className="md:col-start-1 md:col-end-5 md:row-start-1 md:row-end-2  border rounded-xl text-center ">
                    <div className="relative group flex flex-col items-center text-center p-8">
                        {/* Icon container */}

                        <div className="relative">
                            <div className="flex items-center justify-center text-black bg-gray-100 group-hover:bg-white w-24 h-24 group-hover:border-2 group-hover:border-[#233642] relative z-10 rounded-full">
                                <FaRegEye className="text-4xl" />
                                {/* Spinning ring with scale and fade */}
                                <div className="absolute w-32 h-32 rounded-full z-0 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out animate-spin">
                                    <svg
                                        className="lqd-overlay w-full h-full"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 127 126"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <path
                                            fill="none"
                                            stroke="green"
                                            strokeDasharray="0 9.9"
                                            strokeLinecap="round"
                                            strokeWidth="2.2"
                                            d="M61.5,123 C95.4655121,123 123,95.4655121 123,61.5 C123,27.5344879 95.4655121,0 61.5,0 C27.5344879,0 0,27.5344879 0,61.5 C0,95.4655121 27.5344879,123 61.5,123 Z"
                                            transform="translate(2 1)"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Text content */}
                        <div className="">
                            <h3 className="mt-4 text-xl font-semibold group-hover:text-[#233642] transition-colors duration-300">
                                Visiting the place
                            </h3>
                            <p className="text-gray-500 mt-1 text-sm">
                                Our Expert Team Member Analyze your Place.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="md:col-start-5 md:col-end-9 md:row-start-1 md:row-end-2 border rounded-xl text-center">
                    <div className="relative group flex flex-col items-center text-center p-8">
                        {/* Icon container */}

                        <div className="relative">
                            <div className="flex items-center justify-center text-black bg-gray-100 group-hover:bg-white w-24 h-24 group-hover:border-2 group-hover:border-[#233642] relative z-10 rounded-full">
                                <PiChatTeardropTextBold className="text-4xl" />
                                {/* Spinning ring with scale and fade */}
                                <div className="absolute w-32 h-32 rounded-full z-0 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out animate-spin">
                                    <svg
                                        className="lqd-overlay w-full h-full"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 127 126"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <path
                                            fill="none"
                                            stroke="green"
                                            strokeDasharray="0 9.9"
                                            strokeLinecap="round"
                                            strokeWidth="2.2"
                                            d="M61.5,123 C95.4655121,123 123,95.4655121 123,61.5 C123,27.5344879 95.4655121,0 61.5,0 C27.5344879,0 0,27.5344879 0,61.5 C0,95.4655121 27.5344879,123 61.5,123 Z"
                                            transform="translate(2 1)"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Text content */}
                        <div className="">
                            <h3 className="mt-4 text-xl font-semibold group-hover:text-[#233642] transition-colors duration-300">
                                Making Plan & Strategy
                            </h3>
                            <p className="text-gray-500 mt-1 text-sm">
                                Make Unique Plan to start your Project.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="md:col-start-9 md:col-end-13 md:row-start-1 md:row-end-2 border rounded-xl text-center">
                    <div className="relative group flex flex-col items-center text-center p-8">
                        {/* Icon container */}

                        <div className="relative">
                            <div className="flex items-center justify-center text-black bg-gray-100 group-hover:bg-white w-24 h-24 group-hover:border-2 group-hover:border-[#233642] relative z-10 rounded-full">
                                <FaHandshake className="text-4xl" />
                                {/* Spinning ring with scale and fade */}
                                <div className="absolute w-32 h-32 rounded-full z-0 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out animate-spin">
                                    <svg
                                        className="lqd-overlay w-full h-full"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 127 126"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <path
                                            fill="none"
                                            stroke="green"
                                            strokeDasharray="0 9.9"
                                            strokeLinecap="round"
                                            strokeWidth="2.2"
                                            d="M61.5,123 C95.4655121,123 123,95.4655121 123,61.5 C123,27.5344879 95.4655121,0 61.5,0 C27.5344879,0 0,27.5344879 0,61.5 C0,95.4655121 27.5344879,123 61.5,123 Z"
                                            transform="translate(2 1)"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Text content */}
                        <div className="">
                            <h3 className="mt-4 text-xl font-semibold group-hover:text-[#233642] transition-colors duration-300">
                                Contract Signin
                            </h3>
                            <p className="text-gray-500 mt-1 text-sm">
                                Sign a Contract To maintain secure working
                                process.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="md:col-start-3 md:col-end-7 md:row-start-2 md:row-end-3 border rounded-xl text-center">
                    <div className="relative group flex flex-col items-center text-center p-8">
                        {/* Icon container */}

                        <div className="relative">
                            <div className="flex items-center justify-center text-black bg-gray-100 group-hover:bg-white w-24 h-24 group-hover:border-2 group-hover:border-[#233642] relative z-10 rounded-full">
                                <FaHome className="text-3xl" />
                                {/* Spinning ring with scale and fade */}
                                <div className="absolute w-32 h-32 rounded-full z-0 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out animate-spin">
                                    <svg
                                        className="lqd-overlay w-full h-full"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 127 126"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <path
                                            fill="none"
                                            stroke="green"
                                            strokeDasharray="0 9.9"
                                            strokeLinecap="round"
                                            strokeWidth="2.2"
                                            d="M61.5,123 C95.4655121,123 123,95.4655121 123,61.5 C123,27.5344879 95.4655121,0 61.5,0 C27.5344879,0 0,27.5344879 0,61.5 C0,95.4655121 27.5344879,123 61.5,123 Z"
                                            transform="translate(2 1)"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Text content */}
                        <div className="">
                            <h3 className="mt-4 text-xl font-semibold group-hover:text-[#233642] transition-colors duration-300">
                                Delivering & Taking Feedback
                            </h3>
                            <p className="text-gray-500 mt-1 text-sm">
                                We Handover your Dream Beauty & Take your
                                Opinion.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="md:col-start-7 md:col-end-11 md:row-start-2 md:row-end-3 border rounded-xl text-center">
                    <div className="relative group flex flex-col items-center text-center p-8">
                        {/* Icon container */}

                        <div className="relative">
                            <div className="flex items-center justify-center text-black bg-gray-100 group-hover:bg-white w-24 h-24 group-hover:border-2 group-hover:border-[#233642] relative z-10 rounded-full">
                                <IoIosPeople className="text-4xl" />
                                {/* Spinning ring with scale and fade */}
                                <div className="absolute w-32 h-32 rounded-full z-0 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out animate-spin">
                                    <svg
                                        className="lqd-overlay w-full h-full"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 127 126"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <path
                                            fill="none"
                                            stroke="green"
                                            strokeDasharray="0 9.9"
                                            strokeLinecap="round"
                                            strokeWidth="2.2"
                                            d="M61.5,123 C95.4655121,123 123,95.4655121 123,61.5 C123,27.5344879 95.4655121,0 61.5,0 C27.5344879,0 0,27.5344879 0,61.5 C0,95.4655121 27.5344879,123 61.5,123 Z"
                                            transform="translate(2 1)"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Text content */}
                        <div className="">
                            <h3 className="mt-4 text-xl font-semibold group-hover:text-[#233642] transition-colors duration-300">
                                Delivering & Taking Feedback
                            </h3>
                            <p className="text-gray-500 mt-1 text-sm">
                                We Handover your Dream Beauty & Take your
                                Opinion.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkingProcess;
