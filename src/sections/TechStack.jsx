import {techStackIcons} from "../constants/index.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import TechIconCard from "../components/TechIconCard.jsx";
import {forwardRef, useEffect, useState} from "react";

const TechStack = forwardRef((props, ref) => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth > 768);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    useGSAP(() => {
        if (!isLargeScreen) return;

        gsap.fromTo(".tech-card",
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
                stagger: 0.2,
                scrollTrigger: {
                    start: "top center"
                }
        });
    }, [isLargeScreen]);

    return (
        <section ref={ref} className="c-space my-20 scroll-mt-20">
            <h3 className="head-text">Tech Stack</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-10 py-5 sm:py-10">
                {techStackIcons.map((icon) => (
                    <div key={icon.name} className="tech-card group bg-black-200 rounded-3xl overflow-hidden py-5">
                        {isLargeScreen && (
                            <div className="absolute left-0 bottom-[-100%] w-full h-full bg-[#2D3240] group-hover:bottom-0 transition-all duration-700"/>
                        )}

                        <div className="flex flex-col md:justify-center items-center xl:gap-5 overflow-hidden relative z-10 group-hover:cursor-grab">
                            <div className="flex justify-center items-center w-52 h-60 relative">
                                <TechIconCard model={icon}/>
                            </div>

                            <div className="px-5 md:px-10 w-full">
                                <p className="text-lg 2xl:text-2xl pb-5 xl:pb-0 font-semibold text-white text-center">{icon.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
});

export default TechStack;