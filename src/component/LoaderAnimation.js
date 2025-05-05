import { useState, useEffect, useCallback } from "react";
import LoaderTile from "./LoaderTile";
import CodePopup from "./CodePopup";
import { initialLoaders } from "./data"; // Assuming you have a data.js file for initial loaders

const LoaderAnimation = () => {
    const [loaders, setLoaders] = useState(initialLoaders);
    const [selectedLoader, setSelectedLoader] = useState(null);
    const [columns, setColumns] = useState(3);

    const calculateColumns = useCallback(() => {
        if (typeof window === 'undefined') return;
        const width = window.innerWidth;
        if (width >= 1536) {
            setColumns(4);
        } else if (width >= 1280) {
            setColumns(4);
        } else if (width >= 1024) {
            setColumns(3);
        } else if (width >= 768) {
            setColumns(2);
        } else {
            setColumns(1);
        }
    }, []);

    useEffect(() => {
        calculateColumns();
        window.addEventListener('resize', calculateColumns);
        return () => {
            window.removeEventListener('resize', calculateColumns);
        };
    }, [calculateColumns]);

    const openPopup = (loader) => {
        setSelectedLoader(loader);
    };

    const closePopup = () => {
        setSelectedLoader(null);
    };

    const getGridLayout = (loaders, columns) => {
        const grid = Array(columns).fill().map(() => []);
        let columnIndex = 0;
        loaders.forEach(loader => {
            grid[columnIndex].push(loader);
            columnIndex = (columnIndex + 1) % columns;
        });
        return grid;
    };

    const grid = getGridLayout(loaders, columns);

    return (
        <div className="min-h-screen bg-gray-950 px-40">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-white mb-8 text-center py-12">Loading Animations</h1>

                {/* Dynamically adjust grid columns using Tailwind */}
                <div className={`grid gap-8 ${columns === 1 ? 'grid-cols-1' : columns === 2 ? 'grid-cols-2' : columns === 3 ? 'grid-cols-3' : 'grid-cols-4'}`}>
                    {grid.map((column, columnIndex) => (
                        <div key={columnIndex} className="flex flex-col gap-8">
                            {column.map(loader => (
                                <LoaderTile key={loader.id} loader={loader} onClick={openPopup} />
                            ))}
                        </div>
                    ))}
                </div>

                {selectedLoader && (
                    <CodePopup loader={selectedLoader} onClose={closePopup} />
                )}
            </div>
        </div>
    );
};

export default LoaderAnimation;
