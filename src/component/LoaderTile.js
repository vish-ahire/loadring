import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const LoaderTile = ({ loader, onClick }) => {
    const [aspectRatio, setAspectRatio] = useState('1:1');

    useEffect(() => {
        if (loader.height) {
            const width = 200;
            const calculatedAspectRatio = `${width}:${loader.height}`;
            setAspectRatio(calculatedAspectRatio);
        } else {
            setAspectRatio('1:1');
        }
    }, [loader.height]);

    return (
        <motion.div
            className="relative rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform transform hover:scale-120 bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center"
            style={{ aspectRatio: aspectRatio }}
            onClick={() => onClick(loader)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.90 }}
        >
            <div className="flex items-center justify-center w-full h-24 p-4">
                {loader.preview}
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent text-white text-sm font-medium">
                {loader.name}
            </div>
        </motion.div>
    );
};

export default LoaderTile;
