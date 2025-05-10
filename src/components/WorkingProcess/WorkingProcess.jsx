import React from "react";
import { FaEye } from "react-icons/fa";

const WorkingProcess = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-auto gap-4 p-4">
                {/* First row - stacked on small, grid on md+ */}
                <div className="md:col-start-1 md:col-end-5 md:row-start-1 md:row-end-2  p-4 text-center">
                    <div className="relative w-24 h-24 group">
                        {/* <div className="absolute inset-0 border-2 border-yellow-600 transition-transform duration-300 hover:animate-spin group-hover:scale-110  rounded-full"></div> */}
                        {/* inner content */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 127 126"
                            className="absolute top-0 left-0 w-full h-full rounded-full transition-transform duration-700 will-change-transform group-hover:scale-110 animate-spin-slow"
                        >
                            <path
                                fill="none"
                                stroke="orange"
                                strokeWidth="2.2"
                                strokeDasharray="1 15"
                                strokeLinecap="round"
                                d="M61.5,123 C95.5,123 123,95.5 123,61.5 C123,27.5 95.5,0 61.5,0 C27.5,0 0,27.5 0,61.5 C0,95.5 27.5,123 61.5,123 Z"
                                transform="translate(2 1)"
                            />
                        </svg>
                        <div className="relative w-full h-full rounded-full flex items-center justify-center group">
                            <FaEye className="text-2xl" />
                        </div>
                    </div>
                </div>
                <div className="md:col-start-5 md:col-end-9 md:row-start-1 md:row-end-2 bg-green-300 p-4 text-center">
                    div2
                </div>
                <div className="md:col-start-9 md:col-end-13 md:row-start-1 md:row-end-2 bg-blue-300 p-4 text-center">
                    div3
                </div>

                {/* Second row */}
                <div className="md:col-start-3 md:col-end-7 md:row-start-2 md:row-end-3 bg-yellow-300 p-4 text-center">
                    div4
                </div>
                <div className="md:col-start-7 md:col-end-11 md:row-start-2 md:row-end-3 bg-purple-300 p-4 text-center">
                    div5
                </div>
            </div>
        </div>
    );
};

export default WorkingProcess;
