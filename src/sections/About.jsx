import Button from "../components/Button.jsx";
import World from "../components/World.jsx";
import TechStack from "./TechStack.jsx";
import grid3 from "../assets/grid3.png";

const About = () => {
    return (
        <section className="c-space my-20 scroll-mt-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-1">
                    <div className="grid-container">
                        <div className="rounded-3-xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <World/>
                        </div>
                        <div>
                            <p className="grid-headtext">
                                I work remotely!
                            </p>
                            <p className="grid-subtext">
                                I'm based in the United States, with remote work available.
                            </p>
                            <a href="#contact">
                                <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 md:col-span-1 xl:row-span-1">
                    <div className="grid-container">
                        <img src={grid3} alt="grid-3" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <p className="grid-headtext">
                            Professional Summary
                        </p>
                        <p className="grid-subtext">
                            I'm experienced in building and maintaining back-end systems, creating APIs, and modernizing
                            legacy applications using Java and Spring Boot. Proficient in databases like Oracle SQL and
                            MongoDB, with a strong focus on delivering reliable and efficient solutions. Experienced
                            working in Agile teams, improving workflows, and enhancing CI/CD pipelines using tools like
                            Git, Docker, and Jenkins. Dedicated to solving complex problems and delivering high-quality
                            software that meets business needs. Looking forward to joining a team that is passionate about
                            creating innovative solutions.
                        </p>
                    </div>
                </div>

                <div className="col-span-3 xl:row-span-1">
                    <div className="grid-container">
                        <div>
                            <p className="grid-headtext">
                                Tech Stack
                            </p>
                            <TechStack/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;