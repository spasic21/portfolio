import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import video from "../assets/thousand_sunny.mp4";
import profilePic from "../assets/profile-pic.jpg";
import {heroWords} from "../constants/index";

const Hero = () => {
    useGSAP(() =>{
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

    return (
        <section className="c-space my-20" id="home">
            <div className="relative gap-5 w-full h-full">
                <div className="aspect-video rounded-3xl overflow-hidden relative">
                    <video className="w-full h-full object-cover" autoPlay loop muted>
                        <source src={video} type="video/mp4"/>
                    </video>

                    <div className="flex flex-col gap-7 absolute inset-0 z-10 justify-between">
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
                            <img src={profilePic} alt="profile-pic" className="size-16 md:size-64 rounded-full object-contain"/>

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
    );
}

export default Hero;