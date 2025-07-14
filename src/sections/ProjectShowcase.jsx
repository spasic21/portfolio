import {forwardRef, useState} from "react";
import {personalProjects} from "../constants/index";
import ProjectCard from "../components/ProjectCard";
import Flip from "gsap/Flip";
import gsap from "gsap";

gsap.registerPlugin(Flip);

const ProjectShowcase = forwardRef((props, ref) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex((prev) => prev === index ? null : index);
    };

    return (
        <>
            <section ref={ref} className="c-space my-20 scroll-mt-20">
                <div className="w-full text-white-600">
                    <h3 className="head-text">Project Showcase</h3>

                    <div className="relative flex flex-col md:flex-row gap-5 w-full h-auto mt-10 rounded-3xl overflow-hidden">
                        {personalProjects.map((project, i) => (
                            <ProjectCard
                                key={i}
                                project={project}
                                index={i}
                                isExpanded={expandedIndex === i}
                                toggleExpand={toggleExpand}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {expandedIndex !== null && (
                <div
                    className="fixed inset-0 z-10 bg-black/80"
                    onClick={() => toggleExpand(expandedIndex)}
                />
            )}
        </>
    );
});

export default ProjectShowcase;
