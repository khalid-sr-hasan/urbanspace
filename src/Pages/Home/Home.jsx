import React from "react";
import AnimateCard from "../../components/AnimateCard/AnimateCard";
import WorkingProcess from "../../components/WorkingProcess/WorkingProcess";

const Home = () => {
    const cardItem = [1, 2, 3];

    return (
        <div>
            <div className="max-w-7xl mx-auto my-10 px-5">
                <div className="grid gap-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {cardItem.map((item) => (
                        <AnimateCard />
                    ))}
                </div>
                <WorkingProcess />
            </div>
        </div>
    );
};

export default Home;
