import React from "react";
import "./AnimateCard.css";

const AnimateCard = () => {
    return (
        <div>
            <article class="card__article">
                <img
                    src="/public/landscape-1.png"
                    alt="image"
                    class="card__img"
                />

                <div class="card__data w-2/3">
                    <span class="card__description">
                        Vancouver Mountains, Canada
                    </span>
                    <h2 class="card__title">The Great Path</h2>
                    <a href="#" class="card__button">
                        Read More
                    </a>
                </div>
            </article>
        </div>
    );
};

export default AnimateCard;
