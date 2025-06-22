import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import "./AboutSection.css";
import { BiCheckCircle, BiPhone } from "react-icons/bi";

const AboutSection = () => {
    return (
        <div className="py-14">
            <div className="container mx-auto px-4 md:px-0">
                <div className="about-iner">
                    {/* about section left side start */}
                    <div className="about-left">
                        <img
                            className="about-img-1"
                            src="https://html.awaikenthemes.com/inspaire/images/about-img-1.jpg"
                            alt="About Image 1"
                        />
                        <img
                            className="about-img-2"
                            src="https://html.awaikenthemes.com/inspaire/images/about-img-2.jpg"
                            alt="About Image 2"
                        />
                        <img
                            className="about-img-3"
                            src="https://html.awaikenthemes.com/inspaire/images/about-us-bg-shape.svg"
                            alt="About Image 3"
                        />
                        <div className="about-feedback-counter">
                            <div className="about-feedback-circle">95%</div>
                            <div className="about-feedback-text">
                                Positive Feedback
                            </div>
                        </div>
                    </div>
                    {/* about section left side end */}

                    {/* about section right side start */}
                    <div className="about-right">
                        {/* decorative faint blueprint on the left (optional) */}
                        <div className="absolute inset-y-0 left-0 w-1/2 pointer-events-none opacity-5 bg-[url('/blueprint.png')] bg-left bg-no-repeat bg-contain" />

                        <div className="mt-10 md:mt-14">
                            {/* LEFT COLUMN */}
                            <div>
                                {/* Label */}
                                <div className="flex items-center space-x-2 mb-6">
                                    <BsArrowUpRight className="w-5 h-5 text-gray-500" />
                                    <span className="uppercase tracking-wider text-sm text-gray-500 font-medium">
                                        About Us
                                    </span>
                                </div>

                                {/* Heading */}
                                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
                                    Our passion for design, your vision realized
                                </h2>

                                {/* Description */}
                                <p className="mt-6 text-gray-600 max-w-xl">
                                    Our dedicated team of designers works
                                    closely with you to understand your vision
                                    and bring it to life with thoughtful
                                    attention to detail. Whether it's
                                    transforming a single room or an entire
                                    home.
                                </p>

                                {/* Bullet list */}
                                <ul className="mt-8 space-y-3">
                                    <li className="flex items-center">
                                        <BiCheckCircle className="w-5 h-5 text-green-600 mr-3" />
                                        <span className="text-gray-700">
                                            creative expertise
                                        </span>
                                    </li>
                                    <li className="flex items-center">
                                        <BiCheckCircle className="w-5 h-5 text-green-600 mr-3" />
                                        <span className="text-gray-700">
                                            client‑centered approach
                                        </span>
                                    </li>
                                </ul>

                                {/* CTA Button */}
                                <button className="mt-10 inline-flex items-center bg-gray-700 hover:bg-gray-800 text-white text-sm font-medium px-6 py-3 rounded transition">
                                    Read More
                                    <BsArrowRight className="w-4 h-4 ml-2" />
                                </button>
                            </div>

                            {/* RIGHT COLUMN */}
                        </div>
                    </div>
                    {/* about section right side end */}
                </div>
            </div>

            {/* why choose us */}

            <div className="container mt-14 mx-auto px-4 ">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2">
                        {/* Optional Center Label */}
                        <div className="flex items-center space-x-2 mb-6">
                            <BsArrowUpRight className="w-5 h-5 text-gray-500" />
                            <span className="uppercase tracking-wider text-sm text-gray-500 font-medium">
                                Why Choose Us
                            </span>
                        </div>
                        <div className="mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                A behind the scenes look <br />
                                at{" "}
                                <span className="text-gray-600 font-bold">
                                    our agency
                                </span>
                            </h2>
                            <p className="text-gray-600 mt-6 max-w-2xl">
                                From concept to completion, discover how we
                                bring your vision to life with innovation,
                                collaboration, and expert craftsmanship.
                            </p>
                        </div>
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
                        <div className="w-full choose-us-image-gallery">
                            <div className="choose-us-img-1">
                                <img
                                    src="https://html.awaikenthemes.com/inspaire/images/why-choose-img-1.jpg"
                                    alt="Choose Us Image 1"
                                />
                            </div>
                            <div className="choose-us-img-2">
                                <img
                                    src="https://html.awaikenthemes.com/inspaire/images/why-choose-img-2.jpg"
                                    alt="Choose Us Image 2"
                                />
                            </div>
                            <div className="choose-us-img-3">
                                <img
                                    src="https://html.awaikenthemes.com/inspaire/images/why-choose-img-3.jpg"
                                    alt="Choose Us Image 3"
                                />
                            </div>
                            <div className="choose-us-img-4">
                                <img
                                    src="https://html.awaikenthemes.com/inspaire/images/why-choose-img-4.jpg"
                                    alt="Choose Us Image 4"
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
