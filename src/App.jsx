import React from "react";
import Lottie from "lottie-react";
import animationData from "/public/animation.json"; // path to your lottie JSON file
import loading from "././../public/loadingFly.json"; // path to your lottie JSON file
import logo from "/1.png";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import "./App.css";

function App() {
    return (
        <>
            <div className="">
                <div className="mx-4 md:mx-10 mt-4">
                    <img src={logo} className="w-48 md:w-72" alt="" />
                </div>
                <p className="text-xl mt-5 md:mt-0 mx-4 flex justify-center items-center font-semibold">
                    <span>Coming Soon...</span>
                    <span>
                        <Lottie
                            className="w-36"
                            animationData={loading}
                            loop={true}
                        />
                    </span>
                </p>
                <div className=" flex flex-col justify-center items-center">
                    <Lottie
                        className="w-[95%] md:w-[50%] lg:w-[32%]"
                        animationData={animationData}
                        loop={true}
                    />
                    <div className="px-4  text-center lg:w-3/6">
                        <h1 className="bg-gradient-to-r from-[#6900FF] to-[#A56DFF] bg-clip-text text-transparent text-2xl md:text-5xl font-bold">
                            This Website is currently under construction
                        </h1>
                    </div>
                </div>

                <div className="mt-9 mx-4 md:mx-10">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-[#6900FF] via-[#9E59FF] to-[#C9A7FF] bg-clip-text text-transparent   uppercase">
                        Contact Us
                    </h2>
                    <p className="flex items-center gap-2 mt-3">
                        <MdOutlineEmail />{" "}
                        <span className="text-base font-bold">Email: </span>{" "}
                        urbanspacebd@gmail.com
                    </p>
                    <p className="flex items-center gap-2">
                        <IoCallOutline />{" "}
                        <span className="text-base font-bold">Mobile:</span>{" "}
                        01716985681
                    </p>
                    <p className="flex items-center gap-2">
                        <SlLocationPin />{" "}
                        <span className="text-base font-bold">Address:</span>{" "}
                        Mirpur 60 feet, Paka mosjid.
                    </p>
                </div>
            </div>
            <div>
                <h3 className="text-center mt-8 ">
                    Designed & Developed <br /> with &copy; By{" "}
                    <span className="font-bold">Khalid Hasan</span>
                </h3>
            </div>
        </>
    );
}

export default App;
