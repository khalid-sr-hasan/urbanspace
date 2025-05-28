import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageFilterGallery = ({ items }) => {
    const [filter, setFilter] = useState("*");

    // Memoize categories, only recompute when items change
    const categories = useMemo(() => {
        const unique = Array.from(
            new Set(items.map(({ category }) => category))
        ).sort();
        return ["*", ...unique];
    }, [items]);

    // Memoize filtered items to avoid extra state and re-renders
    const filteredItems = useMemo(() => {
        return filter === "*"
            ? items
            : items.filter(({ category }) => category === filter);
    }, [items, filter]);

    // Memoized handlers to prevent re-creation on every render
    const handleFilterChange = useCallback((cat) => setFilter(cat), []);

    return (
        <div className="p-6">
            {/* Controls */}
            <div className="flex flex-wrap gap-3 mb-6">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => handleFilterChange(cat)}
                        className={`px-4 py-2 rounded font-semibold transition duration-200 border ${
                            filter === cat
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-white text-gray-800 hover:bg-blue-100 border-gray-300"
                        }`}
                    >
                        {cat === "*"
                            ? "All"
                            : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                ))}
            </div>

            {/* Gallery */}
            {filteredItems.length === 0 ? (
                <div className="text-center text-gray-500 font-semibold mt-20">
                    No items found.
                </div>
            ) : (
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id ?? item.title}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.1 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                }}
                                whileHover={{ scale: 1.05 }}
                                className="border-2 border-[#2A4153] rounded overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow"
                                onClick={() =>
                                    item.link &&
                                    window.open(item.link, "_blank")
                                }
                                style={{ originX: 0.5, originY: 0.5 }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-64 object-cover"
                                    loading="lazy"
                                    draggable={false}
                                />
                                <div className="p-3 bg-[#2A4153] text-white text-center font-bold">
                                    {item.title}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
};

export default ImageFilterGallery;
