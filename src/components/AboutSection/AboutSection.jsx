const AboutSection = () => {
    return (
        <div className="py-28">
            <div className="text-center">
                <h2>ABOUT US</h2>
            </div>
            <div className="container mx-auto">
                <div className="flex flex-wrap mt-10">
                    <div className="w-full lg:w-1/2 relative border">
                        <div className="w-[80%]">
                            <img
                                className="lg:w-full"
                                src="https://html.awaikenthemes.com/inspaire/images/about-img-1.jpg"
                                alt=""
                            />
                            <div className="absolute right-0 lg:right-10 -bottom-24 ">
                                <img
                                    className="w-[250px] md:w-[380px]"
                                    src="https://html.awaikenthemes.com/inspaire/images/about-img-2.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div
                            className="absolute  -top-11 -right-2 md:top-0 md:right-0 lg:top-0 lg:right-10"
                            style={{
                                transform:
                                    "rotate(-180deg) translate(20px, -10px)",
                                writingMode: "vertical-rl",
                            }}
                        >
                            <h5 className="flex items-center justify-center gap-2">
                                <span className="w-16 h-16 flex items-center justify-center border-[5px] border-white bg-[#233642] text-white rounded-full font-semibold">
                                    95%
                                </span>{" "}
                                <span className="font-semibold">
                                    positive feedback
                                </span>
                            </h5>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                            Our passion for design,
                            <span className="text-[#233642]">
                                your vision realized
                            </span>
                        </h3>
                        <p className="text-base mt-6">
                            Our dedicated team of designers works closely with
                            you to understand your vision and bring it to life
                            with thoughtful attention to detail. Whether it's
                            transforming a single room or an entire home.
                        </p>
                        <div className="mt-6">
                            <ul>
                                <li>creative expertise</li>
                                <li>client-centered approach</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* why */}

            <div className="container mx-auto px-4 py-20">
                {/* Optional Center Label */}
                <div className="text-center mb-16">
                    <p className="text-sm text-gray-400 flex justify-center items-center gap-2 mb-3">
                        <span className="w-4 h-px bg-gray-400"></span>
                        Why Choose Us
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                        A behind the scenes look <br />
                        at{" "}
                        <span className="text-gray-600 font-bold">
                            our agency
                        </span>
                    </h2>
                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                        From concept to completion, discover how we bring your
                        vision to life with innovation, collaboration, and
                        expert craftsmanship.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2">
                        <div className="space-y-10">
                            {/* Feature 1 */}
                            <div className="flex items-start gap-5">
                                <div className="bg-gray-100 p-4 rounded-full text-gray-800 text-xl">
                                    {/* icon */}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-1">
                                        Tailored Design Solutions
                                    </h4>
                                    <p className="text-gray-600">
                                        We provide personalized interior design
                                        services that reflect your unique vision
                                        and lifestyle.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex items-start gap-5 border-t border-gray-200 pt-6">
                                <div className="bg-gray-100 p-4 rounded-full text-gray-800 text-xl">
                                    {/* icon */}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-1">
                                        Seamless Project Management
                                    </h4>
                                    <p className="text-gray-600">
                                        We handle the entire design process,
                                        from concept to completion, with
                                        flawless execution.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex items-start gap-5 border-t border-gray-200 pt-6">
                                <div className="bg-gray-100 p-4 rounded-full text-gray-800 text-xl">
                                    {/* icon */}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-1">
                                        Client-Centered Collaboration
                                    </h4>
                                    <p className="text-gray-600">
                                        Your input is valued throughout the
                                        entire process, ensuring your vision is
                                        fully realized.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Grid Images */}
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-12 grid-rows-10 gap-3">
                            <div className="col-span-12 sm:col-span-7 row-span-4">
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://html.awaikenthemes.com/inspaire/images/why-choose-img-1.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="col-span-12 sm:col-span-5 row-span-4 sm:col-start-8">
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://html.awaikenthemes.com/inspaire/images/why-choose-img-2.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="col-span-12 sm:col-span-9 row-span-4 sm:row-start-5">
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://html.awaikenthemes.com/inspaire/images/why-choose-img-3.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="col-span-12 sm:col-span-3 row-span-4 sm:col-start-10 sm:row-start-5">
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://html.awaikenthemes.com/inspaire/images/why-choose-img-4.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
