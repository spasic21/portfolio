import {personalProjects} from "../constants/index.js";
import {useState} from "react";
import {RiArrowLeftLine, RiArrowRightLine} from "react-icons/ri";
import Slideshow from "../components/Slideshow.jsx";

const projectCount = personalProjects.length;

const PersonalProjects = () => {
    const [projectIndex, setProjectIndex] = useState(0);
    const currentProject = personalProjects[projectIndex];

    const handleNavigation = (direction) => {
        setProjectIndex(prevIndex => {
            if(direction === "previous") {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        })
    };

    return (
        <section className="c-space my-20" id="projects">
            <div className="w-full text-white-600">
                <h3 className="head-text">Personal Projects</h3>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-12">
                    <div className="grid-container h-[28rem] min-h-[28rem] flex flex-col">
                        <div className="flex flex-row justify-between items-center text-white-600 my-2">
                            <p className="text-white text-2xl font-semibold mb-2">{currentProject.title}</p>
                            <img src={currentProject.logo} alt="logo" className="w-24 h-24 rounded-full" />
                        </div>

                        <div className="flex flex-row gap-2">
                            {currentProject.tech.map((Icon, index) => (
                                <Icon key={index} className="tech-logo"/>
                            ))}
                        </div>

                        <p className="text-white-600 text-lg">{currentProject.description}</p>

                        <div className="mt-auto">
                            <div className="flex justify-between items-center">
                                <button className="arrow-btn" onClick={() => handleNavigation("previous")}>
                                    <RiArrowLeftLine className="w-6 h-6" />
                                </button>

                                {currentProject.navLinks.map(({icon: Icon, href}, index) => {
                                    let toolTip = href.includes(".com") ? "Checkout Github Repo!" : "Checkout Live Site!";
                                    toolTip = href.includes(".jar") ? "Download Jar File!" : toolTip;

                                    return (
                                        <a
                                            key={index}
                                            className="relative group flex items-center gap-2 cursor-pointer text-white-600"
                                            href={href}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <Icon className="tech-logo"/>

                                            <span className="absolute top-full left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-200 bg-gray-800 text-white text-xs px-2 py-1 mt-1 rounded z-50 whitespace-nowrap">
                                                {toolTip}
                                            </span>
                                        </a>
                                    );
                                })}

                                <button className="arrow-btn" onClick={() => handleNavigation("next")}>
                                    <RiArrowRightLine className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <Slideshow images={currentProject.images} />
                </div>
            </div>
        </section>
    );
}

export default PersonalProjects;