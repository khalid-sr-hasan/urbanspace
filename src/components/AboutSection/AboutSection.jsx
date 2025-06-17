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
        </div>
    );
};

export default AboutSection;
