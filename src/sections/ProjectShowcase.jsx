import {forwardRef, useEffect, useState} from "react";
import {personalProjects} from "../constants/index";
import ProjectCard from "../components/ProjectCard";

const ProjectShowcase = forwardRef((props, ref) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex((prev) => prev === index ? null : index);
    };

    // Close the open dossier on Escape.
    useEffect(() => {
        if (expandedIndex === null) return;
        const onKey = (e) => { if (e.key === "Escape") setExpandedIndex(null); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [expandedIndex]);

    return (
        <>
            <section ref={ref} className="c-space my-20 scroll-mt-20">
                <div className="w-full text-white-600">
                    <p className="eyebrow">Cargo Hold &middot; Things I've Built</p>
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
