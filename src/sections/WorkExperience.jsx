import {workExperiences} from "../constants/index.js";
import WorkCard from "../components/WorkCard.jsx";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {forwardRef} from "react";

gsap.registerPlugin(ScrollTrigger);

const WorkExperience = forwardRef((props, ref) => {
    useGSAP(() => {
        if(window.innerWidth > 768) {
            gsap.utils.toArray(".workText").forEach((text) => {
                gsap.from(text, {
                    opacity: 0,
                    xPercent: 100,
                    duration: 1,
                    ease:"power2.inOut",
                    scrollTrigger: {
                        trigger: text,
                        start: "top 60%"
                    }
                })
            }, "<");
        }
    }, []);

    return (
        <section ref={ref} className="c-space my-20 scroll-mt-20">
            <div className="w-full text-white-600">
                <h3 className="head-text">Work Experience</h3>

                <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                    {workExperiences.map(({id, name, position, duration, responsibilities, icon}) => (
                        <div key={id} className="workText flex gap-5 md:gap-10 xl:gap-20 relative">
                            <WorkCard name={name} position={position} duration={duration} responsibilities={responsibilities} icon={icon} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default WorkExperience;