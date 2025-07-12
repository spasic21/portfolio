import gsap from "gsap";
import ProjectImage from "./ProjectImage.jsx";
import {useRef, useState} from "react";

const ProjectCard = ({project, index, containerRef}) => {
    const cardRef = useRef(null);
    const contentRefs = useRef([]);
    const [expandedIndex, setExpandedIndex] = useState(null);
    const originalRectRef = useRef(null);

    const handleClick = (index) => {
        const card = cardRef.current;
        const container = containerRef.current;

        if (expandedIndex === index) {
            // Collapse
            const rect = originalRectRef.current;

            gsap.to(contentRefs.current[index], {
                opacity: 0,
                duration: 0.3,
                ease: 'power1.out',
                onComplete: () => {
                    contentRefs.current[index].style.pointerEvents = "none";
                    contentRefs.current[index].style.position = "absolute";
                    gsap.set(contentRefs.current[index], {zIndex: 0});
                }
            });

            gsap.to(card, {
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
                duration: 0.5,
                ease: 'power2.inOut',
                onComplete: () => {
                    gsap.set(card, {
                        clearProps: 'all'
                    });

                    setExpandedIndex(null);
                }
            });
        } else {
            // Expand - Get coordinates
            const boxRect = card.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            const dx = boxRect.left - containerRect.left;
            const dy = boxRect.top - containerRect.top;

            originalRectRef.current = {
                top: dy,
                left: dx,
                width: boxRect.width,
                height: boxRect.height
            };

            gsap.set(card, {
                position: 'absolute',
                top: dy,
                left: dx,
                width: boxRect.width,
                height: boxRect.height,
                zIndex: 10,
            });

            gsap.to(card, {
                top: 0,
                left: 0,
                width: containerRect.width,
                height: containerRect.height,
                duration: 0.5,
                ease: 'power2.inOut',
                onStart: () => {
                    contentRefs.current[index].style.pointerEvents = "auto";
                    contentRefs.current[index].style.position = "relative";
                },
                onComplete: () => {
                    gsap.fromTo(contentRefs.current[index],
                        {opacity: 0, zIndex: 0},
                        {opacity: 1, duration: 0.4, ease: 'power2.inOut'}
                    );
                }
            });

            setExpandedIndex(index);
        }
    };

    return (
        <div
            ref={cardRef}
            onClick={() => handleClick(index)}
            className={`relative flex-1 h-[300px] overflow-hidden bg-black-200 rounded-3xl cursor-pointer text-white flex items-center pb-6 ${expandedIndex === index ? 'flex-col md:flex-row' : 'flex-col'} `}
        >
            <div className={`flex flex-col ${expandedIndex === index ? 'w-full md:w-1/2' : 'w-full'} rounded-3xl`}>
                <ProjectImage imageSrc={project.images[0]} projectTitle={project.title}
                              className={`aspect-video object-cover rounded-3xl my-5 mx-auto h-[175px] md:h-[200px]`}/>

                <h2 className="text-xl font-semibold mx-auto mb-5">{project.title}</h2>
            </div>

            <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={`flex-1 p-4 text-sm ${expandedIndex === index ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none absolute z-0'}`}
            >
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