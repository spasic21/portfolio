import BallCanvas from "../components/Ball.jsx";
import {technologies} from "../constants/index.js";

const TechStack = () => {
    return(
        <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((tech) => (
                <div className="w-28 h-28" key={tech.name}>
                    <BallCanvas icon={tech.icon}/>
                </div>
            ))}
        </div>
    );
}

export default TechStack;