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
        // Interior Design
        {
            id: 1,
            title: "Modern Living Room",
            category: "interior-design",
            order: 1,
            image: "https://i0.wp.com/archconceptbd.com/wp-content/uploads/2023/06/VIEW-03.jpg",
        },
        {
            id: 2,
            title: "Open Kitchen",
            category: "interior-design",
            order: 2,
            image: "https://images.unsplash.com/photo-1570190732367-f3db89781361?auto=format&fit=crop&w=800&q=80",
            link: "https://unsplash.com/photos/aevVr9bLx2o",
        },
        {
            id: 3,
            title: "Luxury Bedroom",
            category: "interior-design",
            order: 3,
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
            link: "https://unsplash.com/photos/6VPEOdpFNAs",
        },
        {
            id: 4,
            title: "Contemporary Office",
            category: "interior-design",
            order: 4,
            image: "https://images.unsplash.com/photo-1565088742-cb71f8e93b6f?auto=format&fit=crop&w=800&q=80",
            link: "https://unsplash.com/photos/ZFqVthKhjDI",
        },

        // Nature
        {
            id: 5,
            title: "Mountain Sunrise",
            category: "nature",
            order: 5,
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
            link: "https://unsplash.com/photos/6VPEOdpFNAs",
        },
        {
            id: 6,
            title: "Forest Path",
            category: "nature",
            order: 6,
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
            link: "https://unsplash.com/photos/6dW3xyQvcYE",
        },
        {
            id: 7,
            title: "Desert Dunes",
            category: "nature",
            order: 7,
            image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
            link: "https://unsplash.com/photos/BbQLHCpVUqA",
        },

        // Urban
        {
            id: 8,
            title: "City Skyline",
            category: "urban",
            order: 8,
            image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
            link: "https://unsplash.com/photos/mEZ3PoFGs_k",
        },
        {
            id: 9,
            title: "Night City Lights",
            category: "urban",
            order: 9,
            image: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=800&q=80",
            link: "https://unsplash.com/photos/xII7efH1G6o",
        },
        {
            id: 10,
            title: "Modern Architecture",
            category: "urban",
            order: 10,
            image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
            link: "https://unsplash.com/photos/3Z70SDuYs5g",
        },

        // Architecture
        {
            id: 11,
            title: "Modern Architecture",
            category: "architecture",
            order: 11,
            image: "https://images.unsplash.com/photo-1560328651-6bb0f7027c5d?auto=format&fit=crop&w=800&q=80",
            link: "https://unsplash.com/photos/xt5ONe6-pxI",
        },
        {
            id: 12,
            title: "Architectural Details",
            category: "architecture",
            order: 12,
            image: "https://images.unsplash.com/photo-1522492727415-d1a1a81c4439?auto=format&fit=crop&w=800&q=80",
            link: "https://unsplash.com/photos/hxLehRbD5uI",
        },

        // Abstract
        {
            id: 13,
            title: "Abstract Light",
            category: "abstract",
            order: 13,
            image: "https://images.unsplash.com/photo-1519821376640-b06fe104aa38?auto=format&fit=crop&w=800&q=80",
            link: "https://unsplash.com/photos/pH5El59XZYk",
        },
        {
            id: 14,
            title: "Colorful Abstract",
            category: "abstract",
            order: 14,
            image: "https://images.unsplash.com/photo-1560297487-3c46c2f1b1d2?auto=format&fit=crop&w=800&q=80",
            link: "https://unsplash.com/photos/ruwKjpUMVyo",
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
            </div>
            <WorkingProcess />

            <ServicesSection />
            <ImageFilterGallery items={sampleItems} />
        </div>
    );
};

export default Home;
