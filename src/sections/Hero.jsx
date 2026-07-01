import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import Flip from "gsap/Flip";
import video from "../assets/thousand_sunny.mp4";
import profilePic from "../assets/profile-pic.jpg";
import {heroWords} from "../constants/index";
import {forwardRef, useRef, useState} from "react";
import {useMediaQuery} from "react-responsive";

const Hero = forwardRef((props, ref) => {
    const [isZoomed, setIsZoomed] = useState(false);
    const profileRef = useRef(null);
    const isMobile = useMediaQuery({maxWidth: 768});

    useGSAP(() => {
        const mm = gsap.matchMedia();

        // Full arrival choreography — only when motion is welcome.
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            const arrival = gsap.timeline({defaults: {ease: "power3.out"}});
            arrival
                .from(".hero-text .eyebrow", {opacity: 0, x: -24, duration: 0.6})
                .from(".hero-text h1", {opacity: 0, y: 32, stagger: 0.12, duration: 0.7}, "-=0.15")
                // clearProps: don't leave a transform behind — it would become the containing
                // block for the fixed-position profile zoom and break its centering.
                .from(".hero-intro", {opacity: 0, y: 20, duration: 0.7, clearProps: "transform"}, "-=0.35");

            // Rotating words start once the headline has settled.
            const steps = heroWords.length;
            const duration = 20;
            const slider = gsap.timeline({repeat: -1, ease: "none", delay: 0.6});

            for (let i = 1; i <= steps; i++) {
                slider.to(".wrapper", {
                    yPercent: -100 * i / steps,
                    duration: duration / steps
                });
            }
        });
    }, []);

    const toggleZoom = () => {
        const element = profileRef.current;

        const flip = Flip.getState(element);

        if (!isZoomed) {
            // Zoom in
            gsap.set(element, {
                position: "fixed",
                top: "50%",
                left: "50%",
                xPercent: -50,
                yPercent: -50,
                width: isMobile ? "90vw" : "50vw",
                height: "auto",
                zIndex: 50,
            });

            Flip.from(flip, {
                duration: 0.6,
                ease: "power2.inOut",
                absolute: true,
            });
        } else {
            // Zoom out
            gsap.set(element, { clearProps: "all" });

            Flip.from(flip, {
                duration: 0.6,
                ease: "power2.inOut",
                absolute: true,
            });
        }

        setIsZoomed(prev => !prev);
    };


    return (
        <>
            <section ref={ref} className="c-space my-20 scroll-mt-20">
                <div className="relative gap-5 w-full h-full">
                    <div className="aspect-video relative">
                        <video className="w-full h-full rounded-3xl object-cover" autoPlay loop muted playsInline preload="metadata">
                            <source src={video} type="video/mp4"/>
                        </video>

                        {/* Scrim — pulls the footage into the sea-navy palette and keeps overlaid text legible */}
                        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-abyss/85 via-abyss/25 to-abyss/70"/>

                        <div className="flex flex-col gap-7 absolute inset-0 justify-between">
                            <div className="hero-text">
                                <p className="eyebrow not-italic mb-3 md:mb-5 pointer-events-auto">
                                    Log 01 &middot; Grand Line &middot; Software Engineer
                                </p>
                                <h1 className="font-display">
                                    Turning
                                    <span className="slide">
                                        <span className="wrapper">
                                            {heroWords.map((word, index) => (
                                                <span
                                                    key={index}
                                                    className="flex items-center md:gap-3 gap-1 pb-2 text-gold"
                                                >
                                                    <img
                                                        src={word.imgPath}
                                                        alt={word.text}
                                                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-gold ring-1 ring-gold/60"
                                                    />
                                                    <span>{word.text}</span>
                                                </span>
                                            ))}
                                        </span>
                                    </span>
                                </h1>
                                <h1 className="font-display">into Real-World Solutions</h1>
                                <h1 className="font-display">that Make a Difference.</h1>
                            </div>

                            <div className="hero-intro flex flex-row relative gap-5 left-5 bottom-5 md:left-10 md:bottom-10">
                                <img
                                    ref={profileRef}
                                    src={profilePic}
                                    alt="profile-pic"
                                    className="rounded-full object-contain size-16 md:size-64 cursor-pointer z-30"
                                    onClick={toggleZoom}
                                />

                                <div className="flex flex-col gap-1 justify-end text-foam">
                                    <p className="text-base md:text-xl font-semibold font-display">
                                        Hi, I'm <span className="text-gold">Aleksandar</span>
                                    </p>

                                    <div className="hidden md:flex md:flex-col text-white-600">
                                        <p className="text-base">A software engineer based in the United States,</p>
                                        <p className="text-base">charting a course through Java, Go, and the web.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {isZoomed && (
                <div className="fixed inset-0 z-10 bg-black/80" onClick={toggleZoom}/>
            )}
        </>
    );
});

export default Hero;