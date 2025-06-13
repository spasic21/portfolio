import {workExperiences} from "../constants/index.js";
import WorkCard from "../components/WorkCard.jsx";

const Experience = () => {
    return (
        <section className="c-space my-20 scroll-mt-20" id="work">
            <div className="w-full text-white-600">
                <h3 className="head-text">Work Experience</h3>

                <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                    {workExperiences.map(({id, name, position, duration, responsibilities, icon}) => (
                        <WorkCard key={id} name={name} position={position} duration={duration} responsibilities={responsibilities} icon={icon} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience;