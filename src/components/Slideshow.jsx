import {useEffect, useState} from "react";

const Slideshow = ({ images }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if(images && images.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
            }, 8000)

            return () => clearInterval(interval);
        }
    }, [images]);

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
            <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full flex items-center justify-center">
                <p className="text-white-600">No images provided</p>
            </div>
        );
    }

    const isVideo = path => path.toLowerCase().endsWith('.mp4');

    return (
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full relative">
            <div className="w-full h-full overflow-hidden rounded-lg">
                {isVideo(images[currentIndex]) ? (
                    <video
                        className="w-full h-96 object-cover"
                        style={{ borderRadius: '10px' }}
                        autoPlay
                        loop
                        muted
                        playsInline
                        key={images[currentIndex]}
                    >
                        <source src={images[currentIndex]} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        className="w-full h-96 object-cover"
                        style={{ borderRadius: '10px' }}
                    />
                )}
            </div>

            <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
                onClick={goToPrevious}
            >
                <img src="/assets/left-arrow.png" alt="Previous" className="w-4 h-4" />
            </button>
            <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
                onClick={goToNext}
            >
                <img src="/assets/right-arrow.png" alt="Next" className="w-4 h-4" />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                            currentIndex === index ? 'bg-white' : 'bg-gray-400'
                        }`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Slideshow;