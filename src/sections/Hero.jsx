import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import Flip from "gsap/Flip";
import video from "../assets/thousand_sunny.mp4";
import profilePic from "../assets/profile-pic.jpg";
import {heroWords} from "../constants/index";
import {useRef, useState} from "react";

gsap.registerPlugin(Flip);

const Hero = () => {
    const [isZoomed, setIsZoomed] = useState(false);
    const [flipState, setFlipState] = useState(null);
    const profileRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            ".hero-text",
            {y: 50, opacity: 0},
            {y: 5, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut"}
        );

        const steps = heroWords.length;
        const duration = 20;
        const timeline = gsap.timeline({repeat: -1, ease: "none"});

        for (let i = 1; i <= steps; i++) {
            timeline.to(".wrapper", {
                yPercent: -100 * i / steps,
                duration: duration / steps
            });
        }
    }, []);

    useGSAP(() => {
        if(!flipState) return;

        Flip.from(flipState, {
            duration: 0.6,
            ease: "power2.inOut",
            absolute: true,
            onEnter: (el) => {
                el.style.position = "fixed";
                el.style.top = "50%";
                el.style.left = "50%";
                el.style.transform = "translate(-50%, -50%)";
            },
            onLeave: (el) => {
                el.style.position = "";
                el.style.top = "";
                el.style.left = "";
                el.style.transform = "";
            }
        });

        setFlipState(null);
    }, [flipState]);

    const toggleZoom = () => {
        const state = Flip.getState(profileRef.current);

        setFlipState(state);
        setIsZoomed((prev) => !prev);
    };

    return (
        <>
            <section className="c-space my-20 scroll-mt-20" id="home">
                <div className="relative gap-5 w-full h-full">
                    <div className="aspect-video relative">
                        <video className="w-full h-full rounded-3xl object-cover" autoPlay loop muted>
                            <source src={video} type="video/mp4"/>
                        </video>

                        <div className="flex flex-col gap-7 absolute inset-0 justify-between">
                            <div className="hero-text">
                                <h1>
                                    Turning
                                    <span className="slide">
                                        <span className="wrapper">
                                            {heroWords.map((word, index) => (
                                                <span
                                                    key={index}
                                                    className="flex items-center md:gap-3 gap-1 pb-2"
                                                >
                                                    <img
                                                        src={word.imgPath}
                                                        alt={word}
                                                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white"
                                                    />
                                                    <span>{word.text}</span>
                                                </span>
                                            ))}
                                        </span>
                                    </span>
                                </h1>
                                <h1>into Real-World Solutions</h1>
                                <h1>that Make a Difference.</h1>
                            </div>

                            <div className="flex flex-row relative gap-5 left-5 bottom-5 md:left-10 md:bottom-10">
                                <img
                                    ref={profileRef}
                                    src={profilePic}
                                    alt="profile-pic"
                                    className={`rounded-full object-contain cursor-pointer z-20 ${isZoomed ? 
                                        "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] xl:w-[60vw] xl:h-[60vw] 2xl:w-[40vw] 2xl:h-[40vw] 3xl:w-[30vw] 3xl:h-[30vw]" 
                                        : "size-16 md:size-64"}`}
                                    onClick={toggleZoom}
                                />

                                <div className="flex flex-col gap-1 justify-end text-white">
                                    <p className="text-base md:text-xl font-semibold">
                                        Hi, I'm Aleksandar!
                                    </p>

                                    <div className="hidden md:flex md:flex-col">
                                        <p className="text-white text-base">A software developer based in the United States,</p>
                                        <p className="text-white text-base">who is passionate about coding.</p>
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
};

export default Hero;