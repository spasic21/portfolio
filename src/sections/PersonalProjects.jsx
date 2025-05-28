import {personalProjects} from "../constants/index.js";
import {useState} from "react";
import leftArrow from "../assets/left-arrow.png";
import upArrow from "../assets/arrow-up.png";
import rightArrow from "../assets/right-arrow.png";
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
                    <div className="grid-container h-96 min-h-96 flex flex-col">
                        <div className="flex flex-col gap-5 text-white-600 my-5">
                            <p className="text-white text-2xl font-semibold">{currentProject.title}</p>
                            <p className="grid-subtext">{currentProject.description}</p>
                        </div>
                        <div className="mt-auto">
                            <div className="flex justify-between items-center">
                                <button className="arrow-btn" onClick={() => handleNavigation("previous")}>
                                    <img src={leftArrow} alt="left arrow" className="w-4 h-4" />
                                </button>
                                <a className="flex items-center gap-2 cursor-pointer text-white-600" href={currentProject.href} target="_blank" rel="noreferrer">
                                    <p>Check Out Project</p>
                                    <img src={upArrow} alt="arrow" className="w-3 h-3" />
                                </a>
                                <button className="arrow-btn" onClick={() => handleNavigation("next")}>
                                    <img src={rightArrow} alt="right arrow" className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                        <Slideshow images={currentProject.images} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PersonalProjects;