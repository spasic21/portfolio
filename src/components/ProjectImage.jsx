import {useEffect, useRef, useState} from "react";

const ProjectImage = ({imageSrc, projectTitle, className}) => {
    const isVideo = path => path.toLowerCase().endsWith('.mp4');
    const containerRef = useRef(null);
    const [inView, setInView] = useState(false);

    // Defer heavy project videos until the card nears the viewport — the showcase
    // sits below the fold, so this keeps the hero from competing with multi-MB media.
    useEffect(() => {
        if (!isVideo(imageSrc)) return;
        const el = containerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "200px" }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [imageSrc]);

    if (isVideo(imageSrc)) {
        return (
            <div ref={containerRef} className={`${className} bg-ink`} style={{borderRadius: '20px', overflow: 'hidden'}}>
                {inView && (
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        key={projectTitle}
                    >
                        <source src={imageSrc} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
        );
    }

    return (
        <img
            src={imageSrc}
            alt={projectTitle}
            className={className}
            style={{borderRadius: '20px'}}
            loading="lazy"
            decoding="async"
        />
    );
}

export default ProjectImage;
