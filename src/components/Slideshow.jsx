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
            <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full flex items-center justify-center">
                <p className="text-white-600">No images provided</p>
            </div>
        );
    }

    const isVideo = path => path.toLowerCase().endsWith('.mp4');

    return (
        <div className="border border-black-300 bg-black-200 rounded-3xl h-96 md:h-full relative">
            <div className="w-full h-full overflow-hidden rounded-lg flex justify-center items-center p-5">
                {isVideo(images[currentIndex]) ? (
                    <video
                        className="w-full h-[36rem] object-contain"
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
                        className="w-full h-[36rem] object-contain"
                        style={{ borderRadius: '10px' }}
                    />
                )}
            </div>

            <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
                onClick={goToPrevious}
            >
                <RiArrowLeftLine className="w-6 h-6" />
            </button>
            <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
                onClick={goToNext}
            >
                <RiArrowRightLine className="w-6 h-6" />
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