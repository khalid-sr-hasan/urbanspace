import React from "react";
import AnimateCard from "../../components/AnimateCard/AnimateCard";
import WorkingProcess from "../../components/WorkingProcess/WorkingProcess";
import Nav from "../../components/Header/Nav/Nav";
import Banner from "../../components/Banner/Banner";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import ImageFilterGallery from "../../components/ImageFilterGallery/ImageFilterGallery";

const Home = () => {
    // const cardItem = [1, 2, 3];
    const sampleItems = [
        {
            id: 1,
            title: "Mountain Sunrise",
            category: "nature",
            order: 1,
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
            link: "https://unsplash.com/photos/6VPEOdpFNAs",
        },
        {
            id: 2,
            title: "City Skyline",
            category: "urban",
            order: 2,
            image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
            link: "https://unsplash.com/photos/mEZ3PoFGs_k",
        },
        {
            id: 3,
            title: "Forest Path",
            category: "nature",
            order: 3,
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
            link: "https://unsplash.com/photos/6dW3xyQvcYE",
        },
        {
            id: 4,
            title: "Modern Architecture",
            category: "urban",
            order: 4,
            image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
            link: "https://unsplash.com/photos/3Z70SDuYs5g",
        },
        {
            id: 5,
            title: "Desert Dunes",
            category: "nature",
            order: 5,
            image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
            link: "https://unsplash.com/photos/BbQLHCpVUqA",
        },
        {
            id: 6,
            title: "Night City Lights",
            category: "urban",
            order: 6,
            image: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=800&q=80",
            link: "https://unsplash.com/photos/xII7efH1G6o",
        },
    ];

    return (
        <div>
            <Nav />
            <Banner />
            <div className="container mx-auto mt-5 px-2">
                <div className="grid gap-2 grid-cols-5">
                    <div className="flex justify-center group">
                        <div className=" relative  overflow-hidden ">
                            <img
                                src="../../../public/images/client-grey-06.png"
                                alt=""
                                className="transition-all duration-300 group-hover:-translate-y-full"
                            />
                            <div className=" absolute translate-y-full left-0 group-hover:-translate-y-full transition-all duration-300">
                                <img
                                    src="../../../public/images/client-global-06.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center group">
                        <div className=" relative  overflow-hidden ">
                            <img
                                src="../../../public/images/client-grey-06.png"
                                alt=""
                                className="transition-all duration-300 group-hover:-translate-y-full"
                            />
                            <div className=" absolute translate-y-full left-0 group-hover:-translate-y-full transition-all duration-300">
                                <img
                                    src="../../../public/images/client-global-06.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center group">
                        <div className=" relative  overflow-hidden ">
                            <img
                                src="../../../public/images/client-grey-06.png"
                                alt=""
                                className="transition-all duration-300 group-hover:-translate-y-full"
                            />
                            <div className=" absolute translate-y-full left-0 group-hover:-translate-y-full transition-all duration-300">
                                <img
                                    src="../../../public/images/client-global-06.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center group">
                        <div className=" relative  overflow-hidden ">
                            <img
                                src="../../../public/images/client-grey-06.png"
                                alt=""
                                className="transition-all duration-300 group-hover:-translate-y-full"
                            />
                            <div className=" absolute translate-y-full left-0 group-hover:-translate-y-full transition-all duration-300">
                                <img
                                    src="../../../public/images/client-global-06.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center group">
                        <div className=" relative  overflow-hidden ">
                            <img
                                src="../../../public/images/client-grey-06.png"
                                alt=""
                                className="transition-all duration-300 group-hover:-translate-y-full"
                            />
                            <div className=" absolute translate-y-full left-0 group-hover:-translate-y-full transition-all duration-300">
                                <img
                                    src="../../../public/images/client-global-06.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto my-10 px-5">
                {/* <div className="grid gap-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {cardItem.map((item) => (
                        <AnimateCard />
                    ))}
                </div> */}
                {/* <WorkingProcess /> */}
            </div>

            <ServicesSection />
            <ImageFilterGallery items={sampleItems} />
        </div>
    );
};

export default Home;
