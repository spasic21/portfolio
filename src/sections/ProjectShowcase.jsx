import {useRef} from "react";
import {personalProjects} from "../constants/index";
import ProjectCard from "../components/ProjectCard";

const ProjectShowcase = () => {
    const containerRef = useRef(null);

    return (
        <section className="c-space my-20 scroll-mt-20" id="projects">
            <div className="w-full text-white-600">
                <h3 className="head-text">Project Showcase</h3>

                <div ref={containerRef}
                     className="relative flex flex-col md:flex-row gap-5 w-full h-auto mt-10 rounded-3xl overflow-hidden">
                    {personalProjects.map((project, i) => (
                        <ProjectCard key={i} project={project} index={i} containerRef={containerRef} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectShowcase;
