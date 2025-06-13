import BallCanvas from "../components/Ball.jsx";
import {technologies} from "../constants/index.js";

const TechStack = () => {
    return(
        <section className="c-space my-20 scroll-mt-20" id="tech">
            <h3 className="head-text">Tech Stack</h3>

            <div className="flex flex-row flex-wrap justify-center gap-10">
                {technologies.map((tech) => (
                    <div className="w-28 h-28" key={tech.name}>
                        <BallCanvas icon={tech.icon}/>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TechStack;