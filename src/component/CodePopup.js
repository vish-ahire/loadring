import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import { XCircle, Copy, Loader2 } from "lucide-react"; // Assuming you have these icons installed

const CodePopup = ({ loader, onClose }) => {
    const [copiedHtml, setCopiedHtml] = useState(false);
    const [copiedCss, setCopiedCss] = useState(false);
    const containerRef = useRef(null);

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text).then(() => {
            if (type === 'html') {
                setCopiedHtml(true);
                setTimeout(() => setCopiedHtml(false), 2000);
            } else {
                setCopiedCss(true);
                setTimeout(() => setCopiedCss(false), 2000);
            }
        });
    };

    const handleOutsideClick = useCallback((event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [handleOutsideClick]);

    return (
        <AnimatePresence>
            <motion.div
                ref={containerRef}
                className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="bg-gray-900 rounded-xl shadow-2xl p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto relative border border-white/10"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                >
                    <div className="absolute top-4 right-4">
                        <button onClick={onClose} className="text-gray-400 hover:text-white">
                            <XCircle className="h-6 w-6" />
                        </button>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-4">{loader.name}</h2>

                    <div className="flex items-center justify-center w-full my-4 border border-white/10 rounded-lg p-4 bg-white/5">
                        {loader.preview}
                    </div>

                    <div className="mb-4">
                        <h3 className="text-lg font-semibold text-gray-300 mb-2">HTML:</h3>
                        <div className="relative">
                            <pre className="bg-gray-800 rounded-md p-4 overflow-x-auto text-sm text-gray-100">
                                <code>{loader.html}</code>
                            </pre>
                            <button
                                onClick={() => copyToClipboard(loader.html, 'html')}
                                className="absolute top-2 right-2 text-gray-400 hover:text-white"
                                title="Copy HTML"
                            >
                                {copiedHtml ? <Loader2 className="h-5 w-5 animate-spin" /> : <Copy className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-300 mb-2">CSS:</h3>
                        <div className="relative">
                            <pre className="bg-gray-800 rounded-md p-4 overflow-x-auto text-sm text-gray-100">
                                <code>{loader.css}</code>
                            </pre>
                            <button
                                onClick={() => copyToClipboard(loader.css, 'css')}
                                className="absolute top-2 right-2 text-gray-400 hover:text-white"
                                title="Copy CSS"
                            >
                                {copiedCss ? <Loader2 className="h-5 w-5 animate-spin" /> : <Copy className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default CodePopup;
