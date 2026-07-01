import ProjectImage from "./ProjectImage.jsx";
import Slideshow from "./Slideshow.jsx";
import gsap from "gsap";
import Flip from "gsap/Flip";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import {useMediaQuery} from "react-responsive";
import {RiCloseLine} from "react-icons/ri";

const ProjectCard = ({project, index, isExpanded, toggleExpand}) => {
    const cardRef = useRef(null);
    const isMobile = useMediaQuery({maxWidth: 768});
    const buildNo = String(index + 1).padStart(2, "0");

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

    const open = () => { if (!isExpanded) toggleExpand(index); };
    const close = (e) => { e.stopPropagation(); toggleExpand(index); };
    const onKeyDown = (e) => {
        if (!isExpanded && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            toggleExpand(index);
        }
    };

    return (
        <div
            ref={cardRef}
            onClick={open}
            onKeyDown={onKeyDown}
            role={isExpanded ? undefined : "button"}
            tabIndex={isExpanded ? -1 : 0}
            aria-expanded={isExpanded}
            aria-label={isExpanded ? undefined : `${project.title} — open dossier`}
            className={`project-card group relative flex-1 flex-col h-[390px] bg-ink rounded-3xl text-foam flex items-center p-4 border transition-colors duration-300 ${isExpanded ? "border-gold/60 cursor-default overflow-y-auto" : "border-black-300 hover:border-gold/50 cursor-pointer overflow-hidden"}`}
        >
            {/* Hero media — a lazy thumbnail when closed, the full screenshot gallery when open */}
            <div className="w-full">
                {isExpanded ? (
                    <Slideshow images={project.images}/>
                ) : (
                    <ProjectImage
                        imageSrc={project.images[0]}
                        projectTitle={project.title}
                        className="aspect-video w-full rounded-2xl mt-1 mb-4 mx-auto h-[150px] md:h-[160px]"
                    />
                )}
            </div>

            {/* Collapsed face — scannable at a glance: index, title, one-liner, stack */}
            {!isExpanded && (
                <div className="w-full flex flex-col gap-2">
                    <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase">Build {buildNo}</p>
                    <h2 className="font-display text-xl font-semibold text-foam">{project.title}</h2>
                    <p className="text-sm text-white-600 leading-snug">{project.tagline}</p>
                    <div className="flex flex-row flex-wrap gap-2 mt-2">
                        {project.tech.map((Icon, i) => (
                            <Icon key={i} className="w-8 h-8 rounded-md p-1.5 bg-black-300 text-white-700"/>
                        ))}
                    </div>
                    <span className="mt-3 font-mono text-[11px] tracking-[0.2em] uppercase text-white-500 group-hover:text-gold transition-colors">
                        Open dossier &rarr;
                    </span>
                </div>
            )}

            {/* Expanded detail */}
            {isExpanded && (
                <div className="w-full mt-5 flex flex-col gap-4">
                    <button
                        onClick={close}
                        aria-label="Close project"
                        className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black-300 text-foam flex items-center justify-center hover:bg-gold hover:text-abyss transition-colors"
                    >
                        <RiCloseLine className="w-5 h-5"/>
                    </button>

                    <div>
                        <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase">Build {buildNo}</p>
                        <h2 className="font-display text-2xl font-semibold text-foam mt-1">{project.title}</h2>
                    </div>

                    <div className="flex flex-row flex-wrap gap-2">
                        {project.tech.map((Icon, i) => (
                            <Icon key={i} className="w-9 h-9 rounded-md p-2 bg-black-300 text-white-700"/>
                        ))}
                    </div>

                    <p className="text-sm md:text-base text-white-600 leading-relaxed">{project.description}</p>

                    <div className="flex flex-row flex-wrap gap-3 pt-1">
                        {project.navLinks.map(({icon: Icon, href, label}, i) => (
                            <a
                                key={i}
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-2 rounded-lg border border-gold/50 px-4 py-2 text-sm font-medium text-gold hover:bg-gold hover:text-abyss transition-colors"
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Icon className="w-5 h-5"/>
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
