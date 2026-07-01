import {useEffect, useState} from "react";
import {RiArrowLeftLine, RiArrowRightLine} from "react-icons/ri";

const Slideshow = ({ images }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if(images && images.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
            }, 8000)

            return () => clearInterval(interval);
        }
    }, [currentIndex, images]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % images.length
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    if (!images || images.length === 0) {
        return (
            <div className="border border-black-300 bg-abyss rounded-2xl h-64 flex items-center justify-center">
                <p className="text-white-600 font-mono text-sm">No screenshots logged</p>
            </div>
        );
    }

    const isVideo = path => path.toLowerCase().endsWith('.mp4');
    const stop = (fn) => (e) => { e.stopPropagation(); fn(); };

    return (
        <div className="bg-abyss rounded-2xl h-[30vh] md:h-[38vh] relative overflow-hidden border border-black-300">
            <div className="w-full h-full flex justify-center items-center">
                {isVideo(images[currentIndex]) ? (
                    <video
                        className="w-full h-full object-contain"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        key={images[currentIndex]}
                    >
                        <source src={images[currentIndex]} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img
                        src={images[currentIndex]}
                        alt={`Screenshot ${currentIndex + 1} of ${images.length}`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        decoding="async"
                    />
                )}
            </div>

            {/* Log coordinate — which frame of the record you're viewing */}
            <span className="absolute top-3 left-3 font-mono text-[11px] tracking-[0.2em] text-gold/90 bg-abyss/70 px-2 py-1 rounded">
                {String(currentIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>

            {images.length > 1 && (
                <>
                    <button
                        aria-label="Previous screenshot"
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-ink/80 text-foam p-2 rounded-full hover:bg-gold hover:text-abyss transition-colors"
                        onClick={stop(goToPrevious)}
                    >
                        <RiArrowLeftLine className="w-5 h-5" />
                    </button>
                    <button
                        aria-label="Next screenshot"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-ink/80 text-foam p-2 rounded-full hover:bg-gold hover:text-abyss transition-colors"
                        onClick={stop(goToNext)}
                    >
                        <RiArrowRightLine className="w-5 h-5" />
                    </button>

                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                aria-label={`Go to screenshot ${index + 1}`}
                                className={`h-1.5 rounded-full transition-all ${
                                    currentIndex === index ? 'w-5 bg-gold' : 'w-1.5 bg-white-500'
                                }`}
                                onClick={stop(() => goToSlide(index))}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Slideshow;