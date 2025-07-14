import ProjectImage from "./ProjectImage.jsx";
import gsap from "gsap";
import Flip from "gsap/Flip";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";

gsap.registerPlugin(Flip);

const ProjectCard = ({project, index, isExpanded, toggleExpand}) => {
    const cardRef = useRef(null);
    const isMobile = window.innerWidth <= 768;

    useGSAP(() => {
        if (!cardRef.current) return;

        const element = cardRef.current;
        const flip = Flip.getState(element);

        if (isExpanded) {
            // Expand
            gsap.set(element, {
                position: "fixed",
                top: "50%",
                left: "50%",
                xPercent: -50,
                yPercent: -50,
                width: isMobile ? "90vw" : "50vw",
                height: "auto",
                maxHeight: "90vh",
                zIndex: 50
            });

            Flip.from(flip, {
                duration: 0.6,
                ease: "power2.inOut",
            });
        } else {
            // Collapse
            gsap.set(element, { clearProps: "all" });

            Flip.from(flip, {
                duration: 0.6,
                ease: "power2.inOut",
            });
        }
    }, [isExpanded]);

    return (
        <div
            ref={cardRef}
            onClick={() => toggleExpand(index)}
            className="relative flex-1 flex-col h-[300px] overflow-hidden bg-black-200 rounded-3xl cursor-pointer text-white flex items-center p-4"
        >
            <div className="flex flex-col w-full rounded-3xl">
                <ProjectImage imageSrc={project.images[0]} projectTitle={project.title} className="aspect-video object-cover rounded-3xl my-5 mx-auto h-[175px] md:h-[200px]"/>

                <h2 className="text-xl font-semibold mx-auto mb-5">{project.title}</h2>
            </div>

            <div className={`flex-1 p-4 text-sm ${isExpanded ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none absolute z-0'}`}>
                <div className="flex flex-row gap-2 my-5">
                    {project.tech.map((Icon, i) => (
                        <Icon key={i} className="tech-logo"/>
                    ))}
                </div>

                <p className="text-sm md:text-base">{project.description}</p>

                <div className="flex flex-row justify-center gap-40 py-2">
                    {project.navLinks.map(({icon: Icon, href}, i) => {
                        let toolTip = href.includes(".com") ? "Checkout Github Repo!" : "Checkout Live Site!";
                        toolTip = href.includes(".jar") ? "Download Jar File!" : toolTip;

                        return (
                            <a
                                key={i}
                                className="relative group flex items-center cursor-pointer"
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Icon className="tech-logo text-neutral-400 hover:text-white"/>

                                <span className="tool-tip">
                                    {toolTip}
                                </span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;